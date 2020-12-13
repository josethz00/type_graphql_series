import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';

import Express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { createSchema } from './utils/createSchema';


const PORT = 4000 || process.env.PORT;

const main = async () => {

    const schema = await createSchema();
    const apolloServer = new ApolloServer({
        schema
    });

    const app = Express();
    app.use(cors());

    apolloServer.applyMiddleware({ app });
    const server = createServer(app);

    server.listen(PORT, () => {
        console.log(`SERVER URL: http://localhost:${PORT}`);
    });

};

main();