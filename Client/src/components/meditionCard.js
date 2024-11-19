"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var MeditationCard = function (_a) {
    var onStartMeditation = _a.onStartMeditation, onOpenMoodAnalyzer = _a.onOpenMoodAnalyzer;
    var duration = (0, react_1.useState)(10)[0]; // Default to 10 minutes
    var _b = (0, react_1.useState)('Mindfulness'), meditationType = _b[0], setMeditationType = _b[1];
    // Questions for guided meditation
    var questions = [
        "What is your main intention for this meditation session?",
        "How are you feeling right now?",
        "What do you hope to achieve through this meditation?",
    ];
    var _c = (0, react_1.useState)(Array(questions.length).fill('')), userAnswers = _c[0], setUserAnswers = _c[1];
    var _d = (0, react_1.useState)(false), showQuestions = _d[0], setShowQuestions = _d[1]; // State to control showing questions
    var handleStartMeditation = function () {
        if (meditationType === 'Guided') {
            setShowQuestions(true); // Show the questions for Guided meditation
        }
        else {
            onStartMeditation(meditationType, duration); // Call onStartMeditation for other types
        }
    };
    var handleStartGuidedMeditation = function () {
        // Check if all questions are answered
        if (userAnswers.every(function (answer) { return answer.trim() !== ''; })) {
            setShowQuestions(false); // Hide questions
            onOpenMoodAnalyzer(); // Call the function to open the MoodAnalyzer
        }
        else {
            alert('Please answer all questions before proceeding.'); // Alert if not all questions are answered
        }
    };
    var handleAnswerChange = function (index, answer) {
        var updatedAnswers = __spreadArray([], userAnswers, true);
        updatedAnswers[index] = answer;
        setUserAnswers(updatedAnswers);
    };
    return (<div className="meditation-card border rounded p-12 m-2 bg-gray-800">
      <h2 className='mb-2'>Meditation Session</h2>
      <p className='mb-2'>Select a type of meditation:</p>
      <select value={meditationType} onChange={function (e) { return setMeditationType(e.target.value); }} className="border rounded p-1 mb-2 text-gray-700">
        <option value="Mindfulness">Mindfulness</option>
        <option value="Guided">Guided</option>
        <option value="Breath Awareness">Breath Awareness</option>
      </select>
  
      <button onClick={handleStartMeditation} className="mt-2">Start Meditation</button>

      {showQuestions && (<div className="mt-4">
          <h3 className="font-bold">Please answer the following questions:</h3>
          <ul>
            {questions.map(function (question, index) { return (<li key={index} className="mb-2">
                <label>
                  {question}
                  <input type="text" value={userAnswers[index]} onChange={function (e) { return handleAnswerChange(index, e.target.value); }} className="border rounded p-1 ml-2 w-full text-gray-800" // Add your desired styles here
            />
                </label>
              </li>); })}
          </ul>
          <p className="mt-2">Click below to start your guided meditation!</p>
          <button onClick={handleStartGuidedMeditation} className="mt-2 bg-blue-500 text-white p-2 rounded">
            Start Guided Meditation
          </button>
        </div>)}
    </div>);
};
exports.default = MeditationCard;
