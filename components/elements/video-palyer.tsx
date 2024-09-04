"use client";

import * as React from "react";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Icon } from "@/components/elements/icon";

type VideoPlayerProps = {
  url: string;
  title: string;
  description: string;
  thumbnail: {
    src: string;
  };
};

/* TODO: Dialog is not a great UX here. Consider some other solution in the future */
const PopUpVideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  title,
  description,
  thumbnail,
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Dialog onOpenChange={(open) => setIsOpen(open)}>
      <DialogTrigger className="group relative h-full w-full">
        <Image
          src={thumbnail.src}
          alt={description}
          fill
          quality={75}
          sizes="50vw"
          className="object-cover object-top transition-transform group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 flex aspect-square h-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/40 transition-transform group-hover:scale-125 lg:h-20"
        >
          <Icon
            icon="Play"
            className="h-1/2 w-1/2 translate-x-[7%] lg:h-1/2 lg:w-1/2 group-hover:scale-105 transition-transform"
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="mx-auto aspect-video max-h-screen w-full overflow-hidden rounded-md bg-black/60">
          <ReactPlayer
            url={url}
            playing={isOpen}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
PopUpVideoPlayer.displayName = "PopUpVideoPlayer";

export { PopUpVideoPlayer };
