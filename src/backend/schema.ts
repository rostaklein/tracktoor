import * as path from "path";

import * as NexusSchema from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";

import * as Types from "./types";
import * as Mutations from "./mutations";
import * as Queries from "./queries";

export default NexusSchema.makeSchema({
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
