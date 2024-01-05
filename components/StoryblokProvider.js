/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import Video from "./Video";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "IR1Lj26hQLt6Dy9NJWKq7gtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    video: Video,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}