/* =====================================================================
   AdSource — shared JavaScript for every page
   ---------------------------------------------------------------------
   The parts you are most likely to edit are at the TOP of this file:

     1. CONFIG ........ phone, email, WhatsApp, social links,
                        contact-form delivery, budget options
     2. SERVICES ...... service names used in menus, footer and forms
     3. BLOG_POSTS .... your blog articles

   Everything below "SITE CODE" makes the site work. You normally
   don't need to touch it.
   ===================================================================== */


/* =====================================================================
   1. CONFIG — CHANGE YOUR CONTACT DETAILS HERE
   They appear in the footer, contact page, WhatsApp button and forms.
   ===================================================================== */
const CONFIG = {
  businessName: "AdSource",
  tagline: "Video editing, UGC ads and AI video for creators and brands.",

  phone: "+91 79048 57282",                                  // e.g. "+91 98765 43210"
  email: "adsource.business@gmail.com",                      // e.g. "hello@adsource.in"
  whatsapp: "+91 79048 57282",                               // with country code; spaces are fine (the link strips them)
  whatsappMessage: "Hi AdSource! I'd like to talk about a video project.",

  // Your social media profile links
  socials: {
    instagram: "https://www.instagram.com/adsource.in/",
    youtube: "https://youtube.com/@[YOUR-CHANNEL]",
    facebook: "https://facebook.com/[YOUR-PAGE]",
    linkedin: "https://linkedin.com/company/[YOUR-COMPANY]",
  },

  /* CONTACT FORM DELIVERY
     Paste a form endpoint here so enquiries land in your inbox automatically.
     Free option: create a form at https://formspree.io and paste its URL,
     e.g. "https://formspree.io/f/abcdwxyz".
     If left empty, the form opens the visitor's email app instead,
     addressed to CONFIG.email above. */
  formEndpoint: "",

  // Animated video-style previews on blog cards (false = show cover images)
  animatedBlogCovers: true,

  // Budget options shown in the contact form dropdown
  budgets: [
    "Under ₹10,000",
    "₹10,000 – ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000 – ₹1,00,000",
    "Above ₹1,00,000",
    "Not sure yet",
  ],
};


/* =====================================================================
   2. SERVICES — names used in the footer and form dropdowns.
   The full service descriptions live in services.html.
   "slug" must match the id of the section in services.html.
   ===================================================================== */
const SERVICES = [
  { slug: "youtube-editing", name: "YouTube Video Editing" },
  { slug: "ugc-ads", name: "UGC Ads" },
  { slug: "ai-video-editing", name: "AI Video Editing" },
  { slug: "short-form-video", name: "Short-Form Video (Reels, Shorts, TikTok)" },
  { slug: "social-media-ads", name: "Social Media Ads (Meta & Instagram)" },
  { slug: "social-media-management", name: "Social Media Management" },
  { slug: "ecommerce-ads", name: "E-commerce & Marketplace Ads" },
];


/* =====================================================================
   2b. SERVICE PAGES — content for service.html?s=SLUG
   ---------------------------------------------------------------------
   Each "Learn more" link opens service.html with one of these.
     title, tagline, intro – the text at the top of the page
     icon        – SVG shapes for the icon (24x24 grid)
     includes    – "What's included" list
     steps       – 4 steps: [title, text]
     bestFor     – who the service is for
     glance      – "At a glance" box: [label, value]
     faqs        – [question, answer]
   ===================================================================== */
const SERVICE_PAGES = {
  "youtube-editing": {
    title: "YouTube Video Editing",
    tagline: "Long-form edits that keep viewers watching to the end.",
    intro: "Send us your raw footage and we turn it into a polished YouTube video with tight pacing, clean sound, colour, subtitles, B-roll and a thumbnail that gets clicks. You focus on creating, we handle the edit.",
    icon: '<rect x="3" y="5" width="18" height="14" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
    includes: ["Cutting mistakes, pauses and filler words", "Pacing and story structure that holds attention", "Colour correction and grading", "Audio cleanup, levels and background music", "Subtitles and on-screen text", "B-roll, zooms, sound effects and transitions", "Intro, outro and end-screen setup", "Custom thumbnail design"],
    steps: [["Send footage", "Share your raw clips through Google Drive, WeTransfer or any link."], ["We edit", "We build the story, clean the audio and add visuals and captions."], ["You review", "Watch the draft and send your changes in one simple list."], ["Final delivery", "Get the final video and thumbnail, ready to upload."]],
    bestFor: "YouTubers, podcasters, coaches, educators and brands with a YouTube channel.",
    glance: [["Formats", "16:9 long-form, 4K or 1080p"], ["Delivery", "MP4 + thumbnail (PNG/JPG)"], ["Revisions", "Included with every video"]],
    faqs: [["How long does an edit take?", "It depends on the video length and style. We agree on a delivery date before we start, and regular clients get a fixed weekly schedule."], ["Can you match my current editing style?", "Yes. Share a few videos you like and we’ll follow the same style, fonts and pacing."], ["Do you upload to my channel?", "We can deliver the files to you, or upload and schedule them with titles and descriptions if you give us access."]],
  },
  "ugc-ads": {
    title: "UGC Ads",
    tagline: "Real people, real reactions — ads that feel like content, not commercials.",
    intro: "UGC (user-generated content) ads use real creators talking about your product in their own words, filmed on a phone the way people actually post. They build trust fast and often outperform polished studio ads on Instagram, Facebook, YouTube Shorts and TikTok. We handle the script, creators and edit — you get scroll-stopping ads ready to run.",
    icon: '<rect x="6" y="2" width="12" height="20" rx="3"/><circle cx="12" cy="10" r="2.5"/><path d="M8.5 17c.8-1.8 2-2.7 3.5-2.7s2.7.9 3.5 2.7"/>',
    includes: ["Ad scripts with strong hooks", "Matching you with the right UGC creators", "Product demos, unboxings and reviews", "Testimonial and problem–solution ads", "Multiple hook variations for testing", "Captions, music and on-screen text", "Vertical edits for Reels, Shorts and TikTok", "Raw footage and edited ads delivered"],
    steps: [["Brief", "Tell us about your product, audience and what you want the ad to achieve."], ["Script & creators", "We write the hooks and script and pick creators who fit your brand."], ["Film & edit", "Creators film the content and our editors turn it into scroll-stopping ads."], ["Deliver", "Get ready-to-run ads with hook variations for testing."]],
    bestFor: "D2C brands, e-commerce stores, apps, restaurants and local businesses running paid social ads.",
    glance: [["Formats", "9:16 vertical, plus 1:1 and 4:5"], ["Platforms", "Instagram, Facebook, YouTube Shorts, TikTok"], ["Testing", "Multiple hooks per ad"]],
    faqs: [["What is a UGC ad?", "A short video ad made by a real person, filmed in a natural, phone-shot style. It looks like a normal post, so people trust it and watch it."], ["Do I need to send my product to the creator?", "Yes, for most product ads we ship it to the creator so they can show it on camera. For services and apps, they can record using your website or app."], ["Can I use the ads on any platform?", "Yes. We deliver vertical and square versions so you can run them on Instagram, Facebook, YouTube and TikTok."]],
  },
  "ai-video-editing": {
    title: "AI Video Editing",
    tagline: "Faster, smarter edits with AI, finished by real editors.",
    intro: "We combine the latest AI tools with human editing to save you time and money. Get automatic subtitles, AI voiceovers, avatars, background removal, upscaling, and long videos turned into many short clips.",
    icon: '<path d="M10 3l1.8 4.7L16.5 9.5l-4.7 1.8L10 16l-1.8-4.7L3.5 9.5l4.7-1.8z"/><path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z"/>',
    includes: ["Auto subtitles in many languages", "AI voiceovers in natural voices", "AI avatars and presenter videos", "Background removal and replacement", "Video and photo upscaling", "Noise removal and voice enhancement", "Long videos repurposed into short clips", "Human review of every AI result"],
    steps: [["Share content", "Send your videos, script or idea."], ["AI processing", "We use the right AI tools for subtitles, voice, clips or cleanup."], ["Human polish", "Our editors check and fix every result so it looks natural."], ["Deliver", "Receive ready-to-post videos for every platform."]],
    bestFor: "Creators and businesses who need more content, faster, or videos in multiple languages.",
    glance: [["Best use", "Volume content and repurposing"], ["Languages", "Subtitles and voiceovers in many languages"], ["Quality", "Every video checked by a human editor"]],
    faqs: [["Will AI videos look fake?", "Not when done well. Every AI result is reviewed and polished by our editors before you see it."], ["Can you turn one long video into many clips?", "Yes. We find the best moments and turn them into short, captioned clips for Reels, Shorts and TikTok."], ["Who owns the final videos?", "You do. All final videos are yours to use on any platform."]],
  },
  "short-form-video": {
    title: "Short-Form Video",
    tagline: "Reels, Shorts and TikToks that stop the scroll.",
    intro: "Short videos are the fastest way to grow reach. We write hooks, edit fast-paced videos with bold captions, and follow the trends that work on each platform right now.",
    icon: '<rect x="7" y="2.5" width="10" height="19" rx="3"/><path d="M11 10v4l3.2-2z" fill="currentColor"/>',
    includes: ["Video ideas and strong opening hooks", "Short scripts and talking points", "Fast, engaging editing", "Bold animated captions", "Trending sounds and formats", "Cover images for each video", "Versions for Reels, Shorts and TikTok", "Monthly content packs"],
    steps: [["Plan", "We plan video ideas and hooks for the month."], ["Film", "You record using our simple shot list, or send existing footage."], ["Edit", "We edit with captions, music and effects in 9:16."], ["Post", "Get videos ready to post, or we schedule them for you."]],
    bestFor: "Restaurants, salons, gyms, coaches, creators, shops and personal brands.",
    glance: [["Format", "9:16 vertical, 1080×1920"], ["Platforms", "Instagram Reels, YouTube Shorts, TikTok"], ["Packages", "Single videos or monthly packs"]],
    faqs: [["I don’t know what to post. Can you help?", "Yes. We give you a monthly list of video ideas with hooks and a simple shot list to film."], ["Can one video work on all platforms?", "Yes. We export clean versions for Reels, Shorts and TikTok without watermarks, keeping captions clear of each app’s buttons."], ["How many videos should I post?", "Consistency matters more than volume. Most brands do well with 2–3 short videos a week, and we’ll suggest a plan that fits your budget."]],
  },
  "social-media-ads": {
    title: "Social Media Ads",
    tagline: "Meta & Instagram ads that turn attention into enquiries and sales.",
    intro: "We plan, create and run paid campaigns on Facebook and Instagram. Every campaign starts with a clear goal and proper tracking, uses scroll-stopping video creative from our editing team, and is optimised every day so your budget goes further.",
    icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/>',
    includes: ["Campaign strategy and audience research", "Ad copy and creative design (images, carousels, videos)", "Video ad creative made by our editors", "Targeting, retargeting and lookalike audiences", "Meta Pixel and conversion tracking setup", "A/B testing to find the best-performing ads", "Budget management and daily optimisation", "Monthly performance reports with clear results"],
    steps: [["Strategy", "We agree your goal, audience, offer and budget."], ["Setup", "We install tracking, build audiences and create the ads."], ["Launch & test", "Ads go live and we test creatives to find the winners."], ["Optimise & report", "We improve results every week and send a clear monthly report."]],
    bestFor: "Local businesses, service providers, brands and online stores that want more leads, bookings or sales.",
    glance: [["Platforms", "Facebook, Instagram and Messenger"], ["Ad spend", "Paid directly to Meta, separate from our fee"], ["Reporting", "Clear monthly performance report"]],
    faqs: [["How much should I spend on ads?", "It depends on your goal and market. Many businesses start with a modest daily budget and scale up once ads are profitable. We’ll recommend a starting budget in your free plan."], ["How soon will I see results?", "Ads collect data from day one, but the first 2–4 weeks are for testing. Results usually improve as we find the best audiences and creatives."], ["Do you guarantee sales?", "No honest agency can guarantee sales. What we do guarantee is proper tracking, regular testing and transparent reporting, so you always know what your money is doing."]],
  },
  "social-media-management": {
    title: "Social Media Management",
    tagline: "Active, professional pages without the daily effort.",
    intro: "We take care of your social media every month: planning, designing, writing, posting and replying. Your pages stay active and on-brand while you focus on running your business.",
    icon: '<rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M8 2.5v4M16 2.5v4M3 9.5h18"/><path d="M12 17.5s-3-1.8-3-3.8a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 2-3 3.8-3 3.8z" fill="currentColor"/>',
    includes: ["Monthly content calendar and planning", "Post and story design in your brand style", "Short videos and Reels from our editing team", "Captions, hashtags and scheduling", "Profile setup and optimisation", "Replying to comments and messages", "Follower growth and engagement strategy", "Monthly insights report"],
    steps: [["Onboard", "We learn your brand, audience and goals, and optimise your profiles."], ["Plan", "You get a monthly content calendar to review and approve."], ["Create & post", "We design, write and schedule every post and story."], ["Engage & report", "We reply to comments and messages and share monthly insights."]],
    bestFor: "Businesses that know social media matters but don’t have the time or team to manage it.",
    glance: [["Platforms", "Instagram, Facebook, LinkedIn and YouTube"], ["Content", "Posts, stories, carousels and Reels"], ["Approval", "You approve the calendar before anything goes live"]],
    faqs: [["Which platforms do you manage?", "Most clients start with Instagram and Facebook. We also manage LinkedIn and YouTube, depending on where your customers spend time."], ["Will I approve posts before they go live?", "Yes. You review the monthly calendar first, and nothing is posted without your approval."], ["Do I need to send photos and videos?", "Your own photos and videos build the most trust, so we give you a simple shot list. We also use designed graphics and licensed stock where needed."]],
  },
  "ecommerce-ads": {
    title: "E-commerce & Marketplace Ads",
    tagline: "More orders at a lower cost on Amazon, Flipkart and Shopify.",
    intro: "We run and optimise ads on marketplaces and online stores with one focus: profitable sales. From sponsored product ads to catalog and retargeting campaigns, we track return on ad spend (ROAS) and scale what works.",
    icon: '<path d="M5 8h14l-1.2 12.5H6.2z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    includes: ["Amazon and Flipkart sponsored product ads", "Shopify and Meta catalog / shopping ads", "Product videos and ad creatives", "Product listing improvement for better conversions", "Keyword and competitor research", "Dynamic retargeting for cart abandoners", "ROAS tracking and budget scaling", "Sales and performance reports"],
    steps: [["Audit", "We review your listings, past ads, margins and competitors."], ["Set up", "We build campaigns, keyword lists and catalog feeds."], ["Optimise", "We adjust bids, keywords and budgets every week."], ["Scale", "We put more budget behind what is profitable and report on sales and ROAS."]],
    bestFor: "Online stores, D2C brands and marketplace sellers who want more orders at a lower cost.",
    glance: [["Platforms", "Amazon, Flipkart, Shopify and Meta catalog"], ["Focus", "ROAS and profit, not just clicks"], ["Reporting", "Regular sales and performance reports"]],
    faqs: [["Can you manage Amazon and Flipkart together?", "Yes. Many sellers run on both, and we manage the campaigns side by side so you can compare results in one report."], ["What is ROAS?", "Return on ad spend: the sales you make for every rupee spent on ads. A ROAS of 4 means ₹4 in sales for every ₹1 of ad spend."], ["Can you improve my product listings?", "Yes. Better titles, images, bullet points and product videos often lift conversions before we spend more on ads."]],
  },
};


