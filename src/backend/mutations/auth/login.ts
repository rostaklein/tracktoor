import { stringArg, mutationField, nonNull } from "nexus";
import { ApolloError } from "apollo-server-micro";
import { compare } from "bcrypt";

import { issueToken } from "../../auth";

export const Login = mutationField("login", {
  type: "AuthPayload",
  args: {
    email: nonNull(stringArg()),
    password: nonNull(stringArg()),
  },
  resolve: async (_, { email, password }, ctx) => {
    const user = await ctx.prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new ApolloError("User not found", "USER_NOT_FOUND");
    }

    // const isPasswordValid = await compare(password, "whatever");

    // if (!isPasswordValid) {
    //   throw new ApolloError("Incorrect password", "INVALID_PASSWORD");
    // }

    const token = issueToken({ email: user.email, id: user.id });
    return { user, token };
  },
});
