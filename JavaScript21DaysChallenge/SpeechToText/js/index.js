(()=> {

    //window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    //const recognition = new window.SpeechRecognition();
    const btnElem = document.querySelector('.control');


    function onClick() {
        const isPausing = btnElem.classList.contains('record');

        if(isPausing) {
          //recognition.start();SpeechRecognitionAlternative.start();
          btnElem.classList.remove("record");
          btnElem.classList.add("pause");
        }else {
          //recognition.stop();
          btnElem.classList.remove("pause");
          btnElem.classList.add("record");  
        }
        
    }

    function onResult(event) {
        //console.log(event);
        const textElem = document.querySelector('.text');
        const { transcript } = event.results[0][0];
        textElem.innerText += transcript;
        //console.log(transcript);

    }

    function onEnd() {
        const isRecording = btnElem.classList.contains('pause');

        if(isRecording) {
            recognition.start();
        }
    }

    function run() {
        //recognition.lang = 'gb-GB';

        //recognition.addEventListener('result', onResult);
        //recognition.addEventListener('end', onEnd);
        btnElem.addEventListener('click', onClick);
    }

    run();
})();