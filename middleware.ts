import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get("token");
  const role = req.cookies.get("role");
  const url = req.url;
  if (!verify && url.includes("/home")) {
    return NextResponse.redirect("https://xantore.vercel.app/");
  }
  if (!verify && url.includes("/users")) {
    return NextResponse.redirect("https://xantore.vercel.app/");
  }

  if (verify && url === "https://xantore.vercel.app/") {
    if (role?.value === "DRIVER") {
      return NextResponse.redirect("https://xantore.vercel.app/sale/sell");
    } else {
      return NextResponse.redirect("https://xantore.vercel.app/home");
    }
  }
}
