"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const meditionRoute_1 = __importDefault(require("./routes/meditionRoute"));
const moodRoute_1 = __importDefault(require("./routes/moodRoute"));
const followUp_1 = __importDefault(require("./routes/followUp"));
const connect_1 = __importDefault(require("./db/connect"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, connect_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173', // Your frontend origin
    methods: 'GET,POST', // Allowed methods
    credentials: true, // If you need to send cookies or authentication
}));
app.use(express_1.default.json());
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.send("Hello from Express server");
});
app.use('/api/users', userRoute_1.default);
app.use('/meditations', meditionRoute_1.default);
app.use('/mood', moodRoute_1.default);
app.use('/followup', followUp_1.default);
app.use('/api/meditation', meditionRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
