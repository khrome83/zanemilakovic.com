// @ts-check --jsx

import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage, query }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles, query };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Zane Milakovic" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="ZaneMilakovic.com" />
          <meta name="apple-mobile-web-app-title" content="ZaneMilakovic.com" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-navbutton-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" href="/static/styles/print.css" media="print" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/icon.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/static/icons/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/static/icons/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/static/icons/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/static/icons/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/static/icons/apple-touch-icon-180x180.png" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" integrity="sha256-HxaKz5E/eBbvhGMNwhWRPrAR9i/lG1JeT4mD6hCQ7s4=" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          @import './styles/variables.css';

          html {
            box-sizing: border-box;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          html,
          body {
            margin: 0;
            padding: 0;
          }

          html {
            min-height: 100%;
            background: var(--page-bg-color);
            color: var(--page-font-color);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            font-size: var(--base-rem);
          }

          body {
            text-rendering: optimizeLegibility;
            --webkit-font-smoothing: antialiased;
            font-size: var(--font-size-min);

            @media (--tablet-viewport) {
              font-size: var(--font-size-mid);
            }

            @media (--desktop-viewport) {
              font-size: var(--font-size-max);
            }
          }

          img {
            max-width: 100%;
          }
        `}</style>
      </html>
    );
  }
}
