/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

async function createQuotePage ({ graphql, createPage }) {
  const browsePage = path.resolve('src/browsePage.js');

  const result = await graphql(`{
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
  }`);

  if (result.errors) {
    /* eslint no-console: "off" */
    console.log(result.errors);
    throw result.errors;
  }
  result.data.allQuotes.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.id}`,
      component: browsePage,
      context: {
        quotes: [edge.node]
      }
    });
  });
}

async function createTagPage ({ graphql, createPage }) {
  const browsePage = path.resolve('src/browsePage.js');

  const result = await graphql(`{
    allQuotes {
      group(field: tags) {
        fieldValue
        totalCount
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
  }`);

  if (result.errors) {
    /* eslint no-console: "off" */
    console.log(result.errors);
    throw result.errors;
  }
  result.data.allQuotes.group.forEach(({ fieldValue, edges }) => {
    createPage({
      path: `/tag/${fieldValue}`,
      component: browsePage,
      context: {
        tagName: fieldValue,
        quotes: edges.map(edge => edge.node)
      }
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([
    createQuotePage({ graphql, createPage }),
    createTagPage({ graphql, createPage })
  ]);
};
