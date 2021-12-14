const SpeechAPI = window.speechSynthesis;
if (!SpeechAPI) {
    alert(
        "Your browser doesn't have the Speech Synthesis (text-to-speech) API. Upgrade!"
    );
    throw new Error("Sorry.");
}

const Utterance = (s) => new window.SpeechSynthesisUtterance(s);

let VOICES = null;
export const getVoices = () => {
    if (VOICES === null) VOICES = SpeechAPI.getVoices();
    return VOICES;
};

let currentSayingInterval = null;

export const say = (speechString, voice = 0, rate = 1) => {

    const voices = getVoices();

    if (currentSayingInterval !== null) {
        clearInterval(currentSayingInterval);
        currentSayingInterval = null;
    }
    SpeechAPI.cancel();

    const eachUtterance = speechString.split("\n\n").map(Utterance).map(utterance => {
        utterance.voice = voices[voice];
        utterance.rate = rate;
        utterance.volume = 1;
        return utterance;
    });

    currentSayingInterval = setInterval(() => {
        if (SpeechAPI.speaking === false) {
            if (eachUtterance[0]) {
                SpeechAPI.speak(eachUtterance.shift());
            } else {
                clearInterval(currentSayingInterval);
                currentSayingInterval = null;
            }
        }
    }, 200);
};

export const stopTalking = () => {
    SpeechAPI.cancel();
};