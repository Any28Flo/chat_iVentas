import { Schema, model, Types, Model } from 'mongoose';
import UserModel from './user.model';

const chanelSchema = new Schema({
    name: { type: String, required: true, trim: true, unique: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'MessageModel' }],
    owner: { type: Schema.Types.ObjectId, ref: 'UserModel' },
    member: { type: Schema.Types.ObjectId, ref: UserModel }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },

})


const ChanelModel = model('Chanel', chanelSchema);

export default ChanelModel;