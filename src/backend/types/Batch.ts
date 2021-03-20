import { objectType } from "nexus";

export const Batch = objectType({
  name: "Batch",
  definition(t) {
    t.model.id();
    t.model.identifier();
    t.model.name();
    t.model.note();
    t.model.createdBy();
  },
});
