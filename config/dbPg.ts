import { Client } from 'pg'

const client = new Client({
	host: '192.168.1.3',
	user: 'postgres',
	port: 5432,
	password: 'password',
	database: 'dbTest'
})

async function connect() {
	await client.connect()
	console.log('Connected to PostgreSQL database')
}

async function disconnect() {
	await client.end()
	console.log('Disconnected from PostgreSQL database')
}

export { client, connect, disconnect }
