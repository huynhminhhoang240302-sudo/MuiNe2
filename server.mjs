import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)));
const publicRoot = join(root, "public");
const preferredPort = Number(process.env.PORT || 5173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".ts": "text/plain; charset=utf-8",
  ".tsx": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml; charset=utf-8"
};

function safeResolve(base, pathname) {
  const decoded = decodeURIComponent(pathname);
  const cleanPath = normalize(decoded).replace(/^[/\\]+/, "").replace(/^(\.\.[/\\])+/, "");
  const fullPath = resolve(join(base, cleanPath));
  return fullPath.startsWith(base) ? fullPath : null;
}

function resolveFile(pathname) {
  if (pathname === "/") {
    return join(root, "index.html");
  }

  const publicPath = safeResolve(publicRoot, pathname);
  if (publicPath && existsSync(publicPath) && statSync(publicPath).isFile()) {
    return publicPath;
  }

  const projectPath = safeResolve(root, pathname);
  if (projectPath && existsSync(projectPath) && statSync(projectPath).isFile()) {
    return projectPath;
  }

  return null;
}

function makeServer() {
  return createServer((request, response) => {
    const url = new URL(request.url || "/", "http://localhost");
    const filePath = resolveFile(url.pathname);

    if (!filePath) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    createReadStream(filePath).pipe(response);
  });
}

function listen(port) {
  const server = makeServer();
  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      listen(port + 1);
      return;
    }
    throw error;
  });

  server.listen(port, "127.0.0.1", () => {
    console.log(`Mui Ne Trip Planner running at http://127.0.0.1:${port}`);
  });
}

listen(preferredPort);
