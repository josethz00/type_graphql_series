import mongoose, { Document } from 'mongoose';
import { ObjectId } from 'mongodb';


interface IRoom extends Document {
    title: string;
    body: string;
    username: string;
    image_url: string;
    messages: {
        body: string;
        username: string;
        createdAt?: string;
    }[];
    likes: {
        username: string;
        createdAt?: Date;
    }[];
    user: ObjectId;
    createdAt: Date;
}

const RoomSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    messages: [{
        body: String,
        username: String,
        createdAt: {
            type: Date,
            default: new Date().getTime()
        }
    }],
    likes: [{
        username: String,
        createdAt: {
            type: Date,
            default: new Date().getTime()
        }
    }],
    user: {
        type: ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: new Date().getTime()
    }

});

export const Room = mongoose.model<IRoom>('Room', RoomSchema, 'Room');
export { IRoom };