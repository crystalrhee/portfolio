import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main
      style={{
        paddingBottom: `2.5rem`,
        position: `relative`,
        minHeight: `100vh`,
        display: `flex`,
        flexDirection: `column`,
        flexGrow: `1`
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <section className="container">{children}</section>
      <Footer />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
