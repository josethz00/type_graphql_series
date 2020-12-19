import mongoose, { Document } from 'mongoose';


interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    image_url: string;
    createdAt?: Date;
}

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date().getTime()
    }

});

export const User = mongoose.model<IUser>('User', UserSchema, 'User');
export { IUser };