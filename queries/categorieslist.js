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
        }
      }
  }`;
  export default CATEGORY_LIST;