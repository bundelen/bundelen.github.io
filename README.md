# bundelen docs

Documentation site for our packages, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

Each package gets its own section under `src/content/docs/`:

- Python Collect
- Python Mailable

## Commands

All commands are run from the root of this directory (`docs/`), from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build the production site to `./dist/`           |
| `pnpm preview`         | Preview the build locally, before deploying      |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
