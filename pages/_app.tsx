import { storyblokInit, apiPlugin } from "@storyblok/react";
import Teaser from '../components/Teaser'
import Page from '../components/Page'
import Video from '../components/Video'

const components = {
  // feature: Feature,
  // grid: Grid,
  teaser: Teaser,
  page: Page,
  video: Video,
  // hero: Hero,
  // "all-articles": AllArticles,
  // article: Article,
  // "popular-articles": PopularArticles,
  // pdf: Pdf,
  // doc: Doc,
};

storyblokInit({
  accessToken: "IR1Lj26hQLt6Dy9NJWKq7gtt",

  // apiOptions: {
  //   region: "eu", 
  // },
  use: [apiPlugin],
  components,
});

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any; // Adjust the type according to your needs
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
