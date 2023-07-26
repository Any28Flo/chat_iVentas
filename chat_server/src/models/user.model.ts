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

    // If the password field is not modified, move on to the next middleware
    if (!user.isModified('password')) return next();

    try {
        // Generate a salt to use for hashing
        const salt = await bcrypt.genSalt(10);

        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(user.password, salt);

        // Replace the plain password with the hashed password
        user.password = hashedPassword;
        return next();
    } catch (error) {
        // return next(error);
    }
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;