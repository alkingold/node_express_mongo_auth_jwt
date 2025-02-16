import {
	Schema,
	model,
	models,
} from 'mongoose'

import { IPost } from '@/types'

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
})

export default models.Post || model<IPost>('Post', postSchema)
