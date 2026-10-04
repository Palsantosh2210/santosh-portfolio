import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import handler from "./api/profile.js";

// Makes /developer/santosh-pal work during `npm run dev` too (on Vercel the api/ folder is used)
const devApi = {
  name: "dev-api",
  configureServer(server) {
    // exact paths only, so files like /api/profile.js are never mistaken for the endpoint
    server.middlewares.use((req, res, next) => {
      const path = (req.url || "").split("?")[0];
      if (path === "/developer/santosh-pal" || path === "/api/profile") return handler(req, res);
      next();
    });
  },
};

// base "./" makes the build work on Netlify, Vercel AND GitHub Pages
export default defineConfig({
  plugins: [react(), devApi],
  base: "./",
  server: { watch: { ignored: ["**/vercel.json"] } },
});
