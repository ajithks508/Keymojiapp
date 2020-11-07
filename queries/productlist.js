import gql from "graphql-tag";

const PRODUCTS_LIST = gql`query {

	products {
    nodes {
      ... on SimpleProduct {
        id
        name
        image {
          id
          sourceUrl
        }
        regularPrice
        salePrice
      }
      productCategories(first: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
}`;

export default PRODUCTS_LIST;
