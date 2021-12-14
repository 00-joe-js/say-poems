
import { useEffect, useState } from "react";
import { say, getVoices } from "./speech";

const VoiceSelect = ({ selectedVoice, onChange }) => {

    const voices = getVoices();

    return (
        <select onChange={e => onChange(e.target.value)} value={selectedVoice}>
            {voices.map((voice, index) => {
                return <option key={voice.name} value={index}>{voice.name}</option>
            })}
        </select>
    );

};

const VoiceControls = ({ initialVoice, initialRate, onUpdatedConfig }) => {

    const [selectedVoice, setVoice] = useState(initialVoice);
    const [selectedRate, setRate] = useState(initialRate);

    useEffect(() => {
        onUpdatedConfig({ voice: selectedVoice, rate: selectedRate });
    }, [selectedVoice, selectedRate, onUpdatedConfig]);

    return (
        <div>
            <VoiceSelect selectedVoice={selectedVoice} onChange={newVoiceIndex => setVoice(newVoiceIndex)} />
            <div>
                <input type="range" value={selectedRate} onChange={e => setRate(e.target.value)} min="0.2" max="1.6" step="0.05"></input>
                {selectedRate}
            </div>


        </div>
    );

};

const Quotation = ({ text, voice, rate, alteredText, title, author, url }) => {

    const [voiceConfig, setVoiceConfig] = useState({ voice, rate });

    const sayQuote = () => {
        say(alteredText || text, voiceConfig.voice, voiceConfig.rate)
    };

    return (
        <div className="poem">
            <a href={url} target="_blank" rel="noreferrer">{title} by {author}</a>
            <div onClick={sayQuote}>
                <pre>{text}</pre>
            </div>
            <VoiceControls onUpdatedConfig={setVoiceConfig} initialVoice={voiceConfig.voice} initialRate={voiceConfig.rate} />
        </div>
    );

};

export default Quotation;