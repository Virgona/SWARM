const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    issues: [String]

  }

  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(username: String): User
    assets: [Asset]
    asset(id: ID!, name: String): Asset
    workorders: [WorkOrder]
    workorder(id: ID!): WorkOrder
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
    addAsset(_id: ID, number: String, date: Float, length: Float, address: String, area: String, priority: String, status: String): Asset
    addWorkOrder(contractor: String!, asset: String!, cctvFootage: String!, reviewed: String!, assesed: String!, acessibility: String!, reviewer: String!, cctvQuality: String!, cctvViewed: String!, additionalNotes: String!): WorkOrder
    updateWorkOrder(contractor: String, asset: String, cctvFootage: String, reviewed: String, assesed: String, acessibility: String, reviewer: String, cctvQuality: String, cctvViewed: String, additionalNotes: String): WorkOrder
  }
`;

module.exports = typeDefs;
