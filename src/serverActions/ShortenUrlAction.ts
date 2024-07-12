import { FormNames } from "@/app/constants";
import { URLShortnerService } from "@/services/urlShortnerService";

export const shortenUrl = async (formData: FormData) => {
  "use server";
  const originalUrl = formData.get(FormNames.originalUrl) as string;
  console.log(originalUrl);

  const shortenerService = new URLShortnerService();
  const shorUrl = await shortenerService.shortenUrl(originalUrl);
};
