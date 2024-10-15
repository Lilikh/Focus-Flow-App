"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser")); // For parsing request bodies
const userRoute_1 = __importDefault(require("./routes/userRoute")); // Import the user routes
const app = (0, express_1.default)();
// Middleware to parse JSON requests
app.use(body_parser_1.default.json());
// Use the routes defined in userRoute
app.use('/api', userRoute_1.default);
const PORT = 5000; // Port where the server will run
// Export app as default export
exports.default = app;
