const { makeExecutableSchema } = require("@graphql-tools/schema");
const { printSchema } = require("graphql");
const schemaSdl = require("./schema");

const schema = makeExecutableSchema({
  typeDefs: schemaSdl,
});

const schemaString = printSchema(schema);

process.stdout.write(schemaString);
