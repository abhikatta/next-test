import { URLShortnerService } from "@/app/services/urlShortnerService";
import Error from "next/error";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { originalUrl } = await req.json();
    const shortenerService = new URLShortnerService();
    const shorUrl = await shortenerService.shortenUrl(originalUrl);
    return NextResponse.json({
      shorUrl,
    });
  } catch (error) {
    return error;
  }
}

export async function GET() {
  try {
    const shortenerService = new URLShortnerService();
    const res = await shortenerService.getAllUrls();
    return NextResponse.json({ res });
  } catch (error) {
    return error;
  }
}
