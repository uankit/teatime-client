import React, {
  ReactElement,
} from "react";

type Props = {
  src: string;
  width: string;
  height: string;
  onVideoEnd: () => void;
};

const VideoComponent: React.FC<Props> = ({
  src,
  width,
  height,
  onVideoEnd,
}): ReactElement => {
  return (
    <video
      src={src}
      width={width}
      height={height}
      muted
      controls
      autoPlay
      onEnded={onVideoEnd}
    />
  );
};

export default VideoComponent;
