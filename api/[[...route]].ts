import { Hono } from "hono";
import { handle } from "hono/vercel";

// Configure env in Vercel Functions
if (!import.meta.env) import.meta.env = process.env;

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.get("/env", (c) => {
  return c.json({
    message: `${import.meta.env.DEMO} | ${import.meta.env.VITE_DEMO}`,
    demo: import.meta.env,
  });
});

app.all("*", (c) => c.text("404: Not Found"));

// This is for Vercel
export const GET = handle(app);
export const POST = GET;
export const PUT = GET;
export const PATCH = GET;
export const DELETE = GET;

// This is for `@hono/vite-dev-server`
export default app;
