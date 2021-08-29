import express from 'express'
import cors from 'cors'
import productRoutes from './routes/products.routes'
import { PORT } from './config'
import './config/mongoose'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1/products', productRoutes)

const main = async () => {
	 await app.listen(PORT)
	console.log('Listen on port', PORT)
}

main()
