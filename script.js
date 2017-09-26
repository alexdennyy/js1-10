//write first method
function sleepIn(weekday, vac) {
    if(weekday == false){
        var sleep = true;
    } else if(vac == true){
        sleep = true;
    } else {
        sleep = false;
    }
    return sleep;
}

//write second method
function monkeyTrouble(asmile, bsmile) {
    if(asmile == bsmile){
        return true;
    } else {
        return false;
    }
}

function stringTimes(string, times){
    var stringType = (string);
    var newString = "";
    for(var i = 0; i < times; i++){
        newString = newString + (string);
    }
    return newString;
}

function frontTimes(string, times){
    var first3 = string.substring(0,3);
    var multipliedFirst = "";
    for(var i = 0; i < times; i++){
        multipliedFirst = multipliedFirst + first3;
    }
    return multipliedFirst;
}

function stringBits(string){
    var length = string.length;
    var bits = length % 2;
    var output = "";
    if(bits == 1) {
        length = length + 1;
        var totalBits = length / 2;
    }
    var fullword = output;
    for (var i = 0; length > i; i = i + 2){
        var next = string.substring(i, i+1);
        fullword += next;
    }
    return fullword;
}


function caughtSpeeding(speed, bday){
    if(bday == true){
        speed -= 5;
    }
    if(speed <= 60){
        var ticket = 0;
    } else if(speed > 60){
        if(speed <= 80){
        ticket = 1;
        }
        if(speed > 80) {
            ticket = 2;
        }
    }
    return ticket;
}

function fizz_buzz(num){
    var fizz = num % 3;
    var buzz = num % 5;
    var startString = "";
    if (fizz == 0){
        startString += "Fizz";
    }
    if (buzz == 0){
        startString += "Buzz";
    }
    else if(fizz != 0){
        startString = (num + "!");
    }
    return startString;
}

function teaParty(tea, cooks){
    if(tea < 5 || cooks < 5){
        var partyStatus = 0
    }else if(tea >= cooks * 2 || cooks >= tea * 2){
        partyStatus = 2;
    } else {
        partyStatus = 1;
    }
    return partyStatus;
}

function blackjack(card1, card2){
    if(card1 > 21 && card2 > 21){
        var value = 0;
    }
    if(card1 > card2 && card1 <= 21){
        var value = card1;
    } else if (card1 < card2 && card2 <= 21){
        var value = card2;
    } else if (card1 > 21 && card2 <= 21){
        var value = card2;
    } else if (card2 > 21 && card1 <= 21){
        var value = card1;
    }
    return value;
}

function loneSum(int1, int2, int3){
    var sum;
    if(int1 == int2 && int2 == int3){
        sum = 0;
    } else if(int1 == int2){
        sum = int3;
    } else if(int1 == int2 && int2 == int3){
        sum = 0;
    } else if(int2 == int3){
        sum = int1;
    } else if(int1 == int3){
        sum = int2;
    } else if (int1 != int2 && int2 != int3){
        sum = int1 + int2 + int3;
    }

    return sum;
}




function tester() {
    document.getElementById("output").innerHTML ="You can sleep in: " + sleepIn(false, true);
}
function tester2() {
    document.getElementById("output1").innerHTML ="The monkeys are in trouble: " + monkeyTrouble(false, false);
}
function tester3(){
    document.getElementById("output2").innerHTML = stringTimes("String", 5);
}
function tester4(){
    document.getElementById("output3").innerHTML ="" + frontTimes("House", 18);
}
function tester5(){
    document.getElementById("output4").innerHTML = stringBits("yeahyeahyeah");
}
function tester6(){
    document.getElementById("output5").innerHTML = fizz_buzz(33);
}
function tester7(){
    document.getElementById("output6").innerHTML = teaParty(3, 6);
}

function tester8(){
    document.getElementById("output7").innerHTML = blackjack(7, 18);
}

function tester9(){
    document.getElementById("output8").innerHTML = loneSum(7, 18, 12);
}