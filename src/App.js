import './App.css';

import Quotation from './Quotation';
import { stopTalking } from "./Quotation/speech";

import { celebrate, celebrateAltered, invictus, robertFrost, rilke, rilkeAltered, xmas, xmasAltered } from "./poems";

const poems = [
  {
    poemText: celebrate,
    altered: celebrateAltered,
    voice: "Google हिन्दी",
    rate: 0.9,
    title: "won't you celebrate with me",
    author: "Lucille Clifton",
    url: "https://poets.org/poem/wont-you-celebrate-me"
  },
  {
    poemText: rilke,
    altered: rilkeAltered,
    voice: "Google UK English Female",
    rate: 0.9,
    title: "A Walk",
    author: "Rainer Maria Rilke",
    url: "https://allpoetry.com/A-Walk"
  },
  {
    poemText: invictus,
    voice: "Google UK English Male",
    rate: 0.85,
    url: "https://poets.org/poem/invictus",
    author: "William Ernest Henley",
    title: "Invictus"
  },
  { 
    voice: "Microsoft Mark - English (United States)", 
    rate: 0.7, 
    poemText: robertFrost, 
    author: "Robert Frost", 
    title: "The Road Not Taken", 
    url: "https://www.poetryfoundation.org/poems/44272/the-road-not-taken" 
  },
  {
    voice: "Google US English",
    rate: 0.3,
    poemText: xmas,
    altered: xmasAltered,
    autor: "Clement Clarke Moore",
    title: "'Twas The Night Before Christmas",
    url: "https://www.poetryfoundation.org/poems/43171/a-visit-from-st-nicholas"
  }
];

function App() {
  return (
    <div className="App">
      <button id="stop-talking" onClick={stopTalking} style={{ cursor: "pointer" }}>PLEASE STOP TALKING</button>

      {poems.map(({ poemText, voice, rate, altered, ...details }) => {
        return <Quotation key={poemText} text={poemText} voice={voice} rate={rate} alteredText={altered} {...details} />;
      })}
    </div>
  );
}

export default App;
