import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import questionRoutes from './routes/questions.js'
import { options } from './swaggerOptions.js'
const specs = swaggerJSDoc(options)
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const app = express()

// CORS
app.use(cors())

// SHOW CONSOLE
app.use(morgan("dev"))

// APP INIT
app.use(express.json())

// INIT ROUTES
app.use(questionRoutes)

// CREATE SWAGGER ROUTE AND PASS OPTIONS
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app