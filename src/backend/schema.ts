import * as path from "path";

import * as NexusSchema from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { applyMiddleware } from "graphql-middleware";

import * as Types from "./types";
import * as Mutations from "./mutations";
import * as Queries from "./queries";
import { permissions } from "./permissions";

const schema = NexusSchema.makeSchema({
  types: [Types, Mutations, Queries],
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    typegen: path.join(
      __dirname,
      "../../node_modules/@types/nexus-typegen/index.d.ts"
    ),
    schema: path.join(__dirname, "../schema.graphql"),
  },
  contextType: {
    module: require.resolve("./context"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: require.resolve(".prisma/client/index.d.ts"),
        alias: "prisma",
      },
    ],
  },
});

export default applyMiddleware(schema, permissions);
