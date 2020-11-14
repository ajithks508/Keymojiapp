import gql from "graphql-tag";
const CATEGORY_LIST = gql`query {
    productCategories {
        nodes {
          id
          name
          slug
          image {
            id
            slug
            sourceUrl
          }
          products(first: 8) {
            nodes {
              name
              id
              image {
                id
                sourceUrl
              }
            }
          }
        }
      }
  }`;
  export default CATEGORY_LIST;