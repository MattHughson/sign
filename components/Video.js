import React, { useMemo, useState, useEffect } from "react";
import { Player } from "@remotion/player";
import { storyblokEditable } from "@storyblok/react";
import { Main } from "../remotion/MyComp/Main";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";
 
const Video = ({ blok }) => {
  const {Bynder, Image, Color, Text} = blok

    const container = {
        margin: "auto",
        marginBottom: 20,
      };
      
      const outer = {
        borderRadius: "var(--geist-border-radius)",
        overflow: "hidden",
        boxShadow: "0 0 200px rgba(0, 0, 0, 0.15)",
        marginBottom: 40,
        marginTop: 60,
      };
      
      const player = {
        width: "100%",
      };
  
  // const [text, setText] = useState();
  
  // useEffect(() => {
  
  //   setText(blok?.headline)
  // }, [text])

  

  // const inputProps = useMemo(() => {
  //   console.log()
  //   return {
  //     title: text,
  //   };
  // }, [text]);

  return (
  <div style={container} {...storyblokEditable(blok)}>
  {console.log('video',blok)}
  <Player
  component={Main}
  inputProps={{title:Text, image: Image.filename, ringsColour: Color.color }}
  durationInFrames={DURATION_IN_FRAMES}
  fps={VIDEO_FPS}
  compositionHeight={VIDEO_HEIGHT}
  compositionWidth={VIDEO_WIDTH}
  autoPlay
  style={player}
  loop/>
  </div>
  );
};
 
export default Video;