"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var logInModel_1 = require("./logInModel"); // Import the modal
var Header = function () {
    var _a = (0, react_1.useState)(false), showModal = _a[0], setShowModal = _a[1];
    return (<header className="flex justify-between items-center p-4 bg-blue-300 text-white shadow-md">
      <h1 className="text-2xl font-bold">Focus & Flow</h1>
      <div className="cursor-pointer flex items-center" onClick={function () { return setShowModal(true); }} // Show modal on click
    >
        <fa_1.FaUserCircle size={32}/>
        <span className="ml-2">Login</span>
      </div>

      {showModal && <logInModel_1.default onClose={function () { return setShowModal(false); }}/>} {/* Show modal */}
    </header>);
};
exports.default = Header;
