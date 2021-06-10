const { ApolloServer } = require('apollo-server');

require('dotenv').config();

const typeDefs = `
    type Query {
        totalPosts: Int!
    }


`;

const resolvers = {
    Query: {
        totalPosts: () => 42
    }
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

const PORT = process.env.PORT || 8005;

apolloServer.listen(PORT, () => {
    console.log(`--> Server ready at http://localhost:${PORT}`)
})

