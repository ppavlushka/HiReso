import { getJson } from "serpapi";
import axios from "axios";
import imageType from "image-type";
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
      .status(400)
      .json({ success: false, message: "Please, enter image URL" });
  }
  try {
    const isImage = await isImageUrl(url);
    if (!isImage) {
      res.status(400).json({
        success: false,
        message:
          "Sorry, we only search for images. Please try a different search term.",
      });
      return;
    }
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

async function isImageUrl(url) {
  try {
    const headResponse = await axios.head(url);
    const contentType = headResponse.headers["content-type"];
    if (contentType.startsWith("image/")) {
      return true;
    } else {
      const getResponse = await axios.get(url, { responseType: "arraybuffer" });
      const buffer = Buffer.from(getResponse.data);
      const detectedType = await imageType(buffer);
      return !!detectedType;
    }
  } catch (err) {
    return false;
  }
}
