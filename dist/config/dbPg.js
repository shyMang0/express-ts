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
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = exports.client = void 0;
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: '192.168.1.3',
    user: 'postgres',
    port: 5432,
    password: 'password',
    database: 'dbTest'
});
exports.client = client;
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('Connected to PostgreSQL database');
        }
        catch (error) {
            console.log('Error Connecting to PostgreSQL database');
        }
        yield client.connect();
    });
}
exports.connect = connect;
function disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.end();
        console.log('Disconnected from PostgreSQL database');
    });
}
exports.disconnect = disconnect;
