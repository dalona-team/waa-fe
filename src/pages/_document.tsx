/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="다로나 - WAA 서비스"
        />
        <meta property="og:title" content="다로나" />
        <meta
          property="og:description"
          content="다로나 - WAA 서비스"
        />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="다로나" />
        <meta
          name="twitter:description"
          content="다로나 - WAA 서비스"
        />
        <meta
          name="twitter:image"
          content=""
        />
        {/* 폰트 로딩을 위한 link 태그 추가 */}
        <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}