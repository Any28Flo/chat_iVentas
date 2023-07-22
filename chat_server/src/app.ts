import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
const app = express();

// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return "Chat server test endpoint"
    },
}
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

export default app;