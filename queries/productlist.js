import gql from "graphql-tag";

const PRODUCTS_LIST = gql`query  productCategory($id : ID!){

  productCategory(id: $id) {
    id
    products {
      nodes {
        id
        name
        image {
          slug
          sourceUrl
          id
        }
      }
    }
  }
}`;

export default PRODUCTS_LIST;
