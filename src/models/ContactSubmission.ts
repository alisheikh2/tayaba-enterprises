import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContactSubmission extends Document {
  formType: 'contact' | 'quote' | 'career';
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: 'new' | 'read' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

const ContactSubmissionSchema: Schema = new Schema(
  {
    formType: {
      type: String,
      enum: ['contact', 'quote', 'career'],
      required: true,
      default: 'contact',
    },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ['new', 'read', 'archived'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

const ContactSubmission: Model<IContactSubmission> =
  mongoose.models.ContactSubmission ||
  mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);

export default ContactSubmission;
