import { Client } from 'pg'

const client = new Client({
	host: '192.168.1.3',
	user: 'postgres',
	port: 5432,
	password: 'password',
	database: 'dbTest'
})

async function connect() {
  try {
    console.log('Connected to PostgreSQL database')
  } catch (error) {
    console.log('Error Connecting to PostgreSQL database')
  }
	await client.connect()
}

async function disconnect() {
	await client.end()
	console.log('Disconnected from PostgreSQL database')
}


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
export { client, connect, disconnect }
