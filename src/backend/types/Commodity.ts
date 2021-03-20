import { objectType } from "nexus";

export const Commodity = objectType({
  name: "Commodity",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.price();
    t.model.photoUrl();
    t.model.description();
    t.model.note();
    t.model.createdAt();
    t.model.createdBy();
  },
});
