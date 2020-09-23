const { GraphQLServer } = require('graphql-yoga');
import { typeDefs } from './index.typeDef';
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

server.start(serverOptions).then(({port}: {port: string}) => {
    console.log(`🚀 Server ready at ${port}`);
});
