"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_route_1 = __importDefault(require("./posts.route"));
// import { getPosts } from '../controllers/posts.controller'
const router = express_1.default.Router();
// import auth from '../middleware/auth.js'
router.use('/posts', posts_route_1.default);
router.get('/', (req, res) => {
    res.json({ message: 'get index' });
});
router.post('/', (req, res) => {
    res.json({ message: 'post index' });
});
/*========== CATCH INVALID ROUTES ========== */
router.all('*', (req, res) => {
    res.status(404).json({ message: 'invalid route' });
});
exports.default = router;
