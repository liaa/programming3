var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Predator = require("./modules/Predator.js");
var Mard = require("./modules/Mard.js");
var Jur = require("./modules/Jur.js");
var Fish = require("./modules/Fish.js");
let random = require('./modules/random');
//! Requiring modules  --  END

//! Initializing global arrays  --  START
grassArr = [];
grassEaterArr = [];
predatorArr = [];
mardArr = [];
jurArr = [];
fishArr = [];
matrix = [];
//! Initializing global arrays  --  END

// statistics start
grassHashiv = 0;
grasseaterHashiv = 0;
predatorHashiv = 0;
mardHashiv = 0;
jurHashiv = 0;
fishHashiv = 0;
// statistics end

// time = 0
//! Creating MATRIX -- START

function matrixGenerator(matrixSize, grass, grasseater, predator, mard, jur, fish) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grasseater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < mard; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < jur; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < fish; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 6;
    }
}
matrixGenerator(40, 70, 15, 15, 5);
//! Creating MATRIX -- END

//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END

function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grasseaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
                predatorHashiv++;
            }
            else if (matrix[y][x] == 4) {
                var mard = new Mard(x, y);
                mardArr.push(mard);
                mardHashiv++;
            }
            else if (matrix[y][x] == 5) {
                var jur = new Jur(x, y);
                jurArr.push(jur);
                jurHashiv++;
            }
            else if (matrix[y][x] == 6) {
                var fish = new Fish(x, y);
                fishArr.push(fish);
                fishHashiv++;
            }
        }
    }
}

creatingObjects();

let exanak = -10;
let weather = "spring"

function game() {

    exanak++;
    if (exanak <= 0) {
        weather = "spring"

    } else if (exanak <= 10) {
        weather = "summer"
    } else if (exanak <= 20) {
        weather = "autumn"
    } else if (exanak <= 30) {
        weather = "winter"
    } else if (exanak > 30) {
        exanak = -10;
    }

    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].utel();
        }
    }
    if (predatorArr[0] !== undefined) {
        for (var i in predatorArr) {
            predatorArr[i].spanel();
        }
    }
    if (mardArr[0] !== undefined) {
        for (var i in mardArr) {
            mardArr[i].eat();
        }
    }
    if (jurArr[0] !== undefined) {
        for (var i in jurArr) {
            jurArr[i].eat();
        }
    }
    if (fishArr[0] !== undefined) {
        for (var i in fishArr) {
            fishArr[i].eat();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        grassEaterCounter: grasseaterHashiv,
        grassEaterLiveCounter: grassEaterArr.length,
        predatorCounter: predatorHashiv,
        mardCounter: mardHashiv,
        jurCounter: jurHashiv,
        fishCounter: fishHashiv,
        weather: weather
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 200)