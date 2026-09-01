import { NextResponse } from "next/server";

export function middleware(request) {
  const authorization = request.headers.get("authorization");
  const expectedUser = process.env.APP_USERNAME;
  const expectedPassword = process.env.APP_PASSWORD;

  if (!expectedUser || !expectedPassword) {
    return new NextResponse("APP_USERNAME and APP_PASSWORD must be configured.", { status: 500 });
  }

  if (authorization?.startsWith("Basic ")) {
    try {
      const decoded = atob(authorization.slice(6));
      const separator = decoded.indexOf(":");
      if (separator > -1 &&
          decoded.slice(0, separator) === expectedUser &&
          decoded.slice(separator + 1) === expectedPassword) {
        return NextResponse.next();
      }
    } catch (_) {
      // Treat malformed credentials as unauthorized.
    }
  }

  return new NextResponse("Autenticação necessária.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Biblioteca privada", charset="UTF-8"' }
  });
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
