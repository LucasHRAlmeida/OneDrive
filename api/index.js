import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const files = {
  "": ["index.html", "text/html; charset=utf-8"],
  "index.html": ["index.html", "text/html; charset=utf-8"],
  "app.js": ["app.js", "text/javascript; charset=utf-8"],
  "styles.css": ["styles.css", "text/css; charset=utf-8"]
};

function safeEqual(left, right) {
  const leftHash = crypto.createHash("sha256").update(left).digest();
  const rightHash = crypto.createHash("sha256").update(right).digest();
  return crypto.timingSafeEqual(leftHash, rightHash);
}

export default function handler(request, response) {
  const username = process.env.APP_USERNAME;
  const password = process.env.APP_PASSWORD;
  if (!username || !password) {
    response.status(500).send("APP_USERNAME and APP_PASSWORD must be configured.");
    return;
  }

  const authorization = request.headers.authorization || "";
  let authenticated = false;
  if (authorization.startsWith("Basic ")) {
    try {
      const decoded = Buffer.from(authorization.slice(6), "base64").toString("utf8");
      const separator = decoded.indexOf(":");
      authenticated = separator > -1 &&
        safeEqual(decoded.slice(0, separator), username) &&
        safeEqual(decoded.slice(separator + 1), password);
    } catch (_) {
      authenticated = false;
    }
  }
  if (!authenticated) {
    response.setHeader("WWW-Authenticate", 'Basic realm="Biblioteca privada", charset="UTF-8"');
    response.status(401).send("Autenticação necessária.");
    return;
  }

  const requested = String(request.query.path || "").replace(/^\/+|\/+$/g, "");
  const file = files[requested];
  if (!file) {
    response.status(404).send("Not found");
    return;
  }
  response.setHeader("Content-Type", file[1]);
  response.setHeader("Cache-Control", "private, no-store");
  response.status(200).send(fs.readFileSync(path.join(process.cwd(), file[0]), "utf8"));
}
