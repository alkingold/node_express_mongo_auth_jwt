import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!)
    console.log(`Connected to MongoDB: ${conn.connection.host}`)
  } catch (error) {
    console.log('Failed to connect to MongoDB', error)
    process.exit(1)
  }
}

export default connectDB
