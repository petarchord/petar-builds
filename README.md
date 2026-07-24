# petar-builds

Personal portfolio website with blog, built with [Astro](https://astro.build).

## Project Structure

```
src/
├── components/        # Reusable Astro components (Header, Footer, etc.)
├── content/
│   └── blog/          # Markdown & MDX blog posts
├── layouts/
│   └── BlogPost.astro
├── pages/
│   ├── index.astro    # Home / portfolio page
│   ├── about.astro
│   └── blog/          # Blog listing & individual post routes
├── assets/            # Images & fonts
├── styles/
│   └── global.css
└── consts.ts          # Site-wide constants (title, description, socials)
```

## Commands

| Command           | Action                                    |
|:------------------|:------------------------------------------|
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start dev server at http://localhost:4321 |
| `npm run build`   | Build production site to ./dist/          |
| `npm run preview` | Preview the production build locally      |

## Adding a Blog Post

Create a new `.md` or `.mdx` file in `src/content/blog/`:

```md
---
title: My New Post
description: A short description
pubDate: Jul 24 2026
heroImage: /blog-placeholder-1.jpg
---

Your content here
```

## Customisation

Edit `src/consts.ts` to update your site title, description, and social links.
