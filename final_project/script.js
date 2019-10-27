function setup() {
    var socket = io();
    var side = 10;
    var matrix = [];


    let weatherElement = document.getElementById('weather');

    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');

    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');

    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');

    let mardCountElement = document.getElementById('mardCount');
    let mardLiveCountElement = document.getElementById('mardLiveCount');

    let jurCountElement = document.getElementById('jurCount');
    let jurLiveCountElement = document.getElementById('jurLiveCount');

    let fishCountElement = document.getElementById('fishCount');
    let fishLiveCountElement = document.getElementById('fishLiveCount');



    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        weatherElement.innerText = data.weather;

        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterCountElement.innerText = data.grassEaterCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;

        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;

        mardCountElement.innerText = data.mardCounter;
        mardLiveCountElement.innerText = data.mardLiveCounter;

        jurCountElement.innerText = data.jurCounter;
        jurLiveCountElement.innerText = data.jurLiveCounter;

        fishCountElement.innerText = data.fishCounter;
        fishLiveCountElement.innerText = data.fishLiveCounter;


        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');



        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "ամառ") {
                        fill("#00b300");
                    } else if (data.weather == "աշուն") {
                        fill("#006600");
                    } else if (data.weather == "ձմեռ") {
                        fill("#00cc66");
                    } else if (data.weather == "գարուն") {
                        fill("#009900");
                    }
                }
                else if (matrix[i][j] == 2) {
                    if (data.weather == "ամառ") {
                        fill("#ff9900");
                    } else if (data.weather == "աշուն") {
                        fill("#cc6600");
                    } else if (data.weather == "ձմեռ") {
                        fill("#ffb366");
                    } else if (data.weather == "գարուն") {
                        fill("#ff8c1a");
                    }
                }
                else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if (data.weather == "ամառ") {
                        fill("#ff0000");
                    } else if (data.weather == "աշուն") {
                        fill("#b30000");
                    } else if (data.weather == "ձմեռ") {
                        fill("#ff6666");
                    } else if (data.weather == "գարուն") {
                        fill("#ff1a1a");
                    }
                }
                else if (matrix[i][j] == 4) {
                    fill('black');
                } else if (matrix[i][j] == 5) {
                    if (data.weather == "ամառ") {
                        fill("#0033cc");
                    } else if (data.weather == "աշուն") {
                        fill("#000099");
                    } else if (data.weather == "ձմեռ") {
                        fill("#0066cc");
                    } else if (data.weather == "գարուն") {
                        fill("#0000ff");
                    }
                }
                else if (matrix[i][j] == 6) {
                    fill('pink');
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}
