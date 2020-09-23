export const typeDefs = `
type Query {
  getContent: Content!
}

type Content {
  homePage: HomePage!
}

type HomePage {
  header: String!,
  subHeader: String!,
  body: String!
}
`;