/* =====================================================================
   2c. SERVICE GOALS — the "Not sure where to start?" picker on services.html
   Each goal highlights the services listed (use the SERVICE_PAGES slugs).
   ===================================================================== */
const SERVICE_GOALS = [
  { label: "Grow my YouTube channel", services: ["youtube-editing", "short-form-video"] },
  { label: "Look more professional", services: ["ugc-ads", "youtube-editing"] },
  { label: "Post more, faster", services: ["ai-video-editing", "short-form-video", "social-media-management"] },
  { label: "Get more local customers", services: ["social-media-ads", "social-media-management", "short-form-video"] },
  { label: "Sell more online", services: ["ecommerce-ads", "social-media-ads"] },
];


/* =====================================================================
   3. BLOG POSTS
   ---------------------------------------------------------------------
   To add a post, copy one { ... } block, give it a new unique "slug"
   (lowercase-with-dashes) and write the content in simple HTML:
   <p> paragraph, <h2> section heading (appears in the table of
   contents), <ul><li> bullet list, <blockquote> highlighted note.
   The post opens at: blog-post.html?post=YOUR-SLUG
   "preview" picks the animated card cover: "youtube", "ugc", "motion", "ai",
   "short", "meta" or "thumb". Set preview: "" to show the cover image
   instead (do this when you use your own cover photo).
   Newest date shows first.
   ===================================================================== */
