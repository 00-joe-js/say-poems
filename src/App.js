import './App.css';

import Quotation from './Quotation';
import { stopTalking } from "./Quotation/speech";

import { celebrate, celebrateAltered, invictus, robertFrost } from "./poems";

const poems = [
  {
    poemText: celebrate,
    altered: celebrateAltered,
    voice: 10,
    rate: 0.9,
    title: "won't you celebrate with me",
    author: "Lucille Clifton",
    url: "https://poets.org/poem/wont-you-celebrate-me"
  },
  {
    poemText: invictus,
    voice: 6,
    rate: 0.85,
    url: "https://poets.org/poem/invictus",
    author: "William Ernest Henley",
    title: "Invictus"
  },
  { voice: 1, rate: 0.7, poemText: robertFrost, author: "Robert Frost", title: "The Road Not Taken", url: "https://www.poetryfoundation.org/poems/44272/the-road-not-taken" }
];

function App() {
  return (
    <div className="App">
      <button onClick={stopTalking} style={{ cursor: "pointer" }}>PLEASE STOP TALKING</button>

      {poems.map(({ poemText, voice, rate, altered, ...details }) => {
        return <Quotation key={poemText} text={poemText} voice={voice} rate={rate} alteredText={altered} {...details} />;
      })}
    </div>
  );
}

export default App;
