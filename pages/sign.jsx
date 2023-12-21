import Head from "next/head";
// import styles from "../styles/Home.module.css";


import {
  getStoryblokApi,
  StoryblokComponent,
  storyblokEditable,
  useStoryblokState
} from "@storyblok/react";

export default function Home({ story, locales, locale, defaultLocale, preview, data }) {
  
  const newStory = useStoryblokState(story);
  
  if (!newStory.content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <StoryblokComponent blok={newStory.content} />
      
    </div>
  );
}

 
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  let sbParams = {
    version: "draft",
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`,sbParams);
 
  return {
    props: {
      data: data,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}
