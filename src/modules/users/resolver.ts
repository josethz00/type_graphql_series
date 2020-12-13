import { Query, Resolver } from 'type-graphql';


@Resolver()
class UserResolver {

    @Query(() => String)
    teste () {

        return 'teste';

    }

}


export { UserResolver };