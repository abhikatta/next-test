import { URLShortnerService } from "@/services/urlShortnerService";
import { redirect } from "next/navigation";

const RedirectToOrigialUrl = async ({ params }: { params: { shortid: string } }) => {
  const urlService = new URLShortnerService();
  const originalUrl = await urlService.getUrlByShortUrl(params.shortid);
  if (originalUrl) {
    redirect(originalUrl?.originalUrl);
  }
};

export default RedirectToOrigialUrl;
