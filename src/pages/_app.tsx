import Head from 'next/head';
import '../styles/style.scss';

function MyApp({ Component, pageProps }: any) {
  const Layout =
    Component.layout || (({ children }: { children: any }) => <>{children}</>);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff"></meta>
        <title>Affiliate | Widya Wicara</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
