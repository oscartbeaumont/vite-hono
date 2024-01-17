import { defineConfig, loadEnv } from "vite";
import solid from "vite-plugin-solid";
import devServer from "@hono/vite-dev-server";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";

process.env = { ...process.env, ...loadEnv("production", process.cwd(), "") };

export default defineConfig({
  plugins: [
    solid(),
    createHtmlPlugin({
      minify: true,
    }),
    devServer({
      entry: "./api/[[...route]].ts",
      shouldServeWithHono: (path) => path.startsWith("/api"),
    }),
    !("VERCEL" in process.env) && visualizer(),
  ],
});
