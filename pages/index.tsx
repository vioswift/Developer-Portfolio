import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SiteMetadata from "../components/MetaData";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{SiteMetadata.title}</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>

        <meta name="author" content={SiteMetadata.name} />
        <meta name="keywords" content={SiteMetadata.keywords} />
        <meta name="description" content={SiteMetadata.description} />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#FFA500" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content={SiteMetadata.name} />
        <meta property="og:description" content={SiteMetadata.description} />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">{SiteMetadata.title}</title>
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" property="og:title" content={SiteMetadata.title} />
        <meta data-rh="true" property="og:image" content="/images/banner.png" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css" />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;