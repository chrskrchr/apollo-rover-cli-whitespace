const { gql } = require("apollo-server");

module.exports = gql`
  type Book {
    """
    multiline
    Book.dummy
    description
    """
    dummy: String
  }

  """
  multiline
  Query
  description
  """
  type Query {
    books: [Book]
  }
`;