const BLOG_POSTS = [
  {
    slug: "edit-youtube-videos-that-keep-viewers-watching",
    title: "How to edit YouTube videos that keep viewers watching",
    category: "YouTube",
    date: "2026-10-14",
    author: "AdSource Team",
    cover: "images/blog/cover-01.svg",
    preview: "youtube",
    excerpt: "Retention is what YouTube rewards. Here's the editing playbook we use to keep viewers watching from the first second to the end screen.",
    content: `
<p class="lede">YouTube doesn't just count views — it watches how long people stay. Average view duration and audience retention tell the algorithm whether your video is worth recommending. The good news: most retention problems can be fixed in the edit.</p>

<h2>Win the first 30 seconds</h2>
<p>The biggest drop-off on almost every video happens in the first 30 seconds. Viewers clicked because of your title and thumbnail, so confirm that promise immediately.</p>
<ul>
  <li><strong>Start with the payoff.</strong> Show a glimpse of the result, the best moment or the big question before any introduction.</li>
  <li><strong>Cut the warm-up.</strong> "Hey guys, welcome back to the channel" can usually go. Get to the point, then introduce yourself later if needed.</li>
  <li><strong>Keep branded intros short.</strong> A 2–3 second sting is enough. Long logo animations cost viewers.</li>
</ul>

<h2>Control the pacing</h2>
<p>Good pacing feels effortless to watch. Remove pauses, repeated sentences, "umms" and false starts. Jump cuts are completely normal on YouTube, and audiences prefer a tight edit to a slow one.</p>
<p>That doesn't mean every video should be frantic. A calm tutorial needs room to breathe, while a challenge video can move fast. Match the rhythm to the content and change it up so the viewer never settles into "background" mode.</p>

<h2>Add pattern interrupts</h2>
<p>Attention fades when nothing on screen changes. Every 5–15 seconds, give the eye something new:</p>
<ul>
  <li>a punch-in zoom or change of camera angle</li>
  <li>B-roll that shows what you're talking about</li>
  <li>on-screen text, simple graphics or a quick sound effect</li>
  <li>a cutaway to a screen recording, photo or meme</li>
</ul>

<h2>Use open loops</h2>
<p>Tease what's coming: "In a minute I'll show you the mistake that cost me 10,000 views." Open loops give people a reason to keep watching. Just make sure you deliver on every promise, or viewers will stop trusting you.</p>

<h2>Make it sound great</h2>
<p>Viewers forgive average video far more than bad audio. Clean up background noise, level your voice so it's consistent, and keep music well below dialogue. Subtitles help too — many people watch on mute or in a second language.</p>

<h2>Read your retention graph</h2>
<p>YouTube Studio shows exactly where people leave. Look for sharp drops and ask what happened at that moment: a slow section, an off-topic tangent, a sponsor read? Take those lessons into your next edit. Over a few videos, this habit alone can lift your average view duration noticeably.</p>

<blockquote>Rule of thumb: if a section doesn't move the story forward, inform, or entertain — cut it.</blockquote>
`,
  },
  {
    slug: "ugc-ads-why-real-people-sell-better",
    title: "UGC ads: why real people sell better than polished ads",
    category: "UGC Ads",
    date: "2026-10-07",
    author: "AdSource Team",
    cover: "images/blog/cover-02.svg",
    preview: "ugc",
    excerpt: "Phone-shot videos from real customers and creators often beat studio ads. Here's why UGC works, and how to make UGC ads that convert.",
    content: `
<p class="lede">UGC (user-generated content) ads are short videos that look like they were made by a real customer: filmed on a phone, talking straight to camera, showing the product in everyday life. They don't look like ads, and that's exactly why they work.</p>

<h2>Why UGC ads work</h2>
<p>People trust people more than brands. When a real person shares an honest experience, viewers see proof instead of a sales pitch. UGC also blends into the feed on Instagram, TikTok and YouTube Shorts, so people watch it instead of scrolling past.</p>
<ul>
  <li><strong>Trust:</strong> real faces and honest reviews feel believable.</li>
  <li><strong>Native feel:</strong> it looks like content, not an advert.</li>
  <li><strong>Lower cost:</strong> no big shoot, so you can test many versions.</li>
  <li><strong>Faster testing:</strong> new hooks and angles can go live in days.</li>
</ul>

<h2>The anatomy of a winning UGC ad</h2>
<ul>
  <li><strong>Hook (0–3 seconds):</strong> a relatable problem, a bold claim or a surprising moment.</li>
  <li><strong>Problem:</strong> the frustration your customer feels before finding you.</li>
  <li><strong>Product in action:</strong> show it being used, not just held up to the camera.</li>
  <li><strong>Result:</strong> the before/after, the feeling, the benefit.</li>
  <li><strong>Call to action:</strong> one clear next step, such as "tap Shop now".</li>
</ul>

<h2>Popular UGC formats</h2>
<ul>
  <li><strong>Testimonial:</strong> a customer explains why they love the product.</li>
  <li><strong>Unboxing:</strong> first impressions as the product is opened.</li>
  <li><strong>Demo or tutorial:</strong> "here's how I use it every day".</li>
  <li><strong>Problem/solution:</strong> "I tried everything until I found this".</li>
  <li><strong>Reaction or comparison:</strong> side-by-side with an alternative.</li>
</ul>

<h2>The edit still matters</h2>
<p>UGC should look natural, not careless. Good editing tightens the pacing, adds captions for silent viewers, highlights key words on screen and cuts several hook variations from the same footage. One creator video can become five or more ads to test.</p>

<h2>Test hooks, then scale</h2>
<p>Run several hooks against the same body of the video and let the data choose. Keep the winners running, refresh creative when results slow down, and bring in new creators regularly so your ads never feel stale.</p>

<div class="tip-box"><strong>Quick win:</strong> ask three happy customers for a 30-second phone video answering "what problem did this solve for you?", then edit each into a few hook variations.</div>
`,
  },
  {
    slug: "ai-video-editing-tools-that-save-hours",
    title: "AI video editing tools that save hours of work",
    category: "AI Editing",
    date: "2026-09-29",
    author: "AdSource Team",
    cover: "images/blog/cover-03.svg",
    preview: "ai",
    excerpt: "Auto subtitles, AI voiceovers, background removal, upscaling and clipping — where AI genuinely speeds up editing, and where humans still matter.",
    content: `
<p class="lede">AI has changed video editing. Tasks that used to take hours — subtitling, finding clips, removing backgrounds — now take minutes. Here's where AI genuinely helps, and how we combine it with human editing for the best results.</p>

<h2>Automatic subtitles</h2>
<p>Speech-to-text tools can transcribe a video in minutes, and most editing apps (Premiere Pro, DaVinci Resolve and CapCut included) now generate captions automatically. Always review them — names, brand terms and mixed languages still trip AI up — but the time saved is huge.</p>

<h2>Text-based editing</h2>
<p>Several editors let you edit video by editing its transcript: delete a sentence in the text and it disappears from the timeline. It's a fast way to make a rough cut of interviews, podcasts and talking-head videos.</p>

<h2>AI voiceovers and avatars</h2>
<p>AI voices now sound natural enough for explainers, training videos and ads, and can be produced in several languages. AI avatars can present scripted content without a camera shoot. They work best for informational content; for personal brands, real faces and voices still build more trust.</p>

<h2>Background removal and clean-up</h2>
<p>Removing a background used to require a green screen. AI rotoscoping can now cut out a person automatically. Similar tools remove background noise, echo and even unwanted objects in a shot.</p>

<h2>Upscaling and restoration</h2>
<p>AI upscaling can turn older or lower-resolution footage into sharper HD or 4K, reduce noise and smooth out shaky clips. It's useful when you need to reuse archive footage or phone videos in a professional edit.</p>

<h2>Repurposing long videos into Shorts</h2>
<p>AI clipping tools scan a long video, find the strongest moments and reframe them vertically. This is one of the biggest time savers for creators and podcasters — one long video can become a week of Shorts and Reels.</p>

<h2>Where humans still win</h2>
<p>AI is excellent at repetitive tasks, but it doesn't understand your audience. Choosing the best hook, timing a joke, building a story and keeping a consistent brand style still need an editor's judgement. Our approach:</p>
<ul>
  <li>let AI handle the busywork (transcripts, rough clips, clean-up)</li>
  <li>let editors handle story, pacing, design and quality control</li>
</ul>

<blockquote>The result: faster turnaround and lower cost, without the "obviously automated" look.</blockquote>
`,
  },
  {
    slug: "reels-vs-youtube-shorts-what-works-best",
    title: "Reels vs YouTube Shorts: what works best",
    category: "Short-Form",
    date: "2026-09-20",
    author: "AdSource Team",
    cover: "images/blog/cover-04.svg",
    preview: "short",
    excerpt: "Same vertical format, different platforms. How Instagram Reels and YouTube Shorts differ — and how to make one video work on both.",
    content: `
<p class="lede">Instagram Reels and YouTube Shorts look almost identical: short, vertical, full-screen videos. But the platforms reward slightly different things, and knowing the difference helps you get more from every video.</p>

<h2>What Reels are best at</h2>
<p>Reels live inside Instagram, where people already follow brands, local businesses and creators. They're great for:</p>
<ul>
  <li><strong>Local discovery:</strong> restaurants, salons, gyms and shops reaching people nearby.</li>
  <li><strong>Brand personality:</strong> behind-the-scenes, trends and relatable humour.</li>
  <li><strong>Turning viewers into customers:</strong> people can visit your profile, send a DM or tap through to products in a couple of taps.</li>
</ul>

<h2>What Shorts are best at</h2>
<p>Shorts sit inside YouTube, the world's biggest video search engine. They work especially well for:</p>
<ul>
  <li><strong>Growing a YouTube channel:</strong> Shorts bring in new subscribers who may go on to watch your long videos.</li>
  <li><strong>Evergreen content:</strong> tips and how-tos can keep getting views for months.</li>
  <li><strong>Clips from long videos:</strong> the natural place to repurpose your best YouTube moments.</li>
</ul>

<h2>What works on both</h2>
<ul>
  <li><strong>A strong hook in the first 1–2 seconds</strong> — a bold statement, a question or a surprising visual.</li>
  <li><strong>Captions</strong>, because many people watch with the sound off.</li>
  <li><strong>Fast, clean editing</strong> with no dead air.</li>
  <li><strong>Vertical 9:16 at 1080×1920</strong>, with text kept away from the edges where buttons appear.</li>
  <li><strong>A loop or payoff at the end</strong> so people rewatch.</li>
</ul>

<h2>Should you post the same video on both?</h2>
<p>Yes — just adapt it slightly. Export a clean version without another platform's watermark, use platform-native music where possible, and write a caption and title for each platform. Then track which topics work where, and lean into what each audience responds to.</p>

<h2>Our recommendation</h2>
<p>If you're a local business, start with Reels. If you're building a YouTube channel or a personal brand around expertise, start with Shorts. Ideally, film once and publish to both — the extra reach costs very little.</p>
`,
  },
  {
    slug: "plan-meta-ads-that-actually-convert",
    title: "How to plan Meta ads that actually convert",
    category: "Meta Ads",
    date: "2026-09-10",
    author: "AdSource Team",
    cover: "images/blog/cover-05.svg",
    preview: "meta",
    excerpt: "A clear goal, tracking, the right audience and scroll-stopping video creative — the four building blocks of Facebook and Instagram ads that sell.",
    content: `
<p class="lede">Boosting a post and hoping for the best is the fastest way to waste ad money. Ads on Facebook and Instagram that convert are planned around a clear goal, solid tracking, the right audience and creative that stops the scroll.</p>

<h2>Start with one clear goal</h2>
<p>Decide what a "result" means before you spend anything: a purchase, a lead form, a WhatsApp message or a booking. Then choose the matching campaign objective in Ads Manager. Running a "traffic" campaign when you want sales usually brings cheap clicks that don't buy.</p>

<h2>Set up tracking first</h2>
<p>Install the Meta Pixel and the Conversions API so Meta can see who actually takes action on your website. Without tracking, the algorithm can't learn who your buyers are — and you can't tell which ads are making money.</p>

<h2>Choose your audience wisely</h2>
<ul>
  <li><strong>Broad audiences</strong> often work well now — Meta's algorithm is good at finding buyers when you give it strong creative and clean data.</li>
  <li><strong>Retargeting</strong> people who visited your site, watched your videos or messaged you usually brings the cheapest conversions.</li>
  <li><strong>Lookalike audiences</strong> based on your customers help you scale.</li>
</ul>

<h2>Creative does the heavy lifting</h2>
<p>Today, your ad creative is your targeting. The video or image decides who stops scrolling. Strong ad creative usually has:</p>
<ul>
  <li>a hook in the first 2 seconds that speaks to a real problem</li>
  <li>the product or result shown early, not at the end</li>
  <li>captions and on-screen text for silent viewing</li>
  <li>social proof such as reviews, numbers or before/after</li>
  <li>one clear call to action</li>
</ul>

<h2>Test, then scale</h2>
<p>Run 3–5 different creatives at once and let the data pick the winner. Give each test enough budget and time (often 3–7 days) before judging. When an ad performs, increase the budget gradually rather than doubling it overnight.</p>

<h2>Watch the right numbers</h2>
<p>Likes and reach feel good, but they don't pay the bills. Focus on cost per result, conversion rate and return on ad spend (ROAS). Check them weekly and refresh creative when results start to slow down — usually a sign of ad fatigue.</p>

<blockquote>Good ads are rarely about a clever trick. They're about a clear offer, honest tracking and fresh creative, tested consistently.</blockquote>
`,
  },
  {
    slug: "thumbnail-tips-that-increase-click-through-rate",
    title: "Thumbnail tips that increase your click-through rate",
    category: "YouTube",
    date: "2026-08-30",
    author: "AdSource Team",
    cover: "images/blog/cover-06.svg",
    preview: "thumb",
    excerpt: "Your thumbnail decides whether anyone sees your edit. Simple design rules to make thumbnails people actually click.",
    content: `
<p class="lede">You can make a brilliant video, but if nobody clicks, nobody sees it. Your thumbnail and title work together as an advert for your video, and small design changes can make a big difference to your click-through rate (CTR).</p>

<h2>Design for a tiny screen</h2>
<p>Most people see your thumbnail on a phone, often smaller than a matchbox. Always check your design at small size. If you can't understand it instantly, simplify it.</p>

<h2>One clear focal point</h2>
<p>Pick one main subject — a face, a product or an object — and make it big. Busy thumbnails with lots of small elements get ignored. Strong contrast between the subject and the background helps it pop.</p>

<h2>Use faces and emotion</h2>
<p>Faces with clear emotion — surprise, excitement, curiosity — attract attention because people naturally read expressions. Make sure the emotion matches the video so viewers don't feel tricked.</p>

<h2>Keep text to a few words</h2>
<p>Use three to five words at most, in a bold, readable font. The text should add to the title, not repeat it. For example, a title "I tried editing with AI for 30 days" could use thumbnail text like "Worth it?"</p>

<h2>Make colours work for you</h2>
<ul>
  <li>Use bright, saturated colours that stand out against YouTube's white and dark themes.</li>
  <li>Keep a consistent style — colours, fonts and layout — so returning viewers recognise your videos.</li>
  <li>Avoid putting important details in the bottom-right corner, where the video length appears.</li>
</ul>

<h2>Create curiosity, not clickbait</h2>
<p>The best thumbnails make people want to know more: a before/after, an unexpected result, or a question. But the video must deliver on the promise — misleading thumbnails cause viewers to leave quickly, which hurts your retention and future reach.</p>

<h2>Test and learn</h2>
<p>YouTube lets you test multiple thumbnails on the same video. Try two or three different ideas, and look at your CTR alongside watch time in YouTube Studio. Over time, you'll learn exactly what your audience responds to.</p>

<div class="tip-box"><strong>Checklist:</strong> big subject · strong contrast · 3–5 words · readable on a phone · matches the video.</div>
`,
  },
];


/* =====================================================================
   BRAND ICONS — official logos from Simple Icons (simpleicons.org, CC0).
   You don't need to edit these.
   ===================================================================== */
const BRAND_ICONS = {
  adobeaftereffects: "M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z",
  adobepremierepro: "M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z",
  amazon: "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z",
  davinciresolve: "M17.621 0 5.977.004c-1.37 0-2.756.345-3.762 1.11a4.925 4.925 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714 1.075-.605 2.025-1.556 2.497-2.984.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0zm0 .93c1.378 0 2.538.295 3.04.565.977.523 1.544 1.166 1.889 1.96.315.721.47 1.793.473 2.572l.018 11.13c.002 1.013-.097 2.257-.298 2.86-.396 1.202-1.146 1.946-2.063 2.462-.814.457-2.612.593-3.82.588l-11.05-.044c-1.657-.007-2.832-.534-3.626-1.386-.792-.851-1.212-2.06-1.212-3.485L.999 5.95c0-.829.196-1.827.474-2.437.345-.757.75-1.207 1.365-1.674C3.585 1.27 4.868.97 6.08.97zm-5.66 3.423c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864zm4.172 7.922a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001zm-8.432.038a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z",
  facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  flipkart: "M3.833 1.333a.993.993 0 0 0-.333.061V1c0-.551.449-1 1-1h14.667c.551 0 1 .449 1 1v.333H3.833zm17.334 2.334H2.833c-.551 0-1 .449-1 1V23c0 .551.449 1 1 1h7.3l1.098-5.645h-2.24c-.051 0-5.158-.241-5.158-.241l4.639-.327-.078-.366-1.978-.285 1.882-.158-.124-.449-3.075-.467s3.341-.373 3.392-.373h3.232l.247-1.331c.289-1.616.945-2.807 1.973-3.693 1.033-.892 2.344-1.332 3.937-1.332.643 0 1.053.151 1.231.463.118.186.201.516.279.859.074.352.14.671.095.903-.057.345-.461.465-1.197.465h-.253c-1.327 0-2.134.763-2.405 2.31l-.243 1.355h1.54c.574 0 .781.402.622 1.306-.17.941-.539 1.36-1.111 1.36H14.9L13.804 24h7.362c.551 0 1-.449 1-1V4.667a1 1 0 0 0-.999-1zM20.5 2.333A.334.334 0 0 0 20.167 2H3.833a.334.334 0 0 0-.333.333V3h17v-.667z",
  instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  meta: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z",
  shopify: "M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z",
  tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  x: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
};


