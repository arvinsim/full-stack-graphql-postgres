const { ApolloServer } = require("apollo-server");
const { Pool } = require("pg");
const typeDefs = require("./schema");

const pool = new Pool({
  user: "docker",
  host: "localhost",
  database: "docker",
  password: "docker",
  port: 5432,
});

const players = [
  {
    id: 1,
    name: "John Doe",
    scores: [
      {
        id: 1,
        score: 10,
        playerId: 1,
        dateCreated: 1612965828,
      },
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    scores: [],
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    players: () => players,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server
  .listen({
    port: 1234,
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
