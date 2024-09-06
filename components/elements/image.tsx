import Image from "next/image";
//import { getImageMetadata } from "@/lib/get-image-placeholder";

export type RenderImageProps = {
  src: string;
  alt: string;
};

export default function RenderImage({ src, alt }: RenderImageProps) {
  //const { blurDataURL } = await getImageMetadata(src);
  return (
    <Image
      src={src}
      alt={alt}
      priority
      fill
      quality={85}
      sizes="50vw"
      //placeholder="blur"
      //blurDataURL={blurDataURL}
      className="object-cover object-top"
    />
  );
}
