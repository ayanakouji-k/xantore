import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get("token");
  const role = req.cookies.get("role");
  const loginPage = NextResponse.redirect("https://xantore.vercel.app/");
  const url = req.url;
  if (!verify && url.includes("/home")) {
    return loginPage;
  }
  if (!verify && url.includes("/users")) {
    return loginPage;
  }
  if (!verify && url.includes("/warehouse")) {
    return loginPage;
  }
  if (!verify && url.includes("/production")) {
    return loginPage;
  }
  if (!verify && url.includes("/sale")) {
    return loginPage;
  }
  if (!verify && url.includes("/employees")) {
    return loginPage;
  }
  if (!verify && url.includes("/delivery")) {
    return loginPage;
  }
  if (!verify && url.includes("/client")) {
    return loginPage;
  }

  if (verify && url === "https://xantore.vercel.app/") {
    if (role?.value === "DRIVER") {
      return NextResponse.redirect("https://xantore.vercel.app/sale/sell");
    } else {
      return NextResponse.redirect("https://xantore.vercel.app/home");
    }
  }
}
