import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    books: [Book]
  }

  type Query {
    book: Book
    books: [Book]
    author: Author
    authors: [Author]
  }

  type Mutation {
    create(id: ID!, title: String, author: ID): Book
    delete(id: ID!): Boolean
    update(id: ID!, title: String, author: ID): Book
  }
`;
