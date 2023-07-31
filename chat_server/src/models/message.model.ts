import { Schema, model } from 'mongoose';
import UserModel from './user.model';
import ChanelModel from './chanel.model';

const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: UserModel },
    receiver: { type: Schema.Types.ObjectId, ref: UserModel },
    content: { type: String, required: true, trim: true },
    chanel: { type: Schema.Types.ObjectId, ref: ChanelModel },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },

})


const MessageModel = model('Message', messageSchema);

export default MessageModel;