"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { Pool } from 'pg'
const dbPg_1 = require("./config/dbPg");
const port = 8000;
const app = (0, express_1.default)();
const index_route_1 = __importDefault(require("./routes/index.route"));
// app.get('/', (req: Request, res: Response) => {
// 	res.send('HELLO FROM EXPRESS + TS!!!!')
// })
// app.get('/hi', (req, res) => {
// 	res.send('BYEEEsssasdf!!')
// })
// app.use('/posts', postRoutes)
app.use(index_route_1.default);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, dbPg_1.connect)();
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
                console.log('Server listening on port 3000');
            });
        }
        catch (err) {
            console.error(err);
            yield (0, dbPg_1.disconnect)();
        }
    });
}
startServer();
