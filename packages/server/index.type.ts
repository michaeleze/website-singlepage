export const typeDefs = `
type Query {
  getTaskList: Content!
}

type Content {
  homePage: {
    header: string!,
    subHeader: string!,
    body: string!
  }
}
`;
