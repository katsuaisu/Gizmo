import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const basePath = process.env["VITE_BASE_PATH"] ?? "/";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  base: basePath,
  plugins: [tanstackStart(), react(), tailwindcss()],
});
