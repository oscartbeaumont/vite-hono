import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

app.all("*", (c) => c.text("404: Not Found"));

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
