import { useRef, useState } from "react";
import { HiPlayCircle } from "react-icons/hi2";
import videoPreview from "../assets/video-preview.png";
import { HiPauseCircle } from "react-icons/hi2";

export const VideoPlayer = ({ url }: { url: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef?.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef?.current?.pause();
    setIsPlaying(false);
  };

  return (
    <div className="relative isolate z-[1] flex w-full items-center justify-start h-[700px]">
      {url ? (
        <video
          ref={videoRef}
          src={url}
          width="100%"
          className="w-full  h-[700px] object-cover"
        />
      ) : (
        <img
          src={videoPreview}
          alt="featuring a lively wild animal!"
          className="h-auto w-full opacity-75"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute z-[2] flex h-full w-full flex-col items-center justify-center gap-2 px-32 py-8" onClick={isPlaying? handlePause : handlePlay}>
        {isPlaying ? (
          <HiPauseCircle
            className="size-16 text-white group-hover:text-green-500"
          />
        ) : (
          <HiPlayCircle
            className="size-16 text-white group-hover:text-green-500"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
