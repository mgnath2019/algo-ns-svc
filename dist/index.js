"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const alpaca_trade_api_1 = __importDefault(require("@alpacahq/alpaca-trade-api"));
const alpaca = new alpaca_trade_api_1.default({
    keyId: process.env.keyId,
    secretKey: process.env.secretKey,
    paper: true,
});
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    alpaca.getAccount().then((account) => {
        res.send(account);
    });
    // res.send('Express + TypeScript Server is running');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
