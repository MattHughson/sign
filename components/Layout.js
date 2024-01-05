import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
 
storyblokInit({
  accessToken: "X8SQSjMXabCbQifGubULMAtt",
  use: [apiPlugin]
});
 
export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
         <html lang="en">
             <body>{children}</body>
        </html>
    </StoryblokProvider>
  )
}