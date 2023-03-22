import express, { Express, Request, Response } from 'express'
const port = 8000

const app: Express = express()

import postRoutes from './routes/posts.route'

app.get('/', (req: Request, res: Response) => {
	res.send('HELLO FROM EXPRESS + TS!!!!')
})

app.get('/hi', (req, res) => {
	res.send('BYEEEsssasdf!!')
})

app.use('/posts', postRoutes)

app.listen(port, () => {
	console.log(`now listening on port ${port}`)
})
