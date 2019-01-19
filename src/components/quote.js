import React from 'react';
import { Link } from 'gatsby';

import './quotes.css';

const Quote = ({ id, rating, votes, submitted, body, tags }) => (
  <li id={`quote-${id}`} className="quote  ">
    <div className="quote-container">
      <h3 className="quote-header" id="quote-header-1">
        <span id={`quote-live-vote-result-${id}`} className="quote-live-vote-result"></span>
        <Link to={`/${id}`} title="Permanent Link to Quote" className="quote-permalink"><span className="quote-id">#{id}</span></Link>
        <span id={`quote-rating-${id}`} className="quote-rating" title="Quote Rating">{rating}</span>
        <span className="quote-vote-count" title="Quote Vote Count">/<span id="quote-vote-count-1">{votes}</span></span>
        <span className="quote-date" title="Quote Submission Date">{submitted}</span>
      </h3>
      <blockquote className="quote-body">{body}</blockquote>

      <div className="quote-footer">
        <div className="quote-tags">
          <p>
            <em className="quote-tags-title">Tags:</em>
            <ul style={{ display: 'inline', listStyleType: 'none', marginRight: '1em' }}>
              {tags.map(tag => (
                <li key={tag} style={{ display: 'inline', listStyleType: 'none', marginRight: '1em' }}>
                  <Link to={`/tag/${tag}`} title={`View Quotes Tagged ${tag}`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  </li>
);

export default Quote;
