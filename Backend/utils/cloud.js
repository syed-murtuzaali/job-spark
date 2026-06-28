import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";
dotenv.config();

const isConfigured =
  process.env.CLOUD_NAME &&
  process.env.CLOUD_API &&
  process.env.API_SECRET &&
  process.env.CLOUD_NAME !== "placeholder" &&
  process.env.CLOUD_API !== "placeholder" &&
  process.env.API_SECRET !== "placeholder";

if (isConfigured) {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.API_SECRET,
  });
} else {
  console.warn(
    "⚠️  Cloudinary credentials not configured — file uploads will be skipped."
  );
}

export { isConfigured as cloudinaryReady };
export default cloudinary;
