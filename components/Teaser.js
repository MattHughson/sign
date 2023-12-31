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
 
const Teaser = ({ blok }) => {
  
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
  <div {...storyblokEditable(blok)}>
  {console.log('teaserblok',blok)}
  <Player
  component={Main}
  inputProps={{title:blok?.headline, image: blok.image.filename, ringsColour: blok.Color.value }}
  durationInFrames={DURATION_IN_FRAMES}
  fps={VIDEO_FPS}
  compositionHeight={VIDEO_HEIGHT}
  compositionWidth={VIDEO_WIDTH}
  autoPlay
  loop/>
  </div>
  );
};
 
export default Teaser;