import { defineConfig, loadEnv } from "vite";
import solid from "vite-plugin-solid";
import devServer from "@hono/vite-dev-server";

process.env = { ...process.env, ...loadEnv("production", process.cwd(), "") };

export default defineConfig({
  plugins: [
    solid(),
    devServer({
      entry: "./api/[[...route]].ts",
      shouldServeWithHono: (path) => path.startsWith("/api"),
    }),
  ],
});
