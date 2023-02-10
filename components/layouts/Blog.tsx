import Footer from "../Footer";
import NavBar from "../NavBar";
import Head from "next/head";
import SiteMetadata from "../MetaData";

export default function BlogLayout({ children, meta }: any) {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content={SiteMetadata.name} />
                <meta name="keywords" content={SiteMetadata.keywords} />
                <meta name="description" content={meta.description} />
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#FFA500" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:site_name" content={SiteMetadata.name} />
                <meta property="og:locale" content="en_GB" />
                <title data-rh="true">{SiteMetadata.title}</title>
                <meta data-rh="true" property="og:type" content="website" />
                <meta data-rh="true" property="og:title" content={meta.title} />
                <meta data-rh="true" property="og:image" content="/images/banner.png" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css" />
            </Head>

            {/* Header */}
            <NavBar />

            <main>
                <section id="about" className="dark-bg">
                    <div className="flex">
                        <div className="flex-full">
                            <div className="blog">
                                {children}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </>
    )
}