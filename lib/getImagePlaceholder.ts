import fs from "node:fs/promises";
import { getPlaiceholder } from 'plaiceholder';
import path from "path";

export async function getImageMetadata(src: string) {
  const imageBuffer = await fs.readFile(path.join(process.cwd(), "public", src));
  const { base64 } = await getPlaiceholder(imageBuffer);
  return { blurDataURL: base64 };
}