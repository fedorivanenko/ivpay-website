// components/HeroImage.tsx
import Image from "next/image";
//import { getImageMetadata } from "@/lib/get-image-placeholder";

export type HeroImageProps = {
  src: string;
  alt: string;
};

export default async function HeroImage({ src, alt }: HeroImageProps) {
  //const { blurDataURL } = await getImageMetadata(src);

  return (
    <div className="relative h-full aspect-3/4 sm:aspect-square">
      <Image
        src={src}
        alt={alt}
        priority
        fill
        quality={75}
        sizes="50vw"
        //placeholder="blur"
        //blurDataURL={blurDataURL}
        className="object-cover object-top"
      />
    </div>
  );
}