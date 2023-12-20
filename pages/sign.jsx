import Head from "next/head";
// import styles from "../styles/Home.module.css";


import {
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";


export default function Home({ story, locales, locale, defaultLocale, preview, data }) {
  console.log('data3',data)
  // story = useStoryblokState(story, {
  //   resolveRelations: ["popular-articles.articles"],
  //   language: locale
  // });

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <StoryblokComponent blok={story.content} />
      
    </div>
  );
}

 
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 

 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`);
 
  return {
    props: {
      data: data,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
