import React from "react";
import JWPlayer from "@jwplayer/jwplayer-react";

const JWPlayerComponent = () => {
  return (
    <JWPlayer
      file="https://path-to-my.mp4"
      library="https://path-to-my-jwplayer-library.js"
    />
  );
};

export default JWPlayerComponent;
