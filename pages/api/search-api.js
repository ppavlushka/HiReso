import { getJson } from "serpapi";
import parseResult from "../../server/parse";

// import dummyResult from "../../server/dummies/girl-cofee";
// import dummyResult from "../../server/dummies/dancing-no-image-sizes";
import dummyResult from "../../server/dummies/girl-with-flower";

const DUMMY = process.env.NODE_ENV !== "production";
export default async function handler(req, res) {
  const { url } = req.query;
  //console.log(url, process.env.SERPAPI_API_KEY);
  if (!url) {
    res
      .status(403)
      .json({ success: false, message: "Please, enter image URL" });
  }
  try {
    const result = DUMMY
      ? dummyResult
      : await getJson("yandex_images", {
          url,
          api_key: process.env.SERPAPI_API_KEY,
        });
    res.status(200).json(parseResult(result));
  } catch (error) {
    res
      .status(403)
      .json({ success: false, message: "Something went wrong", error });
  }
}
