import { useState } from 'react';
import MoodAnalyzer from './components/moodAnalyze';
import Header from './components/header';
import MeditationTimer from './components/meditionTimer';


import './index.css';


function App() {
  const [mood, setMood] = useState<string>('');
  const [activeTopic] = useState<number | null>(null);
  const [followUpQuestions] = useState<string[]>([]);
  const [showFollowUps] = useState(false);

  const handleMoodAnalyze = async (responseText: string) => {
    try {
      const res = await fetch('http://localhost:3000/mood/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ response: responseText }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`); // Fixed: Added backticks for template literal
      const data = await res.json();
      setMood(data.mood);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  // Explicitly define the type for moodAnalysisTopics

  // Example usage of activeTopic
  {activeTopic !== null && <div>Active Topic Index: {activeTopic}</div>} // Conditionally render based on activeTopic

  return (
    <div>
      <Header />
      <MeditationTimer />
    <div className="container">
      <header>
       
        <h1>Mood Analysis App</h1>
        <p>An AI-powered assistant to analyze your mood based on your inputs.</p>
      </header>
      <div className="main">
        <MoodAnalyzer 
          onAnalyze={handleMoodAnalyze} 
          mood={mood} 
          followUpQuestion={followUpQuestions[0] || ''} // Pass the first question or an empty string
          onFollowUpAnswer={(answer) => {console.log(answer);}}
        />
        
        {showFollowUps && followUpQuestions.length > 0 && (
          <div>
            {followUpQuestions.map((question, index) => (
              <p key={index}>{question}</p>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default App;
