const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Score {
    id: ID!
    score: Int
    playerId: Int
    dateCreated: Int
  }

  type Player {
    id: ID!
    name: String
    scores: [Score]
  }

  type Query {
    players: [Player]
  }
`;

module.exports = typeDefs;
