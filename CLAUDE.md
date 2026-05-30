# CLAUDE.md

Guidance for working in this repository.

## What this is

Personal landing page and blog for the **Bemigot** research project (LLM
applications for self-learning: programming, foreign languages, history).
Served via **GitHub Pages** at the custom domain **www.bemigot.org** (see
`src/CNAME`). The repo is the user/org pages repo (`bemigot.github.io`).

## Stack

- **Eleventy (11ty)** static site generator — Node, CommonJS config.
- **Nunjucks** templates (`.njk`); posts authored in **Markdown**.
- **Zero client-side JavaScript** by design. The site is static HTML + one CSS file.
- Built in CI by **GitHub Actions** and deployed to Pages (see
  `.github/workflows/deploy.yml`). No build output is committed. CI runs on
  **Node 24**; the `actions/checkout`, `setup-node`, `upload-pages-artifact`,
  and `deploy-pages` actions are pinned to floating major tags (kept current).

> Pages source must be set to **GitHub Actions** in repo Settings → Pages
> (not "Deploy from a branch"). The workflow builds `_site/` and deploys it.

## Commands

```sh
npm install        # once
npm run serve      # local preview at http://localhost:8080 (hot reload)
npm run build      # one-off build into _site/
```

## Layout

```
.eleventy.js               # config: dirs, filters, posts collection, passthrough
package.json
.github/workflows/deploy.yml
src/
  index.njk                # landing page: intro + latest 3 posts
  blog/index.njk           # full post list, permalink /blog/
  feed.njk                 # Atom feed at /feed.xml
  posts/
    posts.json             # directory data: layout + dated permalink for all posts
    YYYY-MM-DD-slug.md     # one Markdown file per post
  _includes/
    base.njk               # site shell (head, header/nav, footer)
    post.njk               # single-post wrapper (extends base)
  _data/
    site.json              # title, description, url, lang
  assets/css/style.css     # the entire theme (warm B&W + auto dark mode)
  img/                     # mascot + favicons
  CNAME                    # custom domain (passthrough-copied to _site/)
_site/                     # build output (gitignored, never committed)
```

## Conventions

- **Adding a post:** create `src/posts/YYYY-MM-DD-slug.md` with front matter:
  ```yaml
  ---
  title: "Post Title"
  description: "One-line summary for the page meta description."
  ---
  ```
  `layout` and `permalink` are inherited from `src/posts/posts.json` — don't
  repeat them per post. URL is `/blog/YYYY-MM-DD-slug/`.
- **Slugs are derived from the filename** (the date prefix is stripped) and
  **preserve the filename's case** — e.g. `2026-05-30-Local-first.md` →
  `/blog/2026-05-30-Local-first/`. Capitalize slugs as you like; just be
  consistent.
- The date comes from the **filename prefix**, parsed as UTC. Date filters
  (`isoDate`, `readableDate` in `.eleventy.js`) read it with UTC getters — keep
  it that way to avoid off-by-one-day timezone drift.
- The `posts` collection (defined in `.eleventy.js`) is sorted **newest-first**.
  Use it everywhere posts are listed; don't re-sort in templates.

## Design

Deliberately **low-key and text-first**. Warm near-black ink on warm paper, with
an automatic dark variant via `prefers-color-scheme`. All colors are CSS custom
properties at the top of `style.css` — change the theme there, in one place.
Resist adding client JS or heavy components; the whole point is quiet and fast.

## Future (not yet built)

`Writings` and possibly `Wiki` sections are planned. Implement each as a new
Eleventy collection (its own `src/<section>/` folder + a directory-data file and
a list page), mirroring how `posts` works. No architectural change needed.
