import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Quote from '../components/quote';

const IndexPage = ({ data: { allQuotes: { edges } } }) => (
  <Layout>
    <SEO title="Home" keywords={[`arc`, `irc`, `quotes`]} />

    <h2>View Quote</h2>

    <ul className="quote-list">
      {edges.map(({ node: quote }) => <Quote key={quote.id} {...quote} />)}
    </ul>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

export const query = graphql`
{
  allQuotes {
    edges {
      node {
        id
        body
        rating
        votes
        submitted
        score
        tags
      }
    }
  }
}
`;
