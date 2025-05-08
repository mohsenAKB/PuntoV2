import React, { FC, ReactNode } from "react";
import Video, { VideoProps } from "next-video";

export interface IVideoPlayerProps extends VideoProps {
}

const VideoPlayer: FC<IVideoPlayerProps> = (props): JSX.Element => {
  return <Video {...props} />;
};

export default VideoPlayer;
