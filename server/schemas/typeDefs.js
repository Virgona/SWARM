const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Asset {
    _id: ID
    number: String
    date: Float
    length: Float
    address: String
    area: String
    priority: String
    status: String
  }

  type Department {
    _id: ID
    name: String
  }

  type Issue {
    _id: ID
    name: String
  }

  type WorkOrder {
    _id: ID
    contractor: String
    date: String
    asset (asset:ID, number: String): Asset
    cctvFootage: String
    reviewed: String
    assesed: String
    acessibility: String
    reviewer: String
    cctvQuality: String
    cctvViewed: String
    additionalNotes: String

  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    assets: [Asset]
    asset(id: ID!, name: String): Asset
    workorders: [WorkOrder]
    workorder(id: ID!): WorkOrder
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addAsset(_id: ID, number: String, date: Float, length: Float, address: String, area: String, priority: String, status: String): Asset
    addWorkOrder(contractor: String!, asset: String!, cctvFootage: String!, reviewed: String!, assesed: String!, acessibility: String!, reviewer: String!, cctvQuality: String!, cctvViewed: String!, additionalNotes: String!): WorkOrder
    updateWorkOrder(contractor: String, asset: String, cctvFootage: String, reviewed: String, assesed: String, acessibility: String, reviewer: String, cctvQuality: String, cctvViewed: String, additionalNotes: String): WorkOrder
  }
`;

module.exports = typeDefs;
