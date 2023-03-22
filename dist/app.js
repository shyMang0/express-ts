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
const dotenv_1 = __importDefault(require("dotenv"));
const dbPg_1 = require("./config/dbPg");
const index_route_1 = __importDefault(require("./routes/index.route"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(index_route_1.default);
startServer();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, dbPg_1.connect)();
            const port = process.env.PORT || 3000;
            app.listen(port, () => {
                console.log(`Server listening on port ${port}`);
            });
        }
        catch (err) {
            console.error(err);
            yield (0, dbPg_1.disconnect)();
        }
    });
}
