import express, { Express, Request, Response } from 'express'
// import { Pool } from 'pg'
import { client, connect, disconnect } from './config/dbPg'

const port = 8000

const app: Express = express()
import indexRoute from './routes/index.route'

// app.get('/', (req: Request, res: Response) => {
// 	res.send('HELLO FROM EXPRESS + TS!!!!')
// })

// app.get('/hi', (req, res) => {
// 	res.send('BYEEEsssasdf!!')
// })

// app.use('/posts', postRoutes)
app.use(indexRoute)

async function startServer() {
	try {
		await connect()

		// app.get('/users', async (req: Request, res: Response) => {
		// 	try {
		// 		const query = 'SELECT * FROM users'
		// 		const result = await client.query(query)
		// 		res.json(result.rows)
		// 	} catch (err) {
		// 		console.error(err)
		// 		res.status(500).json({ error: 'Internal server error' })
		// 	}
		// })

		app.listen(3000, () => {
			console.log('Server listening on port 3000')
		})
	} catch (err) {
		console.error(err)
		await disconnect()
	}
}

startServer()
