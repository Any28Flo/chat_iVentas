import { Schema, model } from 'mongoose';

interface IChanel extends Document {
    name: string;
}
const chanelSchema = new Schema({
    name: { type: String, required: true, trim: true, unique: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'MessageModel' }],
    owner: { type: Schema.Types.ObjectId, ref: 'UserModel' },
    members: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }]
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },

})


const ChanelModel = model<IChanel>('Chanel', chanelSchema);

export default ChanelModel;