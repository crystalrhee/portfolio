import React from "react"

const Footer = () => (
  <footer
    style={{
        position: `absolute`,
        bottom: `0`,
        width: `100%`,
        height: `5rem`,
    }}
  >
    <div className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
