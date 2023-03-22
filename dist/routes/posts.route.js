"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_controller_1 = require("../controllers/posts.controller");
const router = express_1.default.Router();
// import auth from '../middleware/auth.js'
router.get('/', posts_controller_1.getPosts);
// router.get('/', (req, res) => {
// 	res.json({ message: 'get root' })
// })
router.post('/', (req, res) => {
    res.json({ message: 'post root' });
});
// router.get('/creator', getPostsByCreator)
exports.default = router;
