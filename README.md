# Vite + Hono

An example of building a [SolidJS](https://www.solidjs.com) app using [Vite](https://vitejs.dev) w/ a [Hono](https://hono.dev) backend which is deployed to [Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions).

## Usage

```bash
pnpm i
pnpm dev # Uses Vite dev server and serve Hono at `/api/*` like Vercel does
```

Vercel deploys don't require any special configuration!

## Limitations

 - Edge Functions are run in Node.js during development. This is how [SolidStart](https://start.solidjs.com) works so it is acceptable for now.
 - Using pnpm patch for `@hono/vite-dev-server` until [honojs/vite-plugins#50](https://github.com/honojs/vite-plugins/pull/50) is merged.