import { URLShortnerService } from "@/services/urlShortnerService";
import { redirect } from "next/navigation";

const RedirectToOrigialUrl = async ({ params }: { params: { id: string } }) => {
  const urlService = new URLShortnerService();
  const originalUrl = await urlService.getUrlByShortUrl(params.id);
  if (originalUrl) {
    redirect(originalUrl?.originalUrl);
  }
};

export default RedirectToOrigialUrl;
