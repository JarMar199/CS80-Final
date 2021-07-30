
var whiteNumbers = []; 
var whiteBallValues = { 
    "firstBall": "firstNum",
    "secondBall": "secondNum",
    "thirdBall": "thirdNum",
    "fourthBall": "fourthNum",
    "fifthBall": "fifthNum"
};

function newWhiteNum(clickedBall) {
    var randomNum = generateNum();
    if (document.getElementById(whiteBallValues[clickedBall]).innerHTML === "") {
        document.getElementById(clickedBall).style.opacity = "1";
        document.getElementById(whiteBallValues[clickedBall]).innerHTML = randomNum;
    }
};

function generateNum() {
    var newNum = Math.floor(Math.random() * 69 + 1);
    while (whiteNumbers.includes(newNum)){
        newNum = Math.floor(Math.random() * 69 + 1);
    }
    whiteNumbers.push(newNum);
    return newNum;
};

function newPowerBallNum() {
    var powerBallNum = Math.floor(Math.random() * 26 + 1);
    if (document.getElementById("powerNum").innerHTML === "") {
        document.getElementById("powerBall").style.opacity = "1";
        document.getElementById("powerNum").innerHTML = powerBallNum;
    }
};

function generateAll() {
    for (var key in whiteBallValues) {
        newWhiteNum(key);
    }
    newPowerBallNum();
};

function reset() {
    for (var key in whiteBallValues){
        document.getElementById(whiteBallValues[key]).innerHTML = "";
        document.getElementById(key).style.removeProperty("opacity");
        document.getElementById("powerNum").innerHTML = "";
        document.getElementById("powerBall").style.removeProperty("opacity");
    }
    whiteNumbers = [];
};
