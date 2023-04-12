import Replicate from "replicate";
import axios from "axios";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  try {
    const prediction = await replicate.predictions.get(req.query.id);
    const { output: imageUrl } = prediction;
    // Fetch the image from the remote server using Axios
    const response = await axios.get(imageUrl, { responseType: "stream" });
    const contentType = response.headers["content-type"];

    // Set the content type header based on the remote server's response
    res.setHeader("Content-Type", contentType);

    // Pipe the response from the remote server to our response
    response.data.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, success: false });
  }
}
