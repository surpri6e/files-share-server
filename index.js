"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const storage_1 = require("firebase/storage");
const app_1 = require("firebase/app");
const cfg_1 = require("./cfg");
(0, app_1.initializeApp)(cfg_1.firebaseConfig);
const storage = (0, storage_1.getStorage)();
const PORT = 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/', (req) => {
    setTimeout(() => {
        const listRef = (0, storage_1.ref)(storage, `${String(req.body.id)}/`);
        (0, storage_1.listAll)(listRef)
            .then((res) => {
            res.items.forEach((itemRef) => {
                var _a;
                (0, storage_1.deleteObject)((0, storage_1.ref)(storage, `${(_a = itemRef === null || itemRef === void 0 ? void 0 : itemRef._location) === null || _a === void 0 ? void 0 : _a.path_}`))
                    .then(() => {
                    console.log('its okey!');
                })
                    .catch((error) => {
                    console.log(error);
                });
            });
        })
            .catch((error) => {
            console.log(error);
        });
    }, 10000 * 6 * 3);
});
app.listen(PORT);
