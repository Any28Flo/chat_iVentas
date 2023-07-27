import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';
interface IUser extends Document {
    username: string;
    email: string;
    phone: string;
    password: string;
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
userSchema.pre<IUser>('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(user.password, salt);

        user.password = hashedPassword;
        return next();
    } catch (error) {
        /**
         * TODO:
         * - handle errors
         */
    }
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;