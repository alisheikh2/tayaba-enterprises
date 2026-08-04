import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IClient extends Document {
  name: string;
  logo: string;
  category: string;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

const ClientSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    logo: { type: String, required: true, trim: true },
    category: { type: String, default: 'Corporate Client', trim: true },
    displayOrder: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

// Prevent re-creating the model if it already exists
const Client: Model<IClient> =
  mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);

export default Client;
