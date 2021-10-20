Steps to reproduce the bug:

1. Clone this repo
2. Run `npm install`
3. Run `node printSchema.js` to print the schema using the `graphql` package's `printSchema()` function, which should produce output like the following:

```shell
$ node printSchema.js
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

```

4. Run `node server.js` to start the local `ApolloServer`
5. Run `npx -p @apollo/rover@0.3.0 rover graph introspect http://localhost:4000` to print the schema using the Rover CLI, which should produce output like the following:

```shell
$ npx -p @apollo/rover@0.3.0 rover graph introspect http://localhost:4000                          
Introspection Response: 

"""Exposes a URL that specifies the behaviour of this scalar."""
directive @specifiedBy on SCALAR
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
```

Note that the inconsistent leading whitespace is the multiline comment on the `Book.dummy` field.  
