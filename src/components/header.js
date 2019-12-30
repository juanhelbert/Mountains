import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `#131117`,
      marginBottom: `1.45rem`,
      borderBottom: '1px solid #fff'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1300,
        padding: `1rem 1.0875rem`,
      }}
    >
        <Link
          to="/"
          style={{
            color: `rgba(255, 255, 255, 0.85)`,
            textDecoration: `none`,
            marginRight: `15px`
          }}
        >
          Home
        </Link>
        <Link
          to="/page-2/"
          style={{
            color: `rgba(255, 255, 255, 0.85)`,
            textDecoration: `none`,
          }}
        >
          Go to page 2
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
