import { buildSchema } from 'type-graphql';
import path from 'path';


export const createSchema = async () => {

    return await buildSchema({
        resolvers: [path.join(__dirname, '..', 'modules', '**', 'resolver.ts')]
    });

}