import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  try {
    const prediction = await replicate.predictions.get(req.query.id);
    res.end(JSON.stringify({ prediction, success: true }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, success: false });
  }
}
