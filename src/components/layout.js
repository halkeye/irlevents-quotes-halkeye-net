import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
// import './layout.css'
import '../style.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <div id="header_1"></div>
        <div id="header_2">
          <a href="/"><img src="/images/logo2.png" alt="simple fresh green" /></a>
          {data.site.siteMetadata.title}
        </div>
        <div id="header_3"></div>

        <div id="container">
          <div id="left">
            <div className="leftbox">
              <p className="head">Navigation</p>
              <ul>
                <li><a className="" href="/" title="Quotes">Quotes</a></li>
              </ul>
            </div>
          </div>

          <div id="content">
            <h2>{data.site.siteMetadata.title}</h2>
            {children}
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
          <div id="footer">
            <p>designed by <a href="https://www.sozialleistungen.info/">sozialleistungen.info</a></p>
          </div>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
