const { GraphQLServer } = require('graphql-yoga');
import { typeDefs } from './index.type';
import { content } from './model';

const resolvers = {
    Query: {
        getContent: () => content
    }
};

const serverOptions = {
    port: process.env.PORT || 4000,
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(serverOptions).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
