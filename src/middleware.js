import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req , secret: process.env.NEXTAUTH_SECRET});

  const { pathname } = req.nextUrl;
  const protectedPath = ['/products', '/addproduct'];
  if (protectedPath.some((path) => pathname.startsWith(path)) && !token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

 


  return NextResponse.next();
}


export const config = {
  matcher: ["/products/:path*", "/addproduct"], 
};
