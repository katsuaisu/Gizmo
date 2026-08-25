import { mkdir, writeFile } from "node:fs/promises";

const basePath = process.env.VITE_BASE_PATH ?? "/";
const siteUrl = new URL(basePath, "https://github-pages.invalid");
const { default: server } = await import("../dist/server/server.js");
const response = await server.fetch(new Request(siteUrl));

if (!response.ok) {
    throw new Error(`Unable to prerender ${siteUrl}: ${response.status}`);
}

await mkdir("dist/client", { recursive: true });
await writeFile("dist/client/index.html", await response.text());