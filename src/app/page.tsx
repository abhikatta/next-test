import Link from "next/link";
import { FormNames } from "./constants";
import { shortenUrl } from "@/serverActions/ShortenUrlAction";

const ShortUrl = () => {
  return (
    <>
      <h1 className=" flex justify-center bg-gray-400 text-black text-4xl font-bold">Shorten a URL</h1>
      <div className="flex bg-gray-600 flex-col justify-center items-center min-h-screen">
        <form method="POST" action={shortenUrl} className="flex items-center w-auto flex-col space-y-6">
          <input
            name={FormNames.originalUrl}
            placeholder="Enter a URL"
            className="p-5 text-lg w-[40rem] text-center focus:-translate-y-4 focus:shadow-2xl  bg-black text-white transition-all duration-400 rounded-lg font-bold
          outline-none border-none"
          />
          <button type="submit" className=" w-fit justify-center btn btn-outline">
            Submit
          </button>
        </form>
        <Link href={"/urls"}>
          <button type="button" className=" mt-10 w-fit justify-center btn btn-outline">
            Show Urls
          </button>
        </Link>
      </div>
    </>
  );
};

export default ShortUrl;
