import { IUrl } from "@/models/Url";

async function fetchUrls() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/urls`);

  if (!response.ok) {
    throw new Error("Failed to return response!");
  }
  return response.json();
}

export default async function UrlList() {
  let urls: { urls: Array<IUrl> };
  try {
    urls = await fetchUrls();
  } catch (error) {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
          <h1 className="text-3xl font-bold mg-6 text-center text-gray-700">Error</h1>
          <p className="text-center text-red-500">Failed to load urls</p>
        </div>
      </div>
    );
  }
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold mg-6 text-center text-gray-700">All Short Urls</h1>
        <div className=" overflow-x-auto">
          <table className="table  w-full">
            <thead>
              <tr>
                <th className="font-bold text-2xl text-black">Original Url</th>
                <th className="font-bold text-2xl text-black">Short Url</th>
              </tr>
            </thead>
            <tbody>
              {urls.urls.map((url, index) => {
                return (
                  <tr key={index}>
                    <td className="text-black">{url.originalUrl}</td>
                    <td>
                      <a
                        href={`${url.originalUrl}`}
                        target="_blank"
                        className=" link link-primary"
                      >{`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortUrl}`}</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
