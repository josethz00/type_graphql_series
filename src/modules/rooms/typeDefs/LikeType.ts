import { ObjectId } from 'mongodb';
import { Field, ID, ObjectType } from 'type-graphql';


@ObjectType()
class LikeType {

    @Field(() => ID)
    public readonly _id : ObjectId;

    @Field(() => String!)
    public body: string;

    @Field(() => String!)
    public username: string;

    @Field(() => Date!)
    public createdAt: Date

}

export { LikeType };