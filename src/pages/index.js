import React from "react";

import Layout from "../components/layout";
import Gallery from "../components/gallery";
import Profile from "../components/profile";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: `flex`, marginTop: `77px`, paddingTop: `60px` }}>
      <div style={{ width: `80%` }}>
        <Gallery />
      </div>
      <div style={{ width: `20%` }}>
        <Profile />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
