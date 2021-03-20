import { mutationType } from "nexus";

import { createdBy } from "./computedInputs";

export const mutations = mutationType({
  definition(t) {
    // CUSTOMERS
    t.crud.createOneCustomer({
      computedInputs: {
        createdBy,
      },
    });
    t.crud.updateOneCustomer();
    t.crud.deleteOneCustomer();

    // COMMODITIES
    t.crud.createOneCommodity({
      computedInputs: {
        createdBy,
      },
    });
    t.crud.updateOneCommodity();
    t.crud.deleteOneCommodity();

    // ORDERS
    t.crud.createOneOrder({
      computedInputs: {
        createdBy,
      },
    });
    t.crud.updateOneOrder();
    t.crud.deleteOneOrder();

    // BATCHES
    t.crud.createOneBatch({
      computedInputs: {
        createdBy,
      },
    });
    t.crud.updateOneBatch();
    t.crud.deleteOneBatch();
  },
});

export { Login } from "./auth/login";
