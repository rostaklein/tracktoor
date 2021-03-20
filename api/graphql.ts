import { ApolloServer } from "apollo-server-micro";

import schema from "../src/backend/schema";
import { createContext } from "../src/backend/context";

export default new ApolloServer({
  schema,
  context: createContext,
  introspection: true,
  playground: true,
}).createHandler({
  path: "/api/graphql",
});
