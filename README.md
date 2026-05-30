# bemigot.org

Personal landing page and blog for the **Bemigot** research project, served via
GitHub Pages at <https://www.bemigot.org>. Built with [Eleventy](https://www.11ty.dev/)
(Node) and deployed by GitHub Actions.

## Local development

```sh
npm install
npm run serve      # http://localhost:8080, hot reload
npm run build      # one-off build into _site/
```

## Writing a blog post

1. Create `src/posts/YYYY-MM-DD-Slug.md`, e.g.
   `src/posts/2026-06-15-Spaced-Repetition.md` (the slug keeps the filename's
   case, so capitalize it however you like).
2. Add front matter:

   ```yaml
   ---
   title: "Spaced Repetition"
   description: "One-line summary used for the page meta description."
   ---
   ```
3. Write the body in Markdown below it. (`layout` and the dated permalink are
   inherited from `src/posts/posts.json` — no need to repeat them.)
4. Commit and push. The post appears at `/blog/2026-06-15-Spaced-Repetition/`,
   the full list updates at `/blog/`, and the three most recent show on the home
   page.

## Layout

- `src/index.njk` — landing page (intro + latest 3 posts)
- `src/blog/index.njk` — full post list at `/blog/`
- `src/posts/` — blog posts (Markdown), `posts.json` sets their layout + permalink
- `src/feed.njk` — Atom feed at `/feed.xml`
- `src/_includes/` — `base.njk` (shell) and `post.njk` (post wrapper)
- `src/_data/site.json` — site title, description, URL
- `src/assets/css/style.css` — the entire theme (warm B&W + auto dark mode)
- `.eleventy.js` — config, date filters, and the `posts` collection

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys it on every push to
`master`. **One-time setup:** in repo *Settings → Pages → Build and deployment*,
set **Source** to **GitHub Actions** (not "Deploy from a branch").

## Future sections

`Writings` and possibly `Wiki` are planned. Add each as a new Eleventy
collection (a `src/<section>/` folder + a directory-data file + a list page),
mirroring how `posts` works.

## If this outgrows Eleventy

Eleventy was chosen for being minimal and zero-JS — ideal while the site is
mostly static prose. If a section later needs genuine interactivity (e.g. a
client-side search box, or an interactive wiki widget),
[Astro](https://astro.build/) is the natural next step: it's also zero-JS by
default but lets you drop in interactive components only where needed
("islands"), so the rest of the site stays just as light. Migration should be
straightforward: the CSS and Markdown content carry over largely unchanged,
though the layouts and build config would be rebuilt in Astro's own format.
