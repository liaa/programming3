let matrix = [];
let side = 10;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let mardArr = [];
let jurArr = [];
let fishArr = [];
let count = 1;
function setup() {
    matrixGenerator(40, 70, 15, 15, 5);
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#B3672B');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            if (matrix[y][x] == 4) {
                let mard = new Mard(x, y);
                mardArr.push(mard);
            }
            if (matrix[y][x] == 5) {
                let jur = new Jur(x, y);
                jurArr.push(jur);
            }
            if (matrix[y][x] == 6) {
                let fish = new Fish(x, y);
                fishArr.push(fish);
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater, predator, mard) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < predator; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < mard; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }
        matrix[matrix.length - 1][0] = 5;
        matrix[matrix.length - 1][1] = 5;
        matrix[matrix.length - 1][2] = 5;
        matrix[matrix.length - 2][0] = 5;
        matrix[matrix.length - 3][0] = 5;
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("blue")
            }
            else if (matrix[y][x] == 6) {
                fill("violet")
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].utel();
    }
    for (var i in predatorArr) {
        predatorArr[i].spanel();
    }
    for (var i in mardArr) {
        mardArr[i].eat();
    }
    for (var i in jurArr) {
        jurArr[i].mul();

        if (jurArr.length == 10 && count == 1) {
            let curr = random(jurArr);

            matrix[curr.y][curr.x] = 5;
            let fish = new Fish(curr.x, curr.y);
            fishArr.push(fish)

            for (let i in jurArr) {
                if (jurArr[i].x == curr.x && jurArr[i].y == curr.y) {
                    jurArr.splice(i, 1)
                }
            }
           count = 0;
        }
    }
    for (var i in fishArr) {
        fishArr[i].move();
    }
}

