import { useState } from 'react'
import './App.css'


const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry...😭😭😭😭",
  "You're breaking my heart"
];


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      { yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src=""
          />
          <div className="text">Yayyyyy!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src=""
          />
          
          <div>Will you be my valentine?</div>
          <div>
            <button 
            className="yesButton"
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true) }
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )

      }
    </div>
  )
}

export default App
