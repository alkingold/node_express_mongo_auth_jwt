import dotenv from 'dotenv'
import express, { type Request, type Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import connectDB from './config/db'

dotenv.config()

const app = express()

const run = async () => {
  try {
    // connect to database
    connectDB()

    // middleware
    app.use(cors())
    app.use(helmet())
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    // routes
    app.get('/', (req: Request, res: Response) => {
      res.json({message: 'Hello from the server'})
    })

    // start the server
    app.listen(process.env.PORT, () => {
      console.log('Listening...')
    })
  } catch (error) {
    console.error('Error during startup:', error)
    process.exit(1)
  }
}

run()
