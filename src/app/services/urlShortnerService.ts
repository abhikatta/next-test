import UrlRepository from "../repositories/UrlRepositories";
import shortid from "shortid";
export class URLShortnerService {
  private urlRepository: UrlRepository;
  constructor() {
    this.urlRepository = new UrlRepository();
  }
  async shortenUrl(originalUrl: string): Promise<string> {
    let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);
    if (url) {
      return url.shortUrl;
    }
    let shortUrl = shortid();
    url = await this.urlRepository.getUrlByShortUrl(shortUrl);
    while (url) {
      let shortUrl = shortid();
      url = await this.urlRepository.getUrlByShortUrl(shortUrl);
    }
    await this.urlRepository.createUrl(originalUrl, shortUrl);
    return shortUrl;
  }
  async getAllUrls() {
    return await this.urlRepository.getAllUrls();
  }
  async getUrlByShortUrl(shortUrl: string) {
    return await this.urlRepository.getUrlByShortUrl(shortUrl);
  }
  async getUrlByOriginalUrl(originalUrl: string) {
    return await this.urlRepository.getUrlByOriginalUrl(originalUrl);
  }
}
