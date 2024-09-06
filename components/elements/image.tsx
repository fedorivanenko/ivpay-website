import Image from "next/image";
//import { getImageMetadata } from "@/lib/get-image-placeholder";
import { cn } from "@/lib/utils";

export type RenderImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function RenderImage({ src, alt, className }: RenderImageProps) {
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
      className={cn("object-cover object-top", className)}
    />
  );
}
