import { Types } from 'mongoose'

export interface IPost {
  title: string;
  description: string;
  userId: Types.ObjectId | string;
}
