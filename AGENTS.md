<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Copy, brand and photo choices live in `src/config/*.config.ts`; components only read config — keeps UI, configuration and data separate for later Codex work.
- Indexing of fixture-backed pages is decided only by `src/config/content.config.ts` (`isDemoRoute`); route heads and the sitemap both use it, so switching the content source flips SEO in one place.
- Site images live as real files in `public/assets/` and are referenced by absolute `/assets/...` paths from config — keeps deploys (e.g. Cloudflare Workers via GitHub) independent of Lovable's asset CDN.
