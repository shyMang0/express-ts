import { Request, Response } from 'express'
// import mongoose from 'mongoose';

// import PostMessage from '../models/postMessage.js';

// const router = express.Router();

export const getPosts = async (req: Request, res: Response) => {
	// const { page } = req.query;
	const allQuery = req.query

	res.json({ message: 'from controller getPost', par: allQuery })
	// try {
	//     const LIMIT = 8;
	//     const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

	//     const total = await PostMessage.countDocuments({});
	//     const posts = await PostMessage.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

	//     res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
	// } catch (error) {
	//     res.status(404).json({ message: error.message });
	// }
}

// export const getPost = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const post = await PostMessage.findById(id);

//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const createPost = async (req, res) => {
//     const post = req.body;

//     const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

//     try {
//         await newPostMessage.save();

//         res.status(201).json(newPostMessage);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

// export default router
