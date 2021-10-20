const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = {
  Query: {
    books: () => [],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
