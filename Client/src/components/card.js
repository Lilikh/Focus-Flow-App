"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// components/Card.tsx
var react_1 = require("react");
var Card = function (_a) {
    var title = _a.title, description = _a.description, onClick = _a.onClick;
    return (<div className="p-4 bg-blue-200 rounded-lg shadow-md cursor-pointer hover:bg-blue-300 transition" onClick={onClick}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>);
};
exports.default = Card;
