export * from "./me";

import { queryType } from "nexus";

export const queries = queryType({
  definition(t) {
    // CUSTOMERS
    t.crud.customer();
    t.crud.customers();

    // COMMODITIES
    t.crud.commodity();
    t.crud.commodities();

    // ORDERS
    t.crud.order();
    t.crud.orders();

    // BATCHES
    t.crud.batch();
    t.crud.batches();
  },
});
