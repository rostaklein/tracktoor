import { stringArg, mutationField, nonNull } from "nexus";
import { ApolloError } from "apollo-server-micro";
import { compare } from "bcryptjs";

import { issueToken } from "../../auth";

export const Login = mutationField("login", {
  type: "AuthPayload",
  args: {
    username: nonNull(stringArg()),
    password: nonNull(stringArg()),
  },
  resolve: async (_, { username, password }, ctx) => {
    const user = await ctx.prisma.user.findFirst({ where: { username } });

    if (!user) {
      throw new ApolloError("User not found", "USER_NOT_FOUND");
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new ApolloError("Incorrect password", "INVALID_PASSWORD");
    }

    const token = issueToken({ username: user.username, id: user.id });
    return { user, token };
  },
});
