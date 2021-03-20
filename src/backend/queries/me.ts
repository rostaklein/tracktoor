import { queryField } from "nexus";

export const Me = queryField("me", {
  type: "User",
  resolve: async (_, __, ctx) => {
    const userContext = await ctx.user.getCurrentUser();

    const user = await ctx.prisma.user.findFirst({
      where: { id: userContext.id },
    });

    return user;
  },
});
