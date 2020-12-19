import { Field, ID, ObjectType } from "type-graphql";
import { ObjectId } from 'mongodb';


@ObjectType()
class MessageType {

    @Field(() => ID!)
    public _id: ObjectId;

    @Field(() => String!)
    public body: string;

    @Field(() => String!)
    public username: string;

    @Field(() => Date)
    public createdAt: Date;

}

export { MessageType };