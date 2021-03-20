import { Context } from "nexus-plugin-prisma/typegen";

export const createdBy = async ({ ctx }: { ctx: Context }) => {
  const currentUser = await ctx.user.getCurrentUser();

  return {
    connect: {
      id: currentUser.id,
    },
  };
};
