import { objectType } from "nexus";

export const Order = objectType({
  name: "Order",
  definition(t) {
    t.model.id();
    t.model.batch();
    t.model.customer();
    t.model.extraCost();
    t.model.paid();
    t.model.items();
    t.model.note();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.createdBy();
  },
});