/* =====================================================================
   ===================  SITE CODE — no edits needed  ===================
   ===================================================================== */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;
  const page = document.body.dataset.page || "";
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const brand = (name, label) =>
    `<svg viewBox="0 0 24 24" ${label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"'}><path d="${BRAND_ICONS[name]}"/></svg>`;
  const stroke = d =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const UI = {
    phone: stroke('<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z"/>'),
    mail: stroke('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3.5 7l8.5 6 8.5-6"/>'),
    pin: stroke('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    clock: stroke('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    link: stroke('<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>'),
    check: stroke('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  };
  const waLink = (text = CONFIG.whatsappMessage) =>
    `https://wa.me/${CONFIG.whatsapp.replace(/[^\d]/g, "") || CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const readMins = html => Math.max(1, Math.ceil(html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 200));
  const postsByDate = () => [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  /* ---------------- Header ---------------- */
  const NAV = [
    ["home", "index.html", "Home"],
    ["services", "services.html", "Services"],
    ["blog", "blog.html", "Blog"],
    ["about", "about.html", "About"],
  ];
  const logo = (white) => `
    <a href="index.html" class="logo" aria-label="${CONFIG.businessName} — home">
      <img class="logo-icon" src="images/logo-icon.png" alt="" width="256" height="256">
      <img class="logo-word" src="images/logo-wordmark${white ? "-white" : ""}.png" alt="${CONFIG.businessName}" width="620" height="105">
    </a>`;

  const header = $("#site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <a class="skip-link" href="#main">Skip to content</a>
      <div class="wrap nav">
        ${logo(false)}
        <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu"><span></span><span></span><span></span></button>
        <nav class="nav-links" id="nav-links" aria-label="Main">
          ${NAV.map(([id, href, label]) => `<a href="${href}"${page === id ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
          <a href="contact.html" class="btn ${page === "contact" ? "btn-ghost" : "btn-dark"} btn-sm"${page === "contact" ? ' aria-current="page"' : ""}>Contact us</a>
        </nav>
      </div>`;

    const toggle = $(".nav-toggle", header), links = $("#nav-links");
    const setMenu = open => {
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      links.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    };
    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    links.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
    addEventListener("keydown", e => { if (e.key === "Escape" && links.classList.contains("open")) { setMenu(false); toggle.focus(); } });
    matchMedia("(min-width: 981px)").addEventListener("change", e => { if (e.matches) setMenu(false); });

    const onScroll = () => header.classList.toggle("scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------------- Footer ---------------- */
  const footer = $("#site-footer");
  if (footer) {
    footer.className = "site-footer";
    const s = CONFIG.socials;
    footer.innerHTML = `
      <div class="wrap">
        <div class="foot-grid">
          <div>
            ${logo(true)}
            <p class="foot-about">${esc(CONFIG.tagline)}</p>
            <div class="socials">
              <a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${brand("instagram")}</a>
              <a href="${s.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${brand("youtube")}</a>
              <a href="${s.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${brand("facebook")}</a>
              <a href="${s.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${brand("linkedin")}</a>
            </div>
          </div>
          <div>
            <h2>Services</h2>
            <ul class="foot-links">
              ${SERVICES.map(x => `<li><a href="service.html?s=${x.slug}">${esc(x.name.replace(/ \(.*\)/, ""))}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h2>Quick links</h2>
            <ul class="foot-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul class="foot-contact">
              <li>${UI.phone}<a href="tel:${CONFIG.phone.replace(/[^\d+]/g, "")}">${esc(CONFIG.phone)}</a></li>
              <li>${UI.mail}<a href="mailto:${CONFIG.email}">${esc(CONFIG.email)}</a></li>
              <li>${stroke('<path d="M4 20l1.3-4A8 8 0 1 1 8.5 19z"/>')}<a href="${waLink()}" target="_blank" rel="noopener">WhatsApp: ${esc(CONFIG.whatsapp)}</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <p>© ${new Date().getFullYear()} ${CONFIG.businessName}. All rights reserved.</p>
          <nav aria-label="Legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms</a></nav>
        </div>
      </div>`;
  }

  /* ---------------- WhatsApp floating button ---------------- */
  const wa = document.createElement("a");
  wa.className = "wa-float";
  wa.href = waLink();
  wa.target = "_blank";
  wa.rel = "noopener";
  wa.setAttribute("aria-label", "Chat with us on WhatsApp");
  wa.innerHTML = `${brand("whatsapp")}<span class="wa-label">Chat on WhatsApp</span>`;
  document.body.appendChild(wa);

  /* Contact details on the contact page (elements with data-contact="...") */
  $$("[data-contact]").forEach(el => {
    const k = el.dataset.contact;
    const val = k === "whatsapp" ? CONFIG.whatsapp : CONFIG[k];
    const target = el.matches("a") ? el : el.closest("a");
    $("strong", el) ? ($("strong", el).textContent = val) : (el.textContent = val);
    if (target) {
      if (k === "phone") target.href = "tel:" + CONFIG.phone.replace(/[^\d+]/g, "");
      if (k === "email") target.href = "mailto:" + CONFIG.email;
      if (k === "whatsapp") { target.href = waLink(); target.target = "_blank"; target.rel = "noopener"; }
    }
  });
  $$("[data-wa-link]").forEach(a => { a.href = waLink(); a.target = "_blank"; a.rel = "noopener"; });

  /* Brand icons placed in the HTML with data-icon="youtube" etc. */
  $$("[data-icon]").forEach(el => { if (BRAND_ICONS[el.dataset.icon]) el.innerHTML = brand(el.dataset.icon); });

  /* ---------------- Platform strip (home) ---------------- */
  const strip = $("#platform-strip");
  if (strip) {
    const P = [["youtube", "YouTube"], ["instagram", "Instagram"], ["facebook", "Facebook"], ["meta", "Meta"], ["tiktok", "TikTok"], ["amazon", "Amazon"], ["flipkart", "Flipkart"], ["shopify", "Shopify"]];
    const items = P.map(([k, n]) => `<span class="platform">${brand(k)}${n}</span>`).join("");
    strip.innerHTML = `<div class="marquee-track"><div class="marquee-group">${items}${items}</div><div class="marquee-group" aria-hidden="true">${items}${items}</div></div>`;
  }

  /* ---------------- Single service page (service.html?s=slug) ---------------- */
  const svPage = $("#service-page");
  if (svPage) {
    const slug = new URLSearchParams(location.search).get("s");
    const sv = SERVICE_PAGES[slug];
    if (!sv) {
      svPage.innerHTML = `<section class="page-hero"><div class="wrap"><h1>Service not found</h1><p><a class="text-link" href="services.html">See all services <span class="arrow">→</span></a></p></div></section>`;
    } else {
      document.title = `${sv.title} | ${CONFIG.businessName}`;
      const setMeta = (sel, val) => { const m = $(sel); if (m) m.setAttribute("content", val); };
      setMeta('meta[name="description"]', `${sv.tagline} ${sv.intro}`.slice(0, 300));
      setMeta('meta[property="og:title"]', `${sv.title} | ${CONFIG.businessName}`);
      setMeta('meta[property="og:description"]', sv.tagline);

      $("#sv-ico").innerHTML = stroke(sv.icon);
      $("#sv-title").textContent = sv.title;
      $("#sv-tagline").textContent = sv.tagline;
      $("#sv-intro").textContent = sv.intro;
      $$("[data-sv-ask]").forEach(a => { a.href = `contact.html?service=${slug}`; });
      $("#sv-includes").innerHTML = sv.includes.map(i => `<li>${esc(i)}</li>`).join("");
      $("#sv-best").textContent = sv.bestFor;
      $("#sv-glance").innerHTML = sv.glance.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
      $("#sv-steps").innerHTML = sv.steps.map(([t, d]) => `<div class="step" data-reveal><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("");
      $("#sv-faq").innerHTML = sv.faqs.map(([q, a]) => `<details data-reveal><summary>${esc(q)}</summary><div class="answer"><p>${esc(a)}</p></div></details>`).join("");
      $("#sv-others").innerHTML = Object.entries(SERVICE_PAGES).filter(([k]) => k !== slug).map(([k, o]) => `
        <a class="svc-mini" href="service.html?s=${k}" data-reveal>
          <span class="ico">${stroke(o.icon)}</span>
          <span><strong>${esc(o.title)}</strong><small>${esc(o.tagline)}</small></span>
        </a>`).join("");
    }
  }

  /* ---------------- Services overview (services.html) ----------------
     Cards are built from SERVICE_PAGES: the first 4 are video services,
     the rest digital marketing. */
  const svVideo = $("#svc-video"), svMarketing = $("#svc-marketing");
  if (svVideo && svMarketing) {
    const entries = Object.entries(SERVICE_PAGES);
    const card = ([slug, sv], i) => `
      <article class="svp-card" data-slug="${slug}" data-reveal>
        <span class="svp-badge">Recommended</span>
        <div class="svp-top"><span class="ico">${stroke(sv.icon)}</span><span class="svp-num">${String(i + 1).padStart(2, "0")}</span></div>
        <h3><a class="card-link" href="service.html?s=${slug}">${esc(sv.title)}</a></h3>
        <p>${esc(sv.tagline)}</p>
        <ul class="svp-list">${sv.includes.slice(0, 3).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="svp-foot">
          <span class="svp-more" aria-hidden="true">View details <span class="arrow">→</span></span>
          <a class="btn btn-dark btn-sm svp-quote" href="contact.html?service=${slug}">Get a quote</a>
        </div>
      </article>`;
    svVideo.innerHTML = entries.slice(0, 4).map((e, i) => card(e, i)).join("");
    svMarketing.innerHTML = entries.slice(4).map((e, i) => card(e, i + 4)).join("");

    // Goal picker: highlight the services that fit the chosen goal
    const goalsBox = $("#svc-goals"), result = $("#svc-goal-result"), cards = $$(".svp-card");
    let current = -1;
    goalsBox.innerHTML = SERVICE_GOALS.map((g, i) => `<button class="chip" type="button" data-goal="${i}" aria-pressed="false">${esc(g.label)}</button>`).join("");
    const pick = i => {
      current = current === i ? -1 : i;
      const goal = SERVICE_GOALS[current];
      $$(".chip", goalsBox).forEach(b => b.setAttribute("aria-pressed", +b.dataset.goal === current));
      cards.forEach(c => {
        const match = !!goal && goal.services.includes(c.dataset.slug);
        c.classList.toggle("is-match", match);
        c.classList.toggle("is-dim", !!goal && !match);
      });
      if (!goal) { result.innerHTML = ""; return; }
      const names = goal.services.map(x => SERVICE_PAGES[x] && SERVICE_PAGES[x].title).filter(Boolean);
      result.innerHTML = `Best fit: <strong>${names.map(esc).join(", ")}</strong> <button type="button" class="svp-clear">Clear</button>`;
      $(".svp-clear", result).addEventListener("click", () => pick(current));
      const first = $(".svp-card.is-match");
      if (first && first.getBoundingClientRect().top > innerHeight * .85) first.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    };
    goalsBox.addEventListener("click", e => { const b = e.target.closest("[data-goal]"); if (b) pick(+b.dataset.goal); });
  }

  /* ---------------- Animated blog-card previews ----------------
     8-second looping canvas animations drawn over the card cover.
     Turn off with CONFIG.animatedBlogCovers, or per post with preview: "". */
  const PV = (function () {
    const INK = "#17151F", INK2 = "#221F2D", LIME = "#CCF140", LILAC = "#B8A6FF", WHITE = "#FFFFFF";
    const LOOP = 8;
    const LABEL = { youtube: "YouTube", ugc: "UGC ads", motion: "Motion", ai: "AI tools", short: "Short-form", meta: "Meta ads", thumb: "Thumbnails" };
    const LABEL_COLOR = { youtube: LIME, ugc: INK, motion: INK, ai: LILAC, short: INK, meta: INK, thumb: LILAC };
    const ease = x => x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

    function rr(c, x, y, w, h, r) {
      r = Math.min(r, w / 2, h / 2);
      c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
      c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
    }
    function star(c, x, y, r, rot) {
      c.save(); c.translate(x, y); c.rotate(rot); c.beginPath();
      for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, d = i % 2 ? r * .28 : r; c.lineTo(Math.cos(a) * d, Math.sin(a) * d); }
      c.closePath(); c.fill(); c.restore();
    }

    function star5(c, x, y, r) {
      c.beginPath();
      for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, d = i % 2 ? r * .45 : r; c.lineTo(x + Math.cos(a) * d, y + Math.sin(a) * d); }
      c.closePath(); c.fill();
    }
    function heart(c, x, y, s) {
      c.beginPath(); c.moveTo(x, y + s * .9);
      c.bezierCurveTo(x - s * 1.4, y, x - s * .6, y - s * 1.1, x, y - s * .35);
      c.bezierCurveTo(x + s * .6, y - s * 1.1, x + s * 1.4, y, x, y + s * .9);
      c.fill();
    }

    const SCENES = {
      youtube(c, w, h, t) {
        c.fillStyle = INK; c.fillRect(0, 0, w, h);
        const p = t / LOOP, s = 1 + Math.sin(t * 3) * .04;
        const bw = w * .26, bh = bw * .66, bx = w * .66, by = h * .1;
        c.save(); c.translate(bx + bw / 2, by + bh / 2); c.scale(s, s);
        c.fillStyle = LIME; rr(c, -bw / 2, -bh / 2, bw, bh, 14); c.fill();
        c.fillStyle = INK; c.beginPath(); c.moveTo(-bw * .1, -bh * .2); c.lineTo(bw * .16, 0); c.lineTo(-bw * .1, bh * .2); c.fill();
        c.restore();
        const ty = h * .44;
        [LILAC, LIME, WHITE].forEach((col, i) => {
          const off = (t * 38 * (1 + i * .3)) % (w * .5);
          c.globalAlpha = .9;
          for (let k = -1; k < 4; k++) {
            const x = w * .06 + k * w * .25 - off + i * 20, cw = w * (.14 + (k + i + 3) % 3 * .03);
            c.fillStyle = col; rr(c, x, ty + i * 16, cw, 10, 5); c.fill();
          }
        });
        c.globalAlpha = 1;
        c.fillStyle = WHITE; c.fillRect(w * .06 + p * w * .88, ty - 8, 2, 52);
      },
      ugc(c, w, h, t) {
        c.fillStyle = LILAC; c.fillRect(0, 0, w, h);
        const ph = h * .8, pw = ph * .56, px = w * .93 - pw, py = h * .1;
        c.fillStyle = "#8F7BE8"; rr(c, px + 8, py + 8, pw, ph, 18); c.fill();
        c.save(); rr(c, px, py, pw, ph, 18); c.clip();
        c.fillStyle = "#F4F1FF"; c.fillRect(px, py, pw, ph);
        const cx = px + pw / 2, bob = Math.sin(t * 2.4) * 2.5, hr = pw * .2, hy = py + ph * .44 + bob;
        c.fillStyle = INK; c.beginPath(); c.arc(cx, py + ph * .9 + bob, pw * .38, Math.PI, 0); c.fill();
        c.fillStyle = "#2B2838"; c.beginPath(); c.arc(cx, hy, hr, 0, 7); c.fill();
        c.fillStyle = WHITE;
        if (t % 3 < .12) { c.fillRect(cx - hr * .5, hy - hr * .12, hr * .3, 2); c.fillRect(cx + hr * .2, hy - hr * .12, hr * .3, 2); }
        else { c.beginPath(); c.arc(cx - hr * .35, hy - hr * .1, hr * .11, 0, 7); c.fill(); c.beginPath(); c.arc(cx + hr * .35, hy - hr * .1, hr * .11, 0, 7); c.fill(); }
        const m = .2 + Math.abs(Math.sin(t * 9)) * Math.max(0, Math.sin(t * 1.3)) * .8;
        c.fillStyle = LIME; c.beginPath(); c.ellipse(cx, hy + hr * .45, hr * .3, hr * (.06 + m * .16), 0, 0, 7); c.fill();
        if ((t * 1.2) % 2 < 1.3) { c.fillStyle = "#FF5A5F"; c.beginPath(); c.arc(px + 15, py + 17, 4, 0, 7); c.fill(); }
        c.fillStyle = INK; c.font = "800 10px Unbounded, Arial, sans-serif"; c.textBaseline = "middle"; c.fillText("REC", px + 23, py + 17.5);
        const capW = pw * .7 * ease(Math.min(1, (t % 2.5) / 1.2));
        c.fillStyle = LIME; rr(c, px + pw * .15, py + ph * .84, Math.max(capW, 1), 9, 4.5); c.fill();
        c.fillStyle = WHITE; rr(c, px + pw * .25, py + ph * .9, Math.max(capW * .7, 1), 7, 3.5); c.fill();
        c.restore();
        c.strokeStyle = INK; c.lineWidth = 6; rr(c, px, py, pw, ph, 18); c.stroke();
        for (let i = 0; i < 5; i++) {
          const q = (t * .3 + i / 5) % 1;
          c.globalAlpha = Math.min(1, (1 - q) * 1.6) * Math.min(1, q * 6);
          c.fillStyle = i % 2 ? WHITE : INK;
          heart(c, px - 16 + Math.sin(q * 6 + i * 2) * 9, py + ph * .8 - q * ph * .7, 6 + (i % 3) * 2);
        }
        c.globalAlpha = 1;
        const n = Math.min(5, Math.floor((t % LOOP) / .45));
        for (let i = 0; i < 5; i++) {
          const pop = i === n - 1 ? 1 + Math.max(0, .3 - ((t % LOOP) - (i + 1) * .45)) : 1;
          c.fillStyle = i < n ? INK : "rgba(23,21,31,.18)";
          star5(c, w * .08 + i * h * .11, h * .5, h * .045 * pop);
        }
      },
      motion(c, w, h, t) {
        c.fillStyle = LILAC; c.fillRect(0, 0, w, h);
        const cx = w * .72, cy = h * .4, r = h * .2, sq = 1 + Math.sin(t * 2.2) * .12;
        c.fillStyle = "#2B2838";
        c.beginPath(); c.ellipse(cx - r * .45 + Math.cos(t) * 10, cy - r * .25 + Math.sin(t * 1.3) * 8, r * sq, r / sq, 0, 0, Math.PI * 2); c.fill();
        c.save(); c.translate(cx + r * .4, cy + r * .25); c.rotate(Math.sin(t * .8) * .35);
        c.strokeStyle = INK; c.lineWidth = 7; rr(c, -r * .8, -r * .8, r * 1.6, r * 1.6, 16); c.stroke(); c.restore();
        c.strokeStyle = INK; c.lineWidth = 6; c.lineCap = "round"; c.beginPath();
        for (let x = 0; x <= w * .42; x += 4) c.lineTo(w * .52 + x, h * .7 + Math.sin(x / 22 + t * 3) * 10);
        c.stroke();
      },
      ai(c, w, h, t) {
        c.fillStyle = INK2; c.fillRect(0, 0, w, h);
        c.fillStyle = "rgba(184,166,255,.18)";
        for (let gx = 20; gx < w; gx += 26) for (let gy = 20; gy < h; gy += 26) { c.beginPath(); c.arc(gx, gy, 1.4, 0, 7); c.fill(); }
        const sx = ((t / LOOP * 1.5) % 1) * (w + 160) - 80;
        const g = c.createLinearGradient(sx - 80, 0, sx + 80, 0);
        g.addColorStop(0, "rgba(204,241,64,0)"); g.addColorStop(.5, "rgba(204,241,64,.22)"); g.addColorStop(1, "rgba(204,241,64,0)");
        c.fillStyle = g; c.fillRect(sx - 80, 0, 160, h);
        c.fillStyle = LILAC; star(c, w * .73, h * .34, h * (.2 + Math.sin(t * 2) * .025), Math.sin(t * .7) * .3);
        c.fillStyle = "#8F7BE8"; star(c, w * .87, h * .66, h * (.08 + Math.sin(t * 2.6 + 1) * .02), t * .6);
        c.fillStyle = LIME; star(c, w * .58, h * .62, h * (.045 + Math.max(0, Math.sin(t * 3.2)) * .03), 0);
      },
      short(c, w, h, t) {
        c.fillStyle = LIME; c.fillRect(0, 0, w, h);
        const pw = h * .48, ph = h * .74, px = w * .62, py = h * .1;
        c.fillStyle = "#2D3A12"; rr(c, px + pw * .82, py + ph * .14, pw * .62, ph * .62, 14); c.fill();
        c.save(); rr(c, px, py, pw, ph, 20); c.clip();
        const cyc = (t % 2) / 2, k = ease(Math.min(1, Math.max(0, (cyc - .65) / .35)));
        const cols = [INK, LILAC, WHITE, INK], idx = Math.floor(t / 2) % 3;
        for (let i = 0; i < 2; i++) {
          c.fillStyle = cols[idx + i]; c.fillRect(px, py + (i - k) * ph, pw, ph);
          c.fillStyle = (idx + i) % 3 === 0 ? LIME : INK;
          const mx = px + pw / 2, my = py + (i - k) * ph + ph / 2;
          c.beginPath(); c.moveTo(mx - 9, my - 13); c.lineTo(mx + 14, my); c.lineTo(mx - 9, my + 13); c.fill();
        }
        c.restore();
        c.strokeStyle = INK; c.lineWidth = 7; rr(c, px, py, pw, ph, 20); c.stroke();
      },
      meta(c, w, h, t) {
        c.fillStyle = WHITE; c.fillRect(0, 0, w, h);
        const cx = w * .74, cy = h * .4;
        for (let i = 0; i < 3; i++) {
          const q = (t * .5 + i / 3) % 1;
          c.strokeStyle = `rgba(184,166,255,${(1 - q) * .8})`; c.lineWidth = 3;
          c.beginPath(); c.arc(cx, cy, h * .12 + q * h * .3, 0, 7); c.stroke();
        }
        c.strokeStyle = INK; c.lineWidth = h * .045;
        c.beginPath(); c.arc(cx, cy, h * .24, 0, 7); c.stroke();
        c.beginPath(); c.arc(cx, cy, h * .14, 0, 7); c.stroke();
        c.fillStyle = LIME; c.beginPath(); c.arc(cx, cy, h * (.06 + Math.sin(t * 4) * .008), 0, 7); c.fill();
      },
      thumb(c, w, h, t) {
        c.fillStyle = INK; c.fillRect(0, 0, w, h);
        const bx = w * .55, by = h * .14, bw = w * .38, bh = h * .38;
        c.fillStyle = LILAC; rr(c, bx, by, bw, bh, 12); c.fill();
        c.fillStyle = "#4B4566"; rr(c, bx + 14, by + 16, bw * .4, 12, 6); c.fill();
        rr(c, bx + 14, by + 38, bw * .7 * (.6 + .4 * Math.abs(Math.sin(t))), 12, 6); c.fill();
        const pts = [[.47, .86], [.6, .78], [.68, .83], [.78, .66], [.95, .6]];
        const p = ease(Math.min(1, (t % LOOP) / (LOOP * .6)));
        c.strokeStyle = LIME; c.lineWidth = 5; c.lineJoin = c.lineCap = "round"; c.beginPath();
        const total = pts.length - 1, upto = p * total;
        let last;
        for (let i = 0; i <= Math.floor(upto); i++) { last = pts[i]; c.lineTo(pts[i][0] * w, pts[i][1] * h); }
        if (upto < total) { const a = pts[Math.floor(upto)], b = pts[Math.floor(upto) + 1], f = upto % 1; last = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]; c.lineTo(last[0] * w, last[1] * h); }
        c.stroke();
        c.fillStyle = LIME; c.beginPath(); c.arc(last[0] * w, last[1] * h, 7, 0, 7); c.fill();
      },
    };

    let players = [], running = false, last = 0;
    const io = "IntersectionObserver" in window
      ? new IntersectionObserver(entries => entries.forEach(en => {
          const p = players.find(x => x.box === en.target); if (p) p.visible = en.isIntersecting;
        }))
      : null;

    function draw(p) {
      const r = p.box.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
      if (!r.width) return;
      const cw = Math.round(r.width * d), ch = Math.round(r.height * d);
      if (p.canvas.width !== cw || p.canvas.height !== ch) { p.canvas.width = cw; p.canvas.height = ch; }
      const c = p.ctx, lt = p.t % LOOP;
      c.setTransform(d, 0, 0, d, 0, 0);
      SCENES[p.theme](c, r.width, r.height, lt);
      c.fillStyle = LABEL_COLOR[p.theme];
      c.font = `800 ${Math.round(Math.min(r.height * .13, r.width * .085))}px Unbounded, "Arial Black", sans-serif`;
      c.textBaseline = "alphabetic";
      c.fillText(LABEL[p.theme], r.width * .06, r.height * .82);
      p.drawn = true;
    }
    function frame(now) {
      const dt = Math.min((now - last) / 1000, .1); last = now;
      players = players.filter(p => {
        if (!p.box.isConnected) { if (io) io.unobserve(p.box); return false; }
        return true;
      });
      players.forEach(p => {
        if (!p.visible && p.drawn) return;
        if (p.playing) p.t += dt;
        if (p.playing || !p.drawn) draw(p);
      });
      if (players.length) requestAnimationFrame(frame); else running = false;
    }

    function init(root) {
      $$(".cover[data-preview]", root).forEach(cover => {
        const theme = cover.dataset.preview;
        if (!SCENES[theme] || $(".as-player", cover)) return;
        const card = cover.closest(".post-card"), link = card && $("a[href]", card);
        const box = document.createElement("div");
        box.className = "as-player" + (reduceMotion ? " paused" : "");
        box.innerHTML =
          `<canvas aria-hidden="true"></canvas>
           <span class="as-chip" aria-hidden="true"><i></i>Preview</span>`;
        cover.appendChild(box);
        const p = {
          box, theme, canvas: $("canvas", box),
          t: theme.length * .7, playing: !reduceMotion, visible: !io, drawn: false,
        };
        p.ctx = p.canvas.getContext("2d");
        box.addEventListener("click", () => { if (link) location.href = link.href; });
        players.push(p);
        if (io) io.observe(box);
      });
      if (players.length && !running) { running = true; last = performance.now(); requestAnimationFrame(frame); }
    }

    const redrawAll = () => players.forEach(p => { p.drawn = false; });
    addEventListener("resize", redrawAll);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(redrawAll);
    return { init };
  })();
  function initPreviews(root) { if (CONFIG.animatedBlogCovers) PV.init(root); }

  /* ---------------- Blog ---------------- */
  const postCard = p => `
    <article class="post-card" data-reveal data-cat="${esc(p.category)}">
      <div class="cover"${CONFIG.animatedBlogCovers && p.preview ? ` data-preview="${p.preview}"` : ""}><img src="${p.cover}" alt="" loading="lazy" width="1200" height="675"></div>
      <div class="body">
        <div class="post-meta"><span class="tag">${esc(p.category)}</span><span>${fmtDate(p.date)}</span><span class="dot"></span><span>${readMins(p.content)} min read</span></div>
        <h3><a href="blog-post.html?post=${p.slug}">${esc(p.title)}</a></h3>
        <p>${esc(p.excerpt)}</p>
        <span class="text-link" aria-hidden="true">Read article <span class="arrow">→</span></span>
      </div>
    </article>`;

  const latest = $("#latest-posts");
  if (latest) { latest.innerHTML = postsByDate().slice(0, 3).map(postCard).join(""); initPreviews(latest); }

  const postGrid = $("#post-grid");
  if (postGrid) {
    const all = postsByDate();
    const cats = ["All", ...new Set(all.map(p => p.category))];
    const filters = $("#blog-filters"), search = $("#blog-search"), empty = $("#blog-empty");
    let cat = "All";
    filters.innerHTML = cats.map(c => `<button class="chip" type="button" data-cat="${esc(c)}" aria-pressed="${c === cat}">${esc(c)}</button>`).join("");
    const render = () => {
      const q = search.value.trim().toLowerCase();
      const list = all.filter(p => (cat === "All" || p.category === cat) &&
        (!q || (p.title + " " + p.excerpt + " " + p.category + " " + p.content.replace(/<[^>]+>/g, " ")).toLowerCase().includes(q)));
      postGrid.innerHTML = list.map(postCard).join("");
      $$("[data-reveal]", postGrid).forEach(el => el.classList.add("in"));
      initPreviews(postGrid);
      empty.hidden = list.length > 0;
      $("#blog-count").textContent = `${list.length} article${list.length === 1 ? "" : "s"}`;
    };
    filters.addEventListener("click", e => {
      const b = e.target.closest("[data-cat]"); if (!b) return;
      cat = b.dataset.cat;
      $$(".chip", filters).forEach(c => c.setAttribute("aria-pressed", c === b));
      render();
    });
    search.addEventListener("input", render);
    render();
  }

  /* Single article (blog-post.html?post=slug) */
  const article = $("#article");
  if (article) {
    const slug = new URLSearchParams(location.search).get("post");
    const p = BLOG_POSTS.find(x => x.slug === slug) || (slug ? null : postsByDate()[0]);
    if (!p) {
      article.innerHTML = `<section class="page-hero"><div class="wrap"><h1>Article not found</h1><p>This article may have moved. <a class="text-link" href="blog.html">Back to the blog <span class="arrow">→</span></a></p></div></section>`;
    } else {
      const url = location.href;
      document.title = `${p.title} | ${CONFIG.businessName} Blog`;
      const setMeta = (sel, val) => { const m = $(sel); if (m) m.setAttribute("content", val); };
      setMeta('meta[name="description"]', p.excerpt);
      setMeta('meta[property="og:title"]', p.title);
      setMeta('meta[property="og:description"]', p.excerpt);
      setMeta('meta[property="og:url"]', url);

      $("#a-category").textContent = p.category;
      $("#a-title").textContent = p.title;
      $("#a-date").textContent = fmtDate(p.date);
      $("#a-date").setAttribute("datetime", p.date);
      $("#a-author").textContent = p.author;
      $("#a-read").textContent = `${readMins(p.content)} min read`;
      $("#a-cover").src = p.cover;
      $("#a-cover").alt = "";
      const body = $("#a-body");
      body.innerHTML = p.content;

      // Table of contents from the <h2> headings
      const heads = $$("h2", body);
      heads.forEach((h, i) => { h.id = h.id || "s" + (i + 1) + "-" + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); });
      const toc = $("#toc-list");
      toc.innerHTML = heads.map(h => `<li><a href="#${h.id}">${esc(h.textContent)}</a></li>`).join("");
      if ("IntersectionObserver" in window && heads.length) {
        const links = $$("a", toc);
        const spy = new IntersectionObserver(entries => {
          entries.forEach(en => {
            if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
          });
        }, { rootMargin: "-20% 0px -70% 0px" });
        heads.forEach(h => spy.observe(h));
      }

      // Share buttons
      const u = encodeURIComponent(url), t = encodeURIComponent(p.title);
      $("#share-btns").innerHTML = `
        <a href="https://wa.me/?text=${t}%20${u}" target="_blank" rel="noopener" aria-label="Share on WhatsApp">${brand("whatsapp")}</a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${u}" target="_blank" rel="noopener" aria-label="Share on LinkedIn">${brand("linkedin")}</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${u}" target="_blank" rel="noopener" aria-label="Share on Facebook">${brand("facebook")}</a>
        <a href="https://x.com/intent/post?text=${t}&url=${u}" target="_blank" rel="noopener" aria-label="Share on X">${brand("x")}</a>
        <button type="button" id="copy-link" aria-label="Copy link">${UI.link}</button>
        <span class="sr-only" role="status" id="copy-status"></span>`;
      $("#copy-link").addEventListener("click", async () => {
        try { await navigator.clipboard.writeText(url); } catch (e) { prompt("Copy this link:", url); return; }
        $("#copy-status").textContent = "Link copied";
        $("#copy-link").innerHTML = UI.check;
        setTimeout(() => { $("#copy-link").innerHTML = UI.link; }, 1800);
      });

      // Related posts: same category first, then newest
      const related = postsByDate().filter(x => x.slug !== p.slug)
        .sort((a, b) => (b.category === p.category) - (a.category === p.category)).slice(0, 3);
      $("#related-posts").innerHTML = related.map(postCard).join("");
      initPreviews($("#related-posts"));
    }
  }

  /* ---------------- "Inside the edit" floating 3D cards (home) ----------------
     Four cards float around the video. One at a time each card lifts,
     flies into the video and lands with a flash, adding its layer
     (1 colour, 2 audio, 3 subtitles, 4 branding). Then the video is
     ready to post, the cards fly back out and it loops. This only toggles
     classes on .fc; style.css does the drawing. Hovering, tapping or
     focusing a checklist line (or a card) jumps to that step. */
  const fc = $("#editor.fc");
  if (fc) (function () {
    const box = fc.closest(".ba-wrap");
    const cards = $$(".fc-card", fc), st = $(".fc-st", fc);
    const items = $$("[data-ed-step]", box);
    // EDIT the status text here if you like
    const LABELS = ["Raw footage", "Colour grading", "Mixing audio", "Adding subtitles", "Adding branding"];
    const READY = "Ready to post ✓", NEXT = "Next video…";
    // Timings in ms
    const T = { start: 1500, lift: 800, fly: 760, hold: 1350, ready: 3400, back: 1500 };

    let timers = [], held = false, visible = false, label = LABELS[0];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    const clear = () => { timers.forEach(clearTimeout); timers = []; };
    const setLabel = s => {
      if (s === label) return;
      label = s; st.textContent = s;
      st.classList.remove("swap"); void st.offsetWidth; st.classList.add("swap");
    };
    const focus = n => {
      box.classList.toggle("lx-focus", n > 0);
      items.forEach(li => li.classList.toggle("lx-on", +li.dataset.edStep === n));
    };
    // docked = cards inside the video, fx = layers applied, lift = card glowing before take-off
    const show = (docked, fx, lift = 0, done = false) => {
      cards.forEach(c => { const k = +c.dataset.k; c.classList.toggle("dock", k <= docked); c.classList.toggle("lift", k === lift); });
      for (let i = 1; i <= 4; i++) fc.classList.toggle("e" + i, i <= fx);
      fc.classList.toggle("done", done);
    };
    const hit = () => { fc.classList.remove("hit"); void fc.offsetWidth; fc.classList.add("hit"); };

    function play(from) {
      clear();
      let t = 0;
      if (from === 0) { show(0, 0); setLabel(LABELS[0]); focus(0); t = T.start; }
      for (let i = from + 1; i <= 4; i++) {
        later(() => { show(i - 1, i - 1, i); setLabel(LABELS[i]); focus(i); }, t); t += T.lift;
        later(() => show(i, i - 1), t); t += T.fly;
        later(() => { show(i, i); hit(); }, t); t += T.hold;
      }
      later(() => { show(4, 4, 0, true); setLabel(READY); focus(0); }, t); t += T.ready;
      later(() => { show(0, 0); setLabel(NEXT); }, t); t += T.back;
      later(() => play(0), t);
    }

    // Checklist lines and cards: hover / tap / keyboard focus jumps to that step
    const hold = n => { held = true; clear(); show(n, n); setLabel(LABELS[n]); focus(n); };
    const release = () => {
      if (!held) return;
      held = false;
      if (reduceMotion) { show(4, 4, 0, true); setLabel(READY); focus(0); return; }
      const n = cards.filter(c => c.classList.contains("dock")).length;
      if (visible) play(n);
    };
    [...items, ...cards].forEach(el => {
      const n = +(el.dataset.edStep || el.dataset.k);
      el.addEventListener("pointerenter", () => hold(n));
      el.addEventListener("pointerleave", release);
      el.addEventListener("focus", () => hold(n));
      el.addEventListener("blur", release);
    });

    // Gentle 3D tilt that follows the cursor (mouse only)
    if (finePointer && !reduceMotion) {
      fc.addEventListener("pointermove", e => {
        const r = fc.getBoundingClientRect();
        fc.style.setProperty("--rx", (((e.clientX - r.left) / r.width - .5) * 10).toFixed(2) + "deg");
        fc.style.setProperty("--ry", ((.5 - (e.clientY - r.top) / r.height) * 8).toFixed(2) + "deg");
      });
      fc.addEventListener("pointerleave", () => { fc.style.setProperty("--rx", "0deg"); fc.style.setProperty("--ry", "0deg"); });
    }

    // Reduced motion: show the finished video; the checklist still jumps between steps
    if (reduceMotion) { show(4, 4, 0, true); setLabel(READY); return; }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([en]) => {
        visible = en.isIntersecting;
        if (held) return;
        if (visible) play(0); else clear();
      }, { threshold: .25 }).observe(fc);
    } else { visible = true; play(0); }
  })();

  /* ---------------- Contact forms ---------------- */
  $$("select[data-services]").forEach(sel => {
    sel.innerHTML = `<option value="">Choose a service</option>` +
      SERVICES.map(x => `<option value="${x.slug}">${esc(x.name)}</option>`).join("") +
      `<option value="not-sure">Not sure yet</option>`;
  });
  $$("select[data-budgets]").forEach(sel => {
    sel.innerHTML = `<option value="">Choose a budget</option>` + CONFIG.budgets.map(b => `<option>${esc(b)}</option>`).join("");
  });

  // Pre-select a service: contact.html?service=ugc-ads
  const preset = new URLSearchParams(location.search).get("service");
  const mainForm = $("#contact-form");
  const pickService = slug => {
    const sel = mainForm && $("select[name=service]", mainForm);
    if (sel && [...sel.options].some(o => o.value === slug)) sel.value = slug;
  };
  if (preset) pickService(preset);

  // "Ask about this" buttons: on a page that has the form, scroll to it
  document.addEventListener("click", e => {
    const a = e.target.closest("a[data-service]");
    if (!a || !mainForm) return;
    e.preventDefault();
    pickService(a.dataset.service);
    mainForm.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setTimeout(() => $("input[name=name]", mainForm).focus({ preventScroll: true }), reduceMotion ? 0 : 600);
  });

  $$(".lead-form").forEach(form => {
    const original = form.innerHTML;
    const fieldOf = el => el.closest(".field");
    const validate = () => {
      let ok = true;
      $$("[required]", form).forEach(el => {
        let valid = el.value.trim() !== "";
        if (valid && el.type === "email") valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
        fieldOf(el).classList.toggle("invalid", !valid);
        el.setAttribute("aria-invalid", !valid);
        if (!valid && ok) { el.focus(); ok = false; }
      });
      return ok;
    };
    form.addEventListener("input", e => { const f = fieldOf(e.target); if (f && f.classList.contains("invalid")) { f.classList.remove("invalid"); e.target.removeAttribute("aria-invalid"); } });

    const success = (name, viaEmail) => {
      form.innerHTML = `
        <div class="form-success" role="status" tabindex="-1">
          <div class="big-check">${UI.check}</div>
          <h3>${viaEmail ? "Almost done" : "Thank you"}, ${esc(name.split(" ")[0])}!</h3>
          <p>${viaEmail
            ? "Your email app has opened with your project details. Press <strong>Send</strong> and we'll get back to you within one working day."
            : "Your message has been sent. We'll get back to you within one working day with next steps."}</p>
          <div class="quick-contact" style="justify-content:center">
            <a class="btn btn-ghost btn-sm" href="${waLink()}" target="_blank" rel="noopener">Chat on WhatsApp</a>
            <button class="btn btn-dark btn-sm" type="button" data-reset>Send another message</button>
          </div>
        </div>`;
      $(".form-success", form).focus();
      $("[data-reset]", form).addEventListener("click", () => { form.innerHTML = original; rebindSelects(form); });
    };

    form.addEventListener("submit", async e => {
      e.preventDefault();
      if (!validate()) return;
      const d = new FormData(form);
      if (d.get("_gotcha")) return; // spam bot filled the hidden field
      const serviceName = (SERVICES.find(s => s.slug === d.get("service")) || { name: "Not sure yet" }).name;
      d.set("service", serviceName);
      const btn = $("button[type=submit]", form), errBox = $(".form-error", form);
      errBox.textContent = "";

      if (CONFIG.formEndpoint) {
        btn.disabled = true; btn.textContent = "Sending…";
        try {
          const res = await fetch(CONFIG.formEndpoint, { method: "POST", body: d, headers: { Accept: "application/json" } });
          if (!res.ok) throw new Error(res.status);
          success(d.get("name"), false);
        } catch (err) {
          btn.disabled = false; btn.textContent = "Send my request";
          errBox.innerHTML = `Sorry, something went wrong. Please try again or <a href="${waLink()}" target="_blank" rel="noopener" style="text-decoration:underline">message us on WhatsApp</a>.`;
        }
      } else {
        const body = ["name", "email", "phone", "service", "budget", "details"]
          .map(k => `${k[0].toUpperCase() + k.slice(1)}: ${d.get(k) || "-"}`).join("\n");
        location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("New project enquiry – " + serviceName)}&body=${encodeURIComponent(body)}`;
        success(d.get("name"), true);
      }
    });
  });
  function rebindSelects(form) {
    $$("select[data-services]", form).forEach(sel => {
      sel.innerHTML = `<option value="">Choose a service</option>` + SERVICES.map(x => `<option value="${x.slug}">${esc(x.name)}</option>`).join("") + `<option value="not-sure">Not sure yet</option>`;
    });
    $$("select[data-budgets]", form).forEach(sel => {
      sel.innerHTML = `<option value="">Choose a budget</option>` + CONFIG.budgets.map(b => `<option>${esc(b)}</option>`).join("");
    });
  }

  /* ---------------- About hero: reel stack ----------------
     Builds each .ab-reel from its data-tag / data-cap, fans the cards out,
     then every few seconds swipes the top card away to the back of the pile
     and types the next card's caption. Tilts toward the mouse. */
  (function () {
    const stack = $("#ab-stack");
    if (!stack) return;
    const box = stack.parentElement;
    const cards = $$(".ab-reel", stack);
    // stack positions, front first: [x, y, rotate, scale, opacity]
    const POS = [[0, 0, -3, 1, 1], [-27, 3, -11, .92, 1], [27, 5, 9, .9, 1], [0, 7, 2, .84, 1], [0, 7, 2, .84, 0]];
    const FLY = [130, -28, 24, .9, 0];
    const place = (c, p, z) => {
      [["--x", p[0] + "%"], ["--y", p[1] + "%"], ["--r", p[2] + "deg"], ["--s", p[3]], ["--o", p[4]]].forEach(([k, v]) => c.style.setProperty(k, v));
      c.style.zIndex = z;
    };
    cards.forEach(c => {
      c.innerHTML = `
        <div class="ab-bars"><i></i><i></i><i></i></div>
        <div class="ab-top"><span class="ab-tag">${esc(c.dataset.tag)}</span><span class="ab-live">● 0:${String(15 + Math.floor(Math.random() * 40))}</span></div>
        <div class="ab-art"><span class="ab-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg></span></div>
        <p class="ab-cap"><span></span></p>
        <div class="ab-foot"><b>a</b><span>@adsource</span><em>♥</em></div>`;
    });

    let order = cards.slice(), typer = 0;
    const layout = () => order.forEach((c, i) => place(c, POS[Math.min(i, POS.length - 1)], order.length - i));
    const front = () => {
      const c = order[0], cap = $(".ab-cap span", c), text = c.dataset.cap;
      cards.forEach(x => x.classList.remove("is-front", "typed"));
      void c.offsetWidth; // restart the CSS animations on the new top card
      c.classList.add("is-front");
      clearInterval(typer);
      if (reduceMotion) { cap.textContent = text; c.classList.add("typed"); return; }
      let n = 0;
      cap.textContent = "";
      typer = setInterval(() => {
        cap.textContent = text.slice(0, ++n);
        if (n >= text.length) { clearInterval(typer); c.classList.add("typed"); }
      }, 45);
    };
    // fill every caption up-front so the cards behind aren't blank
    cards.forEach(c => { $(".ab-cap span", c).textContent = c.dataset.cap; });
    layout();
    front();
    if (reduceMotion) return;

    let visible = true;
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(box);
    setInterval(() => {
      if (!visible || document.hidden) return;
      const top = order.shift();
      top.classList.add("is-flying");
      place(top, FLY, order.length + 2);
      order.push(top);
      layout();
      place(top, FLY, order.length + 2); // keep it flying out on top for now
      front();
      setTimeout(() => { top.classList.remove("is-flying"); place(top, POS[POS.length - 1], 0); }, 520);
    }, 3600);

    box.addEventListener("pointermove", e => {
      const r = box.getBoundingClientRect();
      box.style.setProperty("--tx", ((e.clientX - r.left) / r.width - .5).toFixed(3));
      box.style.setProperty("--ty", ((e.clientY - r.top) / r.height - .5).toFixed(3));
    });
    box.addEventListener("pointerleave", () => { box.style.setProperty("--tx", 0); box.style.setProperty("--ty", 0); });
  })();

  /* ---------------- Service card → page transition ----------------
     Clicking a service card darkens it, then a dark panel grows from the
     card to fill the screen before the service page opens. The next page
     lifts the dark cover away (see .as-arriving in style.css). */
  (function () {
    let busy = false;
    const cardOf = el => el.closest(".svc-card, .svc-mini, .svp-card");
    document.addEventListener("click", e => {
      const link = e.target.closest("a[href]");
      const card = link && cardOf(link);
      if (!card || reduceMotion || busy) return;
      if (link !== card && !link.classList.contains("card-link")) return; // e.g. "Get a quote" opens normally
      // let Ctrl/Cmd/Shift/middle-click open a new tab as normal
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || link.target === "_blank") return;
      e.preventDefault();
      busy = true;
      const href = link.href;
      try { sessionStorage.setItem("asZoom", "1"); } catch (x) {}
      const title = ($("h3, strong", card) || {}).textContent || "";
      const wasDark = getComputedStyle(card).backgroundColor.replace(/\s/g, "") === "rgb(23,21,31)";
      if (!wasDark) card.classList.add("as-dark");

      setTimeout(() => {
        const r = card.getBoundingClientRect();
        const z = document.createElement("div");
        z.className = "as-zoom";
        Object.assign(z.style, { top: r.top + "px", left: r.left + "px", width: r.width + "px", height: r.height + "px", borderRadius: getComputedStyle(card).borderTopLeftRadius });
        z.innerHTML = `<div class="as-zoom-title">${esc(title.trim())}<i></i></div>`;
        document.body.appendChild(z);
        z.getBoundingClientRect(); // start the transition from the card's size
        Object.assign(z.style, { top: "0px", left: "0px", width: "100vw", height: "100vh", borderRadius: "0px" });
        z.classList.add("open");
        setTimeout(() => { location.href = href; }, 900);
      }, wasDark ? 60 : 320);
    }, true);

    // Coming back with the browser's Back button: clean up
    addEventListener("pageshow", e => {
      if (!e.persisted) return;
      busy = false;
      $$(".as-zoom").forEach(z => z.remove());
      $$(".as-dark").forEach(c => c.classList.remove("as-dark"));
      document.documentElement.classList.remove("as-arriving");
    });
  })();

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = $$("[data-reveal]:not(.in)");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    revealEls.forEach((el, i) => { el.style.transitionDelay = (i % 3) * 80 + "ms"; io.observe(el); });
  } else revealEls.forEach(el => el.classList.add("in"));

  /* ---------------- 3D hero (home page only) ---------------- */
  const canvas = $("#scene");
  if (canvas) initScene(canvas);

  function initScene(canvas) {
    const box = canvas.parentElement, tip = $("#tip"), hint = $("#hint");
    let renderer;
    try { renderer = window.THREE && new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true }); } catch (e) { renderer = null; }
    if (!renderer) { hint.hidden = true; box.classList.add("no-3d"); return; }
    if (!finePointer) hint.textContent = "Tap a shape";
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
    camera.position.set(0, 0, 8.2);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x6f7d22, .8));
    const key = new THREE.DirectionalLight(0xffffff, 1.1); key.position.set(4, 6, 6); scene.add(key);
    const rim = new THREE.DirectionalLight(0xb8a6ff, .8); rim.position.set(-5, -2, 3); scene.add(rim);

    const mat = (c, r = .35, m = .1) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
    const INK = mat(0x17151f, .3, .2), WHITE = mat(0xffffff, .25), LILAC = mat(0xb8a6ff, .3), LIME = mat(0xccf140, .3), RED = mat(0xff4b3e, .3);
    const ext = { depth: .22, bevelEnabled: true, bevelThickness: .07, bevelSize: .06, bevelSegments: 5, curveSegments: 20 };
    const roundRect = (w, h, r) => {
      const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
      s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
      s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
      s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s;
    };
    const slab = (w, h, r, m, depth = .22) => { const g = new THREE.ExtrudeGeometry(roundRect(w, h, r), { ...ext, depth }); g.center(); return new THREE.Mesh(g, m); };
    const triangle = (size, m, depth = .1) => {
      const s = new THREE.Shape(); s.moveTo(-size * .42, -size * .5); s.lineTo(size * .58, 0); s.lineTo(-size * .42, size * .5); s.closePath();
      const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelSize: .03, bevelThickness: .03, bevelSegments: 3 }); g.center();
      return new THREE.Mesh(g, m);
    };
    const box3 = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);

    const objects = [];
    const add = (group, o) => {
      group.position.set(...o.pos);
      group.userData = { ...o, base: new THREE.Vector3(...o.pos), spin: 0, hover: 0 };
      scene.add(group); objects.push(group);
    };

    /* Phone — Short-form video */
    const phone = new THREE.Group();
    phone.add(slab(1.2, 2.2, .26, INK));
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.86), LIME); screen.position.z = .2; phone.add(screen);
    const pPlay = triangle(.5, INK, .06); pPlay.position.set(.03, .05, .26); phone.add(pPlay);
    [[-.25, -.62, .5], [-.33, -.74, .34]].forEach(([x, y, w]) => { const bar = box3(w, .06, .04, INK); bar.position.set(x + w / 2 - .1, y, .23); phone.add(bar); });
    add(phone, { pos: [.1, .2, .3], rot: [.12, -.32, .06], label: "Shorts & Reels", link: "short-form-video" });

    /* Play button — YouTube editing */
    const play = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(.82, .82, .3, 56), RED); disc.rotation.x = Math.PI / 2; play.add(disc);
    const tri = triangle(.62, WHITE, .1); tri.position.set(.06, 0, .2); play.add(tri);
    add(play, { pos: [-2.0, 1.45, -.4], rot: [-.2, .45, 0], label: "YouTube video editing", link: "youtube-editing" });

    /* Clapperboard — UGC ads */
    const clap = new THREE.Group();
    clap.add(slab(1.55, 1.05, .1, INK, .16));
    [.12, -.18].forEach(y => { const l = box3(1.15, .05, .04, WHITE); l.position.set(0, y, .14); clap.add(l); });
    const stripes = (parent) => { for (let i = 0; i < 6; i++) { const s = box3(.258, .24, .14, i % 2 ? INK : WHITE); s.position.x = -0.645 + i * .258; parent.add(s); } };
    const baseBar = new THREE.Group(); stripes(baseBar); baseBar.position.set(0, .66, 0); clap.add(baseBar);
    const hinge = new THREE.Group(); hinge.position.set(-.775, .8, 0);
    const topBar = new THREE.Group(); stripes(topBar); topBar.position.set(.775, .13, 0); hinge.add(topBar); clap.add(hinge);
    add(clap, { pos: [1.95, 1.4, -.6], rot: [.18, -.42, -.08], label: "UGC ads", link: "ugc-ads" });

    /* Video camera — Video ads */
    const cam = new THREE.Group();
    cam.add(slab(1.35, .85, .16, WHITE, .62));
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(.26, .38, .5, 40), INK); lens.rotation.z = Math.PI / 2; lens.position.x = .92; cam.add(lens);
    const glass = new THREE.Mesh(new THREE.CircleGeometry(.3, 40), LILAC); glass.rotation.y = Math.PI / 2; glass.position.x = 1.18; cam.add(glass);
    [[-.32, .72], [.36, .72]].forEach(([x, y]) => {
      const reel = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, .16, 40), INK); reel.rotation.x = Math.PI / 2; reel.position.set(x, y, 0); cam.add(reel);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .2, 24), LIME); hub.rotation.x = Math.PI / 2; hub.position.set(x, y, 0); cam.add(hub);
    });
    const rec = new THREE.Mesh(new THREE.SphereGeometry(.07, 20, 20), RED); rec.position.set(-.45, .2, .42); cam.add(rec);
    add(cam, { pos: [1.75, -1.45, 0], rot: [.15, -.55, .05], label: "Video ads", link: "social-media-ads" });

    /* Editing timeline — AI video editing */
    const tl = new THREE.Group();
    tl.add(slab(2.7, .92, .16, WHITE, .14));
    [[-1.1, .5, LIME], [-.48, .6, LILAC], [.2, .62, INK], [.82, .5, LIME]].forEach(([x, w, m]) => {
      const clip = slab(w - .06, .26, .06, m, .06); clip.position.set(x + w / 2 - .02, .16, .14); tl.add(clip);
    });
    for (let i = 0; i < 26; i++) { const h = .05 + Math.abs(Math.sin(i * 1.7)) * .2; const b = box3(.05, h, .04, INK); b.position.set(-1.2 + i * .094, -.2, .13); tl.add(b); }
    const head = new THREE.Group();
    head.add(box3(.04, 1.05, .05, RED));
    const knob = new THREE.Mesh(new THREE.SphereGeometry(.09, 20, 20), RED); knob.position.y = .55; head.add(knob);
    head.position.set(-.3, .02, .2); tl.add(head);
    add(tl, { pos: [-1.55, -1.75, .2], rot: [-.15, .35, .04], label: "AI video editing", link: "ai-video-editing" });

    /* Floating decoration */
    const deco = [];
    [[-2.7, -.2, -1, .2, INK], [2.8, .1, -1.5, .17, WHITE], [-.4, -2.25, .4, .13, LILAC], [.7, 2.2, -1.2, .14, INK], [-.9, 2.3, -2, .11, WHITE]]
      .forEach(([x, y, z, r, m]) => { const s = new THREE.Mesh(new THREE.SphereGeometry(r, 28, 28), m); s.position.set(x, y, z); s.userData.base = s.position.clone(); scene.add(s); deco.push(s); });

    const resize = () => {
      const w = box.clientWidth, h = box.clientHeight;
      renderer.setSize(w, h, false); camera.aspect = w / h;
      camera.position.z = w / h < .9 ? 11.5 : w / h < 1.15 ? 9.4 : 8.4;
      camera.updateProjectionMatrix();
    };
    new ResizeObserver(resize).observe(box); resize();

    const mouse = new THREE.Vector2(), look = { x: 0, y: 0 }, ray = new THREE.Raycaster();
    let hovered = null, visible = true;
    const pick = e => {
      const r = canvas.getBoundingClientRect();
      mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(mouse, camera);
      let o = (ray.intersectObjects(objects, true)[0] || {}).object;
      while (o && !objects.includes(o)) o = o.parent;
      return { obj: o || null, r };
    };
    addEventListener("pointermove", e => { look.x = (e.clientX / innerWidth) * 2 - 1; look.y = (e.clientY / innerHeight) * 2 - 1; }, { passive: true });
    canvas.addEventListener("pointermove", e => {
      const { obj, r } = pick(e); hovered = obj;
      canvas.style.cursor = obj ? "pointer" : "";
      if (obj) { tip.textContent = obj.userData.label; tip.style.left = (e.clientX - r.left) + "px"; tip.style.top = (e.clientY - r.top) + "px"; tip.style.opacity = 1; }
      else tip.style.opacity = 0;
    });
    canvas.addEventListener("pointerleave", () => { hovered = null; tip.style.opacity = 0; });
    canvas.addEventListener("click", e => {
      const { obj } = pick(e); if (!obj) return;
      obj.userData.spin = Math.PI * 2; hint.style.opacity = 0;
      setTimeout(() => { location.href = "service.html?s=" + obj.userData.link; }, reduceMotion ? 0 : 650);
    });
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(box);

    objects.forEach((o, i) => { o.scale.setScalar(.001); o.userData.delay = .3 + i * .13; });
    const clock = new THREE.Clock(), f = reduceMotion ? 0 : 1;
    let cx = 0, cy = 0;
    (function frame() {
      requestAnimationFrame(frame);
      if (!visible) return;
      const t = clock.getElapsedTime();
      cx += (look.x - cx) * .05; cy += (look.y - cy) * .05;
      objects.forEach((o, i) => {
        const u = o.userData;
        const k = reduceMotion ? 1 : Math.min(Math.max((t - u.delay) / .7, 0), 1);
        const pop = k === 1 ? 1 : 1 - Math.pow(1 - k, 3) * Math.cos(k * 6);
        u.hover += ((hovered === o ? 1 : 0) - u.hover) * .12;
        o.scale.setScalar(Math.max(pop, .001) * (1 + u.hover * .1));
        o.position.x = u.base.x + cx * .22 * (1 + i * .12) * f;
        o.position.y = u.base.y + (Math.sin(t * .9 + i * 1.7) * .12 - cy * .18) * f;
        if (u.spin > .01) { const s = u.spin * .09; u.spin -= s; o.rotation.y += s; }
        o.rotation.x = u.rot[0] + (Math.sin(t * .6 + i) * .1 + cy * .22) * f;
        o.rotation.z = u.rot[2] + Math.cos(t * .5 + i) * .05 * f;
        o.rotation.y += ((u.rot[1] + (cx * .45 + Math.sin(t * .4 + i) * .18) * f) - o.rotation.y) * .06;
      });
      hinge.rotation.z = f ? .06 + .32 * Math.pow(Math.abs(Math.sin(t * 1.1)), 3) : .2;
      head.position.x = f ? -1.2 + ((t * .35) % 1) * 2.4 : -.3;
      deco.forEach((d, i) => {
        d.position.y = d.userData.base.y + Math.sin(t * 1.1 + i * 2) * .16 * f;
        d.position.x = d.userData.base.x + cx * .35 * f;
      });
      renderer.render(scene, camera);
    })();
  }
})();

