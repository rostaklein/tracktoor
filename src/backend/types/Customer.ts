import { objectType } from "nexus";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.personalIdentifier();
    t.model.fbProfileUrl();
    t.model.note();
    t.model.createdAt();
    t.model.createdBy();
  },
});
