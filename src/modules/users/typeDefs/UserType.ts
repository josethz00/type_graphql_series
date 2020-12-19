import { Field, ID, ObjectType } from "type-graphql";
import { ObjectId } from 'mongodb';

@ObjectType()
class UserType {

    @Field(() => ID)
    public readonly _id: ObjectId;

    @Field(() => String)
    public username: string;

    @Field(() => String)
    public email: string;

    public password: string;

    @Field(() => String)
    public image_url: string;

    @Field(() => Date)
    createdAt: Date;

}

export { UserType };