import gql from "graphql-tag";

const PRODUCTS_LIST = gql`query  Product_Category($id: ID!){

  productCategory(id: $id) {
    id
    name
    products {
      nodes {
        ... on SimpleProduct {
          id
          name
          salePrice
          regularPrice
          image {
            slug
            sourceUrl
            id
          }
        }
      }
    }
  }
}`;

export default PRODUCTS_LIST;
