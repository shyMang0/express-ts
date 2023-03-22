import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { connect, disconnect } from './config/dbPg'
import indexRoute from './routes/index.route'

const app: Express = express()
dotenv.config()

app.use(indexRoute)

startServer()

async function startServer() {
	try {
		await connect()

		const port = process.env.PORT || 3000
		app.listen(port, () => {
			console.log(`Server listening on port ${port}`)
		})
	} catch (err) {
		console.error(err)
		await disconnect()
	}
}
