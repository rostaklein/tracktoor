import { mutationType } from "nexus";

export * from "./auth/login";

export const customers = mutationType({
  definition(t) {
    t.crud.createOneCustomer({
      computedInputs: {
        createdBy: async ({ ctx }) => {
          const currentUser = await ctx.user.getCurrentUser();

          return {
            connect: {
              id: currentUser.id,
            },
          };
        },
      },
    });
    t.crud.updateOneCustomer();
    t.crud.deleteOneCustomer();
  },
});
