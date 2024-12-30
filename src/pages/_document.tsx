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
          content="강아지/고양이 별에 있는 반려동물이 보내주는 AI 편지 서비스"
        />
        <meta property="og:title" content="젤리레터 🐾💌" />
        <meta
          property="og:description"
          content="강아지/고양이 별에 있는 반려동물이 보내주는 AI 편지 서비스"
        />
        <meta
          property="og:image"
          content="https://jellyletter.netlify.app/og_image.png"
        />
        <meta property="og:url" content="https://jellyletter.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="젤리레터 🐾💌" />
        <meta
          name="twitter:description"
          content="강아지/고양이 별에 있는 반려동물이 보내주는 AI 편지 서비스"
        />
        <meta
          name="twitter:image"
          content="https://jellyletter.netlify.app/og_image.png"
        />
        {/* 폰트 로딩을 위한 link 태그 추가 */}
        <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/fonts-archive/GangwonEduSaeeum/GangwonEduSaeeum.css"
        />
        {/* GA 스크립트 추가 */}
        <script async defer src={'https://www.googletagmanager.com/gtag/js?id=G-TFFWTQ1EX9'}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TFFWTQ1EX9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}