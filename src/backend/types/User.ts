import { objectType } from "nexus";

export const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.string("token");
    t.field("user", { type: "User" });
  },
});

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.username();
    t.model.name();
  },
});
