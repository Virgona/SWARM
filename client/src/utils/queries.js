import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;
export const QUERY_ASSET = gql`
  query getAsset($asset: ID) {
    asset {
      number
      date
      length
      address
      area
      priority
      status
    }
  }
`;

export const QUERY_ALL_Assets = gql`
query getAssets {
    assets {
      number
      date
      length
      address
      area
      priority
      status
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
    }
  }
`;
