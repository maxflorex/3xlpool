import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
// import { options } from 'swaggerOptions'

const app = express()

// CORS
app.use(cors())

// SHOW CONSOLE
app.use(morgan("dev"))

// APP INIT
app.use(express.json())
