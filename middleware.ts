import { NextResponse, type NextRequest } from "next/server";

/** Allow local preview: /?portal=office or /?portal=guest */
export function middleware(request: NextRequest) {
  const portal = request.nextUrl.searchParams.get("portal");
  const response = NextResponse.next();

  if (portal === "office" || portal === "guest") {
    response.cookies.set("portal-mode", portal, {
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
