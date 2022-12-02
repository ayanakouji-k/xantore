import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  let verify = req.cookies.get("token");
  let url = req.url;
  if (!verify && url.includes("/home")) {
    return NextResponse.redirect("https://xantore.vercel.app/");
  }

  if (verify && url === "https://xantore.vercel.app/") {
    return NextResponse.redirect("https://xantore.vercel.app/home");
  }
}
