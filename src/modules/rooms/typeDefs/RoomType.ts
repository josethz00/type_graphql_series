import { Field, ID, Int, ObjectType } from "type-graphql";
import { ObjectId } from 'mongodb';
import { MessageType } from "./MessageType";
import { LikeType } from "./LikeType";


@ObjectType()
class RoomType {

    @Field(() => ID)
    public readonly _id: ObjectId;

    @Field(() => String!)
    public title: string;

    @Field(() => String!)
    public body: string;

    @Field(() => String!)
    public username: string;

    @Field()
    public image_url: string;

    @Field(() => [MessageType!])
    public messsages: MessageType[];

    @Field(() => [LikeType!])
    public likes: LikeType[];

    @Field(() => Int)
    public likesCounter: number;

    @Field(() => Date)
    public createdAt: Date;

    @Field(() => ID)
    public user: ObjectId;
    
}

export { RoomType };