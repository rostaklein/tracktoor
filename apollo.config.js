module.exports = {
  client: {
    includes: ["./src/client/**/*.ts", "./src/client/**/*.tsx"],
    service: {
      name: "gql",
      url: "http://localhost:3000/api/graphql",
    },
  },
};
