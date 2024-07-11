import Head from "next/head";
interface ILayout {
  title: string;
  description: string;
  keywords: string;
  // children?: any;
}
function Layout({ title, keywords, description }: ILayout) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </Head>
      {/* {children} */}
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  title: "This is my app title",
  description: "This is my app description",
  keywords: "web, javascript, react, next",
};
