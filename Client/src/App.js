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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var header_1 = require("./components/header");
var card_1 = require("./components/card");
var moodAnalyze_1 = require("./components/moodAnalyze"); // Ensure this import is correct
var meditionTimer_1 = require("./components/meditionTimer");
var meditionCard_1 = require("./components/meditionCard"); // Import your new MeditationCard
require("./index.css");
function App() {
    var _this = this;
    var _a = (0, react_1.useState)(''), mood = _a[0], setMood = _a[1];
    var _b = (0, react_1.useState)(false), showMoodAnalyzer = _b[0], setShowMoodAnalyzer = _b[1];
    var _c = (0, react_1.useState)(false), showMeditation = _c[0], setShowMeditation = _c[1]; // State to control meditation modal
    var _d = (0, react_1.useState)(false), showMeditationCard = _d[0], setShowMeditationCard = _d[1]; // State to control meditation card modal
    var handleMoodAnalyze = function (responseText) { return __awaiter(_this, void 0, void 0, function () {
        var res, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:4000/mood/analyze', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ response: responseText }),
                        })];
                case 1:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error("Server error: ".concat(res.status));
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    setMood(data.mood); // Update the state for mood based on AI response
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleAnalyzeMoodClick = function () {
        setShowMoodAnalyzer(true); // Show MoodAnalyzer
    };
    var handleMeditationClick = function () {
        setShowMeditation(true); // Open the meditation window on click
    };
    var handleMeditationCardClick = function () {
        setShowMeditationCard(true); // Open the meditation card on click
    };
    var closeMeditationModal = function () {
        setShowMeditation(false); // Close meditation window
    };
    var closeMeditationCardModal = function () {
        setShowMeditationCard(false); // Close meditation card modal
    };
    var startMeditation = function (type, duration) {
        console.log("Starting ".concat(type, " meditation for ").concat(duration, " minutes."));
        closeMeditationCardModal(); // Close the meditation card modal after starting meditation
        setShowMeditation(true); // Show the meditation timer modal
    };
    // New function to open Mood Analyzer from MeditationCard
    var openMoodAnalyzer = function () {
        setShowMoodAnalyzer(true); // Open the MoodAnalyzer
    };
    return (<div>
      <header_1.default />
      <div className="container">
        <header>
          <h1> An AI-Powered Mindfulness Experience</h1>
          <p className='text-white'>Utilizing AI to create tailored mindfulness experiences for enhanced well-being</p>
        </header>
        
        {/* Updated Card Layout */}
        <div className="main flex flex-row flex-wrap justify-between bg gap-4">
          <card_1.default title="AI Mood Mentor" description="Click to analyze your mood with AI." onClick={handleAnalyzeMoodClick}/>
          <card_1.default title="Breathing Exercises" description="Click for guided breathing exercises." onClick={handleMeditationClick} // Show breathing exercises window on click
    />
          <card_1.default title="Meditation" description="Click to start a meditation session." onClick={handleMeditationCardClick} // Show meditation card on click
    />
          <card_1.default title="Progress Tracking" description="Click to track your mood progress." onClick={function () { }}/>
        </div>

        {/* Render the MoodAnalyzer if it's active */}
        {showMoodAnalyzer && (<moodAnalyze_1.default onAnalyze={handleMoodAnalyze} mood={mood} onClose={function () { return setShowMoodAnalyzer(false); }} // Pass close function
        />)}

        {/* Render the Meditation Window if it's active */}
        {showMeditation && (<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
              <button className="absolute top-2 right-2 text-red-500 font-bold" onClick={closeMeditationModal}>
                X
              </button>
              <h2 className="text-2xl font-bold mb-4">Guided Meditation</h2>
              <p className="mb-4">
                Close your eyes, take deep breaths, and focus for 5 minutes. You can adjust the time if needed.
              </p>
              <meditionTimer_1.default initialDuration={600}/> {/* Default to 10 minutes */}
            </div>
          </div>)}

        {/* Render the Meditation Card if it's active */}
        {showMeditationCard && (<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
              <button className="absolute top-2 right-2 text-red-500 font-bold" onClick={closeMeditationCardModal}>
                X
              </button>
              <meditionCard_1.default onStartMeditation={startMeditation} onOpenMoodAnalyzer={openMoodAnalyzer} // Pass the function to open the MoodAnalyzer
        />
            </div>
          </div>)}
      </div>
    </div>);
}
exports.default = App;
