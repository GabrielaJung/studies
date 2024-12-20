import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

import React from 'react';

/**
 * This file is web-only and used to configure the root HTML for every web page during static rendering.
 * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />

        {/*
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>{children}</body>
    </html>
  );
}

//TODO: define theme

// light mode => root
const responsiveBackground = `
:root {
  --red: #F44F4F;
  --primary: #FFB000;
  --color: #181818;
  --color-shade: ##333;
  --shadow-color: #18181824;
  --secondary: #929292;
  --stroke: #D0D0D0;
  --tint: #D9D9D9;
  --shade: #EFEFEF;
  --background: #FFF;
  --border-radius: 5px;
}

@media (prefers-color-scheme: dark){
:root:{
  --red: #F66F6F;
  --primary: #FFB000;
  --color: #FFF;
  --shador-color: #FFFFFF24
  --secondary: #929292;
  --stroke: #D0D0D0;
  --tint: #D9D9D9;
  --shade: #EFEFEF;
  --background: #181818
}`;
// }
// body {
//   background-color: var(--background);
// }
// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: var(--);
//   }
// }`;

// import { ScrollViewStyleReset } from 'expo-router/html';
// import { type PropsWithChildren } from 'react';

// /**
//  * This file is web-only and used to configure the root HTML for every web page during static rendering.
//  * The contents of this function only run in Node.js environments and do not have access to the DOM or browser APIs.
//  */
// export default function Root({ children }: PropsWithChildren) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

//         {/*
//           Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
//           However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
//         */}
//         <ScrollViewStyleReset />

//         {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
//         <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
//         {/* Add any additional <head> elements that you want globally available on web... */}
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }

// const responsiveBackground = `
// body {
//   background-color: #fff;
// }
// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: #000;
//   }
// }`;
