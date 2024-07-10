import connectDB from "@/config/db";
import Url, { IUrl } from "@/models/Url";

export default class UrlRepository {
  private UrlModel;
  constructor() {
    connectDB();
    this.UrlModel = Url;
  }
  async getUrlById(id: string): Promise<IUrl | null> {
    return await this.UrlModel.findById(id).lean();
  }
  async getUrlByShortUrl(shortUrl: string): Promise<IUrl | null> {
    return await this.UrlModel.findOne({ shortUrl }).lean();
  }
  async getUrlByOriginalUrl(originalUrl: string): Promise<IUrl | null> {
    return await this.UrlModel.findOne({ originalUrl }).lean();
  }
  async getAllUrls(): Promise<IUrl | null> {
    return this.UrlModel.find().lean();
  }
  async deleteUrl(id: string): Promise<IUrl | null> {
    return await this.UrlModel.findByIdAndDelete(id).lean();
  }
  async createUrl(originalUrl: string, shortUrl: string): Promise<IUrl | null> {
    return await this.UrlModel.create({ shortUrl, originalUrl });
  }
  async updateUrl(originalUrl: string, shortUrl: string): Promise<IUrl | null> {
    return await this.UrlModel.updateOne({ originalUrl }, { shortUrl }).lean();
  }
}
