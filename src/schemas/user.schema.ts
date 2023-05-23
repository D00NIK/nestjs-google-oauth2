import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  _id: mongoose.Types.ObjectId;
  __v: number;

  createdAt: Date;
  updatedAt: Date;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  displayName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
