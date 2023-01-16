"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = 5000;
const app = (0, express_1.default)();
// const corsOptions = {
//     origin: 'https://surfiles.vercel.app/',
//     optionsSuccessStatus: 200
// }
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(function(req, res, next) {
//     const origins: string[] = [
//         'http://localhost:3000',
//         'https://surfiles.vercel.app/'
//     ];
//     for(let i = 0; i < origins.length; i++){
//         let origin = origins[i];
//         if(req.headers.origin && req.headers.origin.indexOf(origin) > -1){
//             res.header('Access-Control-Allow-Origin', req.headers.origin);
//         }
//     }
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })
//cors(corsOptions),
app.post('/', (req, res) => {
    console.log(req.body);
});
app.listen(PORT);
