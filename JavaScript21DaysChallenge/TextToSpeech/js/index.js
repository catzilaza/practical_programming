(()=> {

    const message = new SpeechSynthesisUtterance();

    function onVoicesChanged() {
        const voices = speechSynthesis.getVoices();
        const gbVoice = voices.find(voice => voice.lang === 'en-GB');
        message.voice = gbVoice;
    }

    function onClick(event) {
        message.text =  event.target.getAttribute('alt');
        speechSynthesis.speak(message);

    }

    function run() {
        speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

        const imgElems = Array.from(document.querySelectorAll('img'));
        imgElems.forEach(imgElem => imgElem.addEventListener('click', onClick));

    }

    run();
})();