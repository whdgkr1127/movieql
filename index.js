import { GraphQLServer }  from "graphql-yoga"
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql", // typeDefs는 모든 type들에 대한 정의이다.
    resolvers
});

server.start(() => console.log("hello"))