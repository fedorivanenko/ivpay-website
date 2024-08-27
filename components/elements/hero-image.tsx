// components/HeroImage.tsx
import Image from "next/image";
import { getImageMetadata } from "@/lib/getImagePlaceholder";

export type HeroImageProps = {
  src: string;
  alt: string;
};

export default async function HeroImage({ src, alt }: HeroImageProps) {
  const { blurDataURL } = await getImageMetadata(src);

  return (
    <div className="relative aspect-square h-full sm:aspect-4/3">
      <Image
        src={src}
        alt={alt}
        priority
        fill
        quality={85}
        sizes="50vw"
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="object-cover object-top"
      />
    </div>
  );
}