import { storyblokInit, apiPlugin } from "@storyblok/react";
import Teaser from '../components/Teaser'
import Page from '../components/Page'

const components = {
  // feature: Feature,
  // grid: Grid,
  teaser: Teaser,
  page: Page,
  // hero: Hero,
  // "all-articles": AllArticles,
  // article: Article,
  // "popular-articles": PopularArticles,
  // pdf: Pdf,
  // doc: Doc,
};

storyblokInit({
  accessToken: "X8SQSjMXabCbQifGubULMAtt",

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
