import express from 'express'
import postRoute from './posts.route'

// import { getPosts } from '../controllers/posts.controller'

const router = express.Router()
// import auth from '../middleware/auth.js'

router.use('/posts', postRoute)

router.get('/', (req, res) => {
	res.json({ message: 'get index' })
})

router.post('/', (req, res) => {
	res.json({ message: 'post index' })
})
// router.get('/creator', getPostsByCreator)

export default router