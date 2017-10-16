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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
