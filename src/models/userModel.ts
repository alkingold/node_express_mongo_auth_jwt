import {
  Schema,
  model,
  models,
} from 'mongoose'

import { IUser } from '@/types'

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: [true, 'Email must be unique'],
    minLength: [5, 'Email must have at least 5 characters'],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minLength: [5, 'Password must have at least 5 characters'],
    select: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: Number,
    select: false,
  },
  verificationCodeValidation: {
    type: String,
    select: false,
  },
  forgotPasswordCodeValidation: {
    type: Number,
    select: false,
  },
}, {
  timestamps: true,
})

export default models.User || model<IUser>('User', userSchema)
