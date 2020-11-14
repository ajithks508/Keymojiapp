import gql from "graphql-tag";

const SINGLE_PRODUCTS = gql`query single_product($id: ID!){

  product(id:$id) {
    sku
    slug
    shortDescription
    productId
    name
    id
    averageRating
    description
    image {
      id
      sourceUrl
      slug
      sizes(size: LARGE)
      title
    }
    galleryImages {
      nodes {
        id
        sourceUrl
        slug
      }
    }
    ... on SimpleProduct {
      regularPrice
      salePrice
      name
      id
      productCategories {
        nodes {
          id
          name
          products {
            nodes {
              id
              slug
              ... on SimpleProduct {
                id
                name
                sku
                slug
                salePrice
                regularPrice
                image {
                  id
                  slug
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export default SINGLE_PRODUCTS;
