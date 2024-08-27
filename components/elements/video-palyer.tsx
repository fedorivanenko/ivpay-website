"use client";

import ReactPlayer from "react-player";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


//TODO: DIALOG IS A BAD UI HERE
const VideoPlayer: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader className="hidden">
          <DialogTitle>Video</DialogTitle>
          <DialogDescription>This is video player</DialogDescription>
        </DialogHeader>
        <div className="aspect-video h-full rounded bg-slate-700"></div>
      </DialogContent>
    </Dialog>
  );
};
VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
