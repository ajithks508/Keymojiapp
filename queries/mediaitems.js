import gql from "graphql-tag";

const MEDIA_LIST = gql`query {
  products {
    nodes {
      image {
        id
        slug
        sourceUrl
      }
    }
  }
}`;
export default MEDIA_LIST;