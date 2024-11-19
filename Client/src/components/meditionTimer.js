"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("../index.css"); // Make sure your breathing circle styles are included
var MeditationTimer = function (_a) {
    var initialDuration = _a.initialDuration;
    var _b = (0, react_1.useState)(initialDuration), duration = _b[0], setDuration = _b[1]; // Set the duration to the initial value passed
    var _c = (0, react_1.useState)(false), isActive = _c[0], setIsActive = _c[1]; // Manage timer active state
    var _d = (0, react_1.useState)('Inhale'), breathPhase = _d[0], setBreathPhase = _d[1]; // Keep track of inhale/exhale phase
    (0, react_1.useEffect)(function () {
        var countdown = null;
        if (isActive && duration > 0) {
            countdown = setInterval(function () {
                setDuration(function (prevDuration) {
                    if (prevDuration <= 0) {
                        clearInterval(countdown);
                        setIsActive(false);
                        return 0;
                    }
                    return prevDuration - 1;
                });
            }, 1000);
        }
        return function () { return clearInterval(countdown); };
    }, [isActive, duration]);
    // Breathing phase cycle: Alternate every 4 seconds between inhale and exhale
    (0, react_1.useEffect)(function () {
        var countdown = null;
        if (isActive && duration > 0) {
            countdown = setInterval(function () {
                setDuration(function (prevDuration) {
                    if (prevDuration <= 0) {
                        clearInterval(countdown);
                        setIsActive(false);
                        return 0;
                    }
                    return prevDuration - 1;
                });
            }, 1000);
        }
        return function () { return clearInterval(countdown); };
    }, [isActive, duration]);
    // Breathing phase cycle: Alternate every 4 seconds between inhale and exhale
    (0, react_1.useEffect)(function () {
        var breathInterval = null;
        if (isActive) {
            breathInterval = setInterval(function () {
                setBreathPhase(function (prev) { return (prev === 'Inhale' ? 'Exhale' : 'Inhale'); });
            }, 4000); // Switch between inhale and exhale every 4 seconds
        }
        return function () { return clearInterval(breathInterval); };
    }, [isActive]);
    var startTimer = function () {
        if (!isActive) {
            setIsActive(true);
            setDuration(initialDuration);
        }
    };
    var stopTimer = function () {
        setIsActive(false);
    };
    var resetTimer = function () {
        setIsActive(false);
        setDuration(initialDuration);
    };
    return (<div className={"max-w-md mx-auto p-6 text-black shadow-md rounded-lg text-center ".concat(isActive ? 'bg-green-500' : 'bg-red-700')}>
      <h2 className="text-2xl font-bold mb-6">Breathing Meditation</h2>
      <div className="breathing-circle-container">
        <div className={"breathing-circle ".concat(breathPhase.toLowerCase())}></div>
        <p className="breath-instructions text-2xl font-semibold p-2 mb-4">{breathPhase}</p>
      </div>
      <p className="mb-2 text-lg">
        Time remaining: {Math.floor(duration / 120)}:{('0' + (duration % 60)).slice(-2)} minutes
      </p>
      <div className="flex justify-between mb-4">
        <button onClick={startTimer} disabled={isActive} className={"bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition ".concat(isActive ? 'opacity-50' : '')}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isActive} className={"bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition ".concat(!isActive ? 'opacity-50' : '')}>
          Stop
        </button>
        <button onClick={resetTimer} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">
          Reset
        </button>
      </div>

      <div className="breathing-guide text-left mt-6 mb-2">
        <h3 className="text-xl font-bold mb-3">Breathing Exercise Guide:</h3>
        <p className="mt-2 bg-green-800 text-white p-6">
          Focus on the circle as it expands and contracts. Inhale deeply through your nose as the circle expands, and exhale slowly through your mouth as the circle contracts. Continue to follow the rhythm of the circle as you breathe in and out, allowing your mind to stay focused on the present moment.
        </p>
      </div>

      <div>{isActive ? "Timer is running..." : "Timer is stopped"}</div>
    </div>);
};
exports.default = MeditationTimer;
