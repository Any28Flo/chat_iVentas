import { Schema, model } from 'mongoose';

interface IChanel extends Document {
    name: string;
}
const chanelSchema = new Schema({
    // owner: { type: Schema.Types.ObjectId, ref: 'userSchema' },
    name: { type: String, required: true, trim: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'MessageModel' }],
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },

})


const ChanelModel = model<IChanel>('Chanel', chanelSchema);

export default ChanelModel;