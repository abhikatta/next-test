import { URLShortnerService } from "@/app/services/urlShortnerService";
import { IUrl } from "@/models/Url";
import { NextResponse } from "next/server";
import { cache } from "react";
type URLData = IUrl[] | null;
const fetchURls = cache(async (): Promise<URLData> => {
  try {
    const shortenerService = new URLShortnerService();
    const res: URLData = await shortenerService.getAllUrls();
    return res;
  } catch (error) {
    throw new Error(error as string);
  }
});

export async function GET() {
  try {
    const urls: URLData = await fetchURls();
    return NextResponse.json({ urls: urls });
  } catch (error) {
    throw new Error(error as string);
  }
}
