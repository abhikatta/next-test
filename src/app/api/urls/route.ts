import { URLShortnerService } from "@/app/services/urlShortnerService";
import { NextResponse } from "next/server";
import { cache } from "react";

const fetchURls = cache(async () => {
  try {
    const shortenerService = new URLShortnerService();
    const res = await shortenerService.getAllUrls();
    return res;
  } catch (error) {
    return error;
  }
});

export async function GET() {
  const urls = await fetchURls();
  return NextResponse.json({ urls });
}
