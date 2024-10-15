import { useState } from 'react';
import Header from './components/header';
import Card from './components/card';
import MoodAnalyzer from './components/moodAnalyze'; // Ensure this import is correct
import MeditationTimer from './components/meditionTimer'; 
import MeditationCard from './components/meditionCard'; // Import your new MeditationCard
import './index.css';

function App() {
  const [mood, setMood] = useState<string>('');
  const [showMoodAnalyzer, setShowMoodAnalyzer] = useState(false);
  const [showMeditation, setShowMeditation] = useState(false); // State to control meditation modal
  const [showMeditationCard, setShowMeditationCard] = useState(false); // State to control meditation card modal

  const handleMoodAnalyze = async (responseText: string) => {
    try {
      const res = await fetch('http://localhost:4000/mood/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ response: responseText }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setMood(data.mood); // Update the state for mood based on AI response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAnalyzeMoodClick = () => {
    setShowMoodAnalyzer(true); // Show MoodAnalyzer
  };

  const handleMeditationClick = () => {
    setShowMeditation(true); // Open the meditation window on click
  };

  const handleMeditationCardClick = () => {
    setShowMeditationCard(true); // Open the meditation card on click
  };

  const closeMeditationModal = () => {
    setShowMeditation(false); // Close meditation window
  };

  const closeMeditationCardModal = () => {
    setShowMeditationCard(false); // Close meditation card modal
  };

  const startMeditation = (type: string, duration: number) => {
    console.log(`Starting ${type} meditation for ${duration} minutes.`);
    closeMeditationCardModal(); // Close the meditation card modal after starting meditation
    setShowMeditation(true); // Show the meditation timer modal
  };

  // New function to open Mood Analyzer from MeditationCard
  const openMoodAnalyzer = () => {
    setShowMoodAnalyzer(true); // Open the MoodAnalyzer
  };

  return (
    <div>
      <Header />
      <div className="container">
        <header>
          <h1>Mood Analysis App</h1>
          <p>An AI-powered assistant to analyze your mood based on your inputs.</p>
        </header>
        
        {/* Updated Card Layout */}
        <div className="main flex flex-row flex-wrap justify-between gap-4">
          <Card
            title="AI Mood Mentor"
            description="Click to analyze your mood with AI."
            onClick={handleAnalyzeMoodClick}
          />
          <Card 
            title="Breathing Exercises" 
            description="Click for guided breathing exercises." 
            onClick={handleMeditationClick} // Show breathing exercises window on click
          />
          <Card 
            title="Meditation" 
            description="Click to start a meditation session." 
            onClick={handleMeditationCardClick} // Show meditation card on click
          />
          <Card title="Progress Tracking" description="Click to track your mood progress." onClick={() => {}} />
        </div>

        {/* Render the MoodAnalyzer if it's active */}
        {showMoodAnalyzer && (
           <MoodAnalyzer 
           onAnalyze={handleMoodAnalyze} 
           mood={mood} 
           onClose={() => setShowMoodAnalyzer(false)} // Pass close function
         />
        )}

        {/* Render the Meditation Window if it's active */}
        {showMeditation && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
              <button 
                className="absolute top-2 right-2 text-red-500 font-bold" 
                onClick={closeMeditationModal}
              >
                X
              </button>
              <h2 className="text-2xl font-bold mb-4">Guided Meditation</h2>
              <p className="mb-4">
                Close your eyes, take deep breaths, and focus for 5 minutes. You can adjust the time if needed.
              </p>
              <MeditationTimer initialDuration={600} /> {/* Default to 10 minutes */}
            </div>
          </div>
        )}

        {/* Render the Meditation Card if it's active */}
        {showMeditationCard && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ">
            <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
              <button 
                className="absolute top-2 right-2 text-red-500 font-bold" 
                onClick={closeMeditationCardModal}
              >
                X
              </button>
              <MeditationCard 
                onStartMeditation={startMeditation} 
                onOpenMoodAnalyzer={openMoodAnalyzer} // Pass the function to open the MoodAnalyzer
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
