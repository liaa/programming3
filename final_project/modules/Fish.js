var LiveForm = require("./LiveForm");
var random = require("./random");



module.exports = class Fish extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.directions = [];
    }
    getnewdirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        let emptyCells = this.chooseCell(5);
        let newCell = random(emptyCells);

        if (newCell) {
            fishHashiv++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 5;

            this.y = y;
            this.x = x;
        }
    }
}