import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Quote from '../components/quote';

const IndexPage = ({ data: { allQuotes: { edges } } }) => (
  <Layout>
    <SEO title="Browse Quotes" keywords={[`arc`, `irc`, `quotes`]} />

    <h2>Browse Quotes</h2>

    <ul className="quote-list">
      {edges.map(({ node: quote }) => <Quote key={quote.id} {...quote} />)}
    </ul>
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
