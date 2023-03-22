import express from 'express'

import { getPosts } from '../controllers/posts.controller'

const router = express.Router()
// import auth from '../middleware/auth.js'

router.get('/', getPosts)
// router.get('/', (req, res) => {
// 	res.json({ message: 'get root' })
// })

router.post('/', (req, res) => {
	res.json({ message: 'post root' })
})
// router.get('/creator', getPostsByCreator)

export default router
