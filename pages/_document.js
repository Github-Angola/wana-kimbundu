import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
            <Script 
                  async 
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5514991570328030"
                  crossOrigin='anonymous' 
            /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}