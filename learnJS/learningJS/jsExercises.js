function scoreRang() {
    let score = document.getElementById("score").value;

    if(score < 60) {
        if(score < 30)
        {
            document.getElementById("result").value = "Less than 30";
        }
        else {
            document.getElementById("result").value = "Between 30 and 59";
        }
    }
    else{
        if(score > 80){
            document.getElementById("result").value = "More than 80";
        }
        else{
            document.getElementById("result").value = "Between 60 and 80";
        } 
    }
}

//EX 13.5 : Switch Statements
function gradeStatus() {
    let grade = document.getElementById("grade").value;
    switch(grade) {
        case 'A':
            document.getElementById("ex13-5").innerHTML = "Good Job 😍";
            break;
        case 'B':
            document.getElementById("ex13-5").innerHTML = "Pretty Good 😄";
            break;
        case 'C':
            document.getElementById("ex13-5").innerHTML = "Passed 🙂";
            break;
        case 'D':
            document.getElementById("ex13-5").innerHTML = "Fighting 😉";
            break;
        case 'F':
            document.getElementById("ex13-5").innerHTML = "Failed 😥";
            break;
        default:
            document.getElementById("ex13-5").innerHTML = "Enter A,B,C,D,F";
            break;
        
    }
}

//EX 14.1 : For Loop
function roundFor() {
    let n = document.getElementById("roundFor").value;

    for(let i = 1; i <= n; i++) {
        document.getElementById("ex14-1").innerHTML += "Round " + i + ": " + "I love JavaScript Programming <br>";
    }
}

//EX 14.2 : For-in Loop
function objForIn() {
    let nameValue = document.getElementById("name").value;
    let ageValue = document.getElementById("age").value;
    let loactionValue = document.getElementById("loaction").value;
    var obj = {
        name: nameValue,
        age: ageValue,
        location: loactionValue
    };

    for(key in obj) {
        let value = obj[key];
        document.getElementById("ex14-2").innerHTML += key + ': ' + value + '<br>';              
    }   
}

//EX 14.3 For-of Loop
function objForof() {
    let data1 = document.getElementById("data1").value;
    let data2 = document.getElementById("data2").value;
    let data3 = document.getElementById("data3").value;

    let obj = [data1, data2, data3];

    for(item of obj) {
        document.getElementById("ex14-3").innerHTML += item + '<br>';
    }

}

//EX 14.4 While Loop ~ For loop
function roundWhile() {
    let n = document.getElementById("roundWhile").value;
    let i = 1;

    while( i<= n) {
        document.getElementById("ex14-4").innerHTML += "Round " + i + ": " + "I love JavaScript Programming <br>";
        i++;
    }
}

//EX 14.5 While Loop
function checkWhile() {
    let n = document.getElementById("inputNumber").value;
    
    while( (n < 2) || (n > 12) ) {
        document.getElementById("checkWhile").innerHTML = "Please Enter number 2-12";
        break;
    }
    if ( (n >= 2) && (n <= 12) ) {
        for (let i = 1; i <= 12; i++) {
            document.getElementById("runFor").innerHTML += n + " x "+ i + " = " + n * i + "<br>";
        }
    }
    
}

//EX 14.6 Do While Loop
function testDoWhile() {
    let i = document.getElementById("inputDoNumber").value;
    let text = "";

    do {
        text += "<br> The round number is " + i;
        i++;

    }while( i < 20 );

    document.getElementById("ex14-6").innerHTML = text;
}

//EX 14.7 : Nested Loops
function testNestedLoops() {
    let loop1 = document.getElementById("loop1").value;
    let loop2 = document.getElementById("loop2").value;
    let text = "";    

    for ( let i = 0; i < loop1; i++) {
        for( let j = 0; j < loop2; j++){
            text += "The number is i = " + i + " and j = " + j + "<br>";
        }
    }
    document.getElementById("ex14-7").innerHTML = text;
}

//EX 14.8 : Break Statement
function testBreak() {
    let n = document.getElementById("inputBreakNumber").value;
    for ( let i = 0; i < 10; i++) {
        if ( i == n) {
            break;
        }
        document.getElementById("ex14-8").innerHTML += "The for number is "+ i + "<br>";

    }
}

//EX 14.9 : Continue Statement
function testContinue() {
    let n = document.getElementById("inputContinueNumber").value;
    for ( let i = 0; i < 10; i++) {
        if ( i == n) {
            continue;
        }
        document.getElementById("ex14-9").innerHTML += "The for number is "+ i + "<br>";

    }
}