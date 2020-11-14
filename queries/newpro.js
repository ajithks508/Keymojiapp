import gql from "graphql-tag";

const PRODUCTS_NEW = gql`query {
    products(first: 8) {
        nodes {
          id
          description
          name
           slug
          image {
            id
            sourceUrl
            slug
          }
          ... on SimpleProduct {
            regularPrice
            salePrice
          }
        }
      }
    }`;
    export default PRODUCTS_NEW;