/* ---------------------------------------------------------------------
   CREATIVE REACTOR — homepage section (cycles through 4 editing stages)
   --------------------------------------------------------------------- */
(() => {
  const root = document.querySelector(".ads-reactor");
  if (!root) return;

  const stage = root.querySelector(".ads-stage");
  const buttons = [...root.querySelectorAll("[data-stage]")];
  const pause = root.querySelector(".ads-pause");
  const status = root.querySelector(".ads-status");
  const counter = root.querySelector(".ads-counter");
  const progress = root.querySelector(".ads-progress span");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const labels = ["Finding the story", "Building the feeling", "Making every word move", "Ready for the spotlight"];

  let current = 0;
  let paused = reducedMotion.matches;
  let visible = true;
  let timer;

  function show(index) {
    current = index;
    stage.dataset.scene = String(index);
    status.textContent = labels[index];
    counter.textContent = `0${index + 1} / 04`;
    progress.style.width = `${(index + 1) * 25}%`;
    buttons.forEach((button, i) => {
      button.classList.toggle("is-active", i === index);
      button.setAttribute("aria-pressed", String(i === index));
    });
  }

  function schedule() {
    clearTimeout(timer);
    if (paused || !visible || document.hidden) return;
    timer = setTimeout(() => { show((current + 1) % 4); schedule(); }, 3400);
  }

  function updatePlayback() {
    root.classList.toggle("is-paused", paused);
    pause.textContent = paused ? "▶" : "Ⅱ";
    pause.setAttribute("aria-label", paused ? "Play animation" : "Pause animation");
    schedule();
  }

  buttons.forEach((button, index) => button.addEventListener("click", () => { show(index); schedule(); }));
  pause.addEventListener("click", () => { paused = !paused; updatePlayback(); });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      root.classList.toggle("is-offscreen", !visible);
      schedule();
    }, { threshold: .15 }).observe(root);
  }
  document.addEventListener("visibilitychange", schedule);

  reducedMotion.addEventListener("change", (event) => {
    paused = event.matches;
    if (paused) show(3);
    updatePlayback();
  });

  show(reducedMotion.matches ? 3 : 0);
  updatePlayback();
})();
