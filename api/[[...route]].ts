import { Hono } from "hono";
import { handle } from "hono/vercel";

// export const config = {
//   runtime: "edge",
// };

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello Next.js!",
  });
});

const handler = handle(app);

export default {
  config: {
    runtime: "edge",
  },
  GET: handler,
  POST: handler,
  PUT: handler,
  PATCH: handler,
  DELETE: handler,
};
