import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Page = ({ blok }) => (
  console.log('page1',blok),
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
        console.log('page',nestedBlok),
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
 
export default Page;