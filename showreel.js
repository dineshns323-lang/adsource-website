/* =====================================================================
   AdSource — real video clips: hero editor, showreel grid, lightbox
   ===================================================================== */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const safePlay = v => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };

  /* ---------------- HERO EDITOR ---------------- */
  const hv = $(".hv");
  if (hv) {
    const vids = $$(".hv-vid", hv), segs = $$(".hv-seg", hv);
    const head = $(".hv-head", hv), tc = $(".hv-tc", hv), label = $(".hv-label", hv), tl = $(".hv-tl", hv);
    const audio = $(".hv-audio", hv);
    // random-looking but stable waveform
    for (let i = 0; i < 64; i++) { const b = document.createElement("i"); b.style.setProperty("--h", (25 + Math.abs(Math.sin(i * 1.7) * 60 + Math.sin(i * .45) * 15)) + "%"); audio.appendChild(b); }

    let cur = 0;
    const show = i => {
      vids[cur].classList.remove("is-on"); vids[cur].pause();
      segs[cur].classList.remove("is-on");
      cur = (i + vids.length) % vids.length;
      const v = vids[cur]; v.currentTime = 0; v.classList.add("is-on"); segs[cur].classList.add("is-on");
      if (!reduce) safePlay(v);
      label.classList.add("swap");
      setTimeout(() => { label.textContent = v.dataset.label; label.classList.remove("swap"); }, 250);
    };
    vids.forEach((v, i) => v.addEventListener("ended", () => { if (i === cur) show(cur + 1); }));
    segs.forEach((s, i) => s.addEventListener("click", () => show(i)));

    const pad = n => String(Math.floor(n)).padStart(2, "0");
    const tick = () => {
      const v = vids[cur], d = v.duration || 5, t = v.currentTime || 0;
      const total = cur * 5 + t;
      tc.textContent = `00:${pad(total / 60)}:${pad(total % 60)}:${pad((total * 24) % 24)}`;
      const seg = segs[cur], box = tl.getBoundingClientRect(), r = seg.getBoundingClientRect();
      const x = r.left - box.left + r.width * Math.min(t / d, 1);
      head.style.transform = `translateX(${x - 14}px)`;
      requestAnimationFrame(tick);
    };
    vids[0].classList.add("is-on"); segs[0].classList.add("is-on"); label.textContent = vids[0].dataset.label;
    if (!reduce) safePlay(vids[0]);
    requestAnimationFrame(tick);
    // pause everything when the hero is off screen
    new IntersectionObserver(([e]) => {
      const phone = $(".hv-phone video", hv);
      if (e.isIntersecting && !reduce) { safePlay(vids[cur]); safePlay(phone); } else { vids[cur].pause(); phone.pause(); }
    }).observe(hv);
  }

  /* ---------------- SHOWREEL GRID ---------------- */
  const grid = $(".reel-grid");
  if (grid) {
    const tiles = $$(".reel-tile", grid);
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      const v = $("video", e.target);
      if (e.isIntersecting && !reduce) safePlay(v); else v.pause();
    }), { threshold: .25 });
    tiles.forEach(t => io.observe(t));

    const loop = () => {
      tiles.forEach(t => { const v = $("video", t); if (v.duration) $(".reel-prog", t).style.transform = `scaleX(${v.currentTime / v.duration})`; });
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    // filters
    $$(".reel-filters button").forEach(btn => btn.addEventListener("click", () => {
      $$(".reel-filters button").forEach(b => b.setAttribute("aria-pressed", b === btn));
      const f = btn.dataset.filter;
      grid.classList.toggle("filtering", f !== "all");
      tiles.forEach(t => t.classList.toggle("is-out", f !== "all" && !t.dataset.cat.split(" ").includes(f)));
    }));

    // lightbox
    const lb = $("#lb"), lbVid = $("video", lb), lbTitle = $(".lb-title", lb), lbMeta = $(".lb-meta", lb);
    let last = null;
    const open = t => {
      last = t;
      lbVid.src = $("video", t).currentSrc || $("video", t).src;
      lbTitle.textContent = $("h3", t).textContent; lbMeta.textContent = $(".reel-tag", t).textContent + " · " + $(".reel-ratio", t).textContent;
      lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
      lbVid.muted = false; safePlay(lbVid); $(".lb-close", lb).focus();
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); lbVid.pause();
      document.body.style.overflow = ""; if (last) last.focus();
    };
    tiles.forEach(t => {
      t.addEventListener("click", () => open(t));
      t.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(t); } });
    });
    $(".lb-close", lb).addEventListener("click", close);
    lb.addEventListener("click", e => { if (e.target === lb) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && lb.classList.contains("open")) close(); });
  }

  /* ---------------- Real footage in existing animations: play only when visible ---------------- */
  $$("video[data-autoplay-visible]").forEach(v => new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !reduce) safePlay(v); else v.pause();
  }).observe(v));
})();
