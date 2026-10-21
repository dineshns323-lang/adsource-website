# AdSource website

Multi-page website for **AdSource** — video editing, motion graphics, AI video editing and digital marketing.

Plain HTML, CSS and JavaScript. No build step: open `index.html` in a browser, or upload the folder to any static host.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home (3D hero, services, "Inside the edit" animation, blog, FAQ, contact form) |
| `services.html` | Services overview with goal picker |
| `service.html?s=SLUG` | Single service page (template) |
| `blog.html` | Blog list with search and filters |
| `blog-post.html?post=SLUG` | Blog article (template) |
| `about.html` | About |
| `contact.html` | Contact |
| `privacy.html`, `terms.html` | Legal templates — have them checked before publishing |

## Where to edit

Everything shared lives in two files:

- **`script.js`** — at the top:
  - `CONFIG` — phone, email, WhatsApp, address, hours, social links, contact-form endpoint (e.g. Formspree), budget options
  - `SERVICES`, `SERVICE_PAGES`, `SERVICE_GOALS` — service names, service page content, goal picker
  - `BLOG_POSTS` — blog articles
- **`style.css`** — colours and fonts in the `:root` block at the top

Images are in `images/` (logo files, favicon, blog covers, social sharing image).

## Before going live

- Replace every `[YOUR ...]` placeholder in `CONFIG` (script.js) and the legal pages
- Set `CONFIG.formEndpoint` so contact-form enquiries reach your inbox
- Change the `og:image` paths to full URLs once the site has a domain
