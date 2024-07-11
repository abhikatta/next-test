import { URLShortnerService } from "@/app/services/urlShortnerService";
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
