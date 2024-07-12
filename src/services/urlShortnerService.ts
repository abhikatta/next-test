import connectDB from "@/config/db";
import shortid from "shortid";
import Url, { IUrl } from "@/models/Url";
export class URLShortnerService {
  private UrlModel;
  constructor() {
    connectDB();
    this.UrlModel = Url;
  }
  async shortenUrl(originalUrl: string): Promise<string> {
    let url = await this.getUrlByOriginalUrl(originalUrl);
    if (url) {
      return url.shortUrl;
    }
    let shortUrl = shortid();
    url = await this.getUrlByShortUrl(shortUrl);
    while (url) {
      let shortUrl = shortid();
      url = await this.getUrlByShortUrl(shortUrl);
    }
    await this.createUrl(originalUrl, shortUrl);
    return shortUrl;
  }
  async getUrlById(id: string): Promise<IUrl | null> {
    return await this.UrlModel.findById(id).lean();
  }
  async getUrlByShortUrl(shortUrl: string): Promise<IUrl | null> {
    return await this.UrlModel.findOne({ shortUrl: shortUrl }).lean();
  }
  async getUrlByOriginalUrl(originalUrl: string): Promise<IUrl | null> {
    return await this.UrlModel.findOne({ originalUrl }).lean();
  }
  async getAllUrls(): Promise<IUrl[] | null> {
    return await this.UrlModel.find().lean();
  }
  async deleteUrl(id: string): Promise<IUrl | null> {
    return await this.UrlModel.findByIdAndDelete(id).lean();
  }
  async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl | null> {
    return await this.UrlModel.create({ shortUrl, originalUrl });
  }
  // still not complete
  async updateUrl(originalUrl: string, shortUrl: string): Promise<IUrl | null> {
    return await this.UrlModel.updateOne({ originalUrl }, { shortUrl }).lean();
  }
}
