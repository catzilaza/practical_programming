(()=> {
    const konamiCode = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',        
    ];

    let index = 0;
 
    function onKeydown(event) {
        event.key === konamiCode[index] ? index++: index = 0;
        console.log(event.key);

        if(konamiCode.length === index) {
            startSnowing();
        }

    }

    function run() {
        const canvas = document.getElementById('falling-snow-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        document.addEventListener('keydown', onKeydown);        
    }
    run();
})();