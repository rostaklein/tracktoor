import { ApolloError } from "apollo-server-errors";
import { rule, shield } from "graphql-shield";

import { Context } from "../context";

const rules = {
  notProtected: rule()(() => {
    return true;
  }),
  isAuthenticatedUser: rule()(async (parent, args, context: Context) => {
    try {
      await context.user.getCurrentUser();
      return true;
    } catch (err) {
      return false;
    }
  }),
};

export const permissions = shield(
  {
    Query: {
      "*": rules.isAuthenticatedUser,
    },
    Mutation: {
      "*": rules.isAuthenticatedUser,
      login: rules.notProtected,
    },
  },
  {
    allowExternalErrors: true,
    fallbackError: new ApolloError("Not Authorized!", "NOT_AUTHORIZED"),
  }
);
