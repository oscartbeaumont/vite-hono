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

export default {
  GET: async (req, context) => {
    const resp = await handler(req, context);
    console.log(resp); // TODO
    return new Response("API TODO");
  },
  // POST: handler,
  // PUT: handler,
  // PATCH: handler,
  // DELETE: handler,
};
