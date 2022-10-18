import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head> 
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com"/> 
        <link href="https://fonts.googleapis.com/css2?family=Cairo:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolada:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main/>
        <NextScript />
        <script src='https://unpkg.com/flowbite@1.5.2/dist/flowbite.js' ></script>
      </body>
    </Html>
  )
}