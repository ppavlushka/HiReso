import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import { nanoid } from "nanoid";

const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3Client = new S3Client({
  endpoint: process.env.SPACES_ENDPOINT, // Find your endpoint in the control panel, under Settings. Prepend "https://".
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  region: process.env.SPACES_REGION, // Must be "us-east-1" when creating new Spaces. Otherwise, use the region in your endpoint (e.g. nyc3).
  credentials: {
    accessKeyId: process.env.SPACES_KEY, // Access key pair. You can create access key pairs using the control panel or API.
    secretAccessKey: process.env.SPACES_SECRET, // Secret access key defined through an environment variable.
  },
});

export default function uploadImage(req, res) {
  upload.single("file")(req, res, async (err) => {
    if (err) {
      res.status(400).json({ message: err.message, success: false });
      return;
    }

    try {
      const file = req.file;

      const params = {
        Bucket: process.env.SPACES_NAME,
        Key: `images/${nanoid()}_${file.originalname.replace(/[^\w.]/g, "")}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
      };
      await s3Client.send(new PutObjectCommand(params));
      res.status(200).json({
        url: `${process.env.SPACES_ENDPOINT.replace(
          "://",
          `://${process.env.SPACES_NAME}.`
        )}/${params.Key}`,
      });
    } catch (err) {
      res.status(400).json({ message: err.message, success: false });
      console.log(err);
    }
  });
}
