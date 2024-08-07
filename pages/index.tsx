import { Fragment } from "react";
import Head from "next/head";
import SurveyBase from "@/app/component/gizmo/survey/SurveyBase";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Renlife</title>
        <meta
          name="description"
          content="Early Neonatal Jaundice Detection System"
        />
        {/* open graph */}
        <meta property="og:title" content="Jaundice, Detection" />
        <meta
          property="og:description"
          content="Early Neonatal Jaundice Detection System"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://renlife.netlify.app" />
        <meta property="og:image" content="/images/og-image.png" />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@renlife" />
      </Head>

      <SurveyBase />
    </Fragment>
  );
};

export default Home;
