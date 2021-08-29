import express from 'express'
import './config/mongoose'

const app = express()

app.set('port', 3000)

const main = async () => {
	 await app.listen(app.get('port'))
	console.log('Listen on port', 3000)
}

main()
