import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'userSchema' },
    content: { type: String, required: true, trim: true },
    chanel: { type: Schema.Types.ObjectId, ref: 'chanelSchema' },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },

})


const MessageModel = model('Message', messageSchema);

export default MessageModel;