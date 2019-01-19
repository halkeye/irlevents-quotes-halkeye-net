import React from 'react';

import Layout from './components/layout';
import SEO from './components/seo';
import Quote from './components/quote';

const IndexPage = ({ pageContext: { quotes } }) => (
  <Layout>
    <SEO title="Browse Quotes" keywords={[`arc`, `irc`, `quotes`]} />

    <h2>Browse Quotes</h2>

    <ul className="quote-list">
      {quotes.map(quote => <Quote key={quote.id} {...quote} />)}
    </ul>
  </Layout>
);

export default IndexPage;
