"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 8000;
const app = (0, express_1.default)();
const posts_route_1 = __importDefault(require("./routes/posts.route"));
app.get('/', (req, res) => {
    res.send('HELLO FROM EXPRESS + TS!!!!');
});
app.get('/hi', (req, res) => {
    res.send('BYEEEsssasdf!!');
});
app.use('/posts', posts_route_1.default);
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
