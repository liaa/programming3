var LiveForm = require("./LiveForm");




module.exports = class Jur extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [this.x + 1, this.y - 1];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        
        let newCells = this.chooseCell(0);

        if (newCells[0] != undefined) {
            jurHashiv++;
            let x = newCells[0][0];
            let y = newCells[0][1];
            matrix[y][x] = 5;

            let jur = new Jur(x, y);
            jurArr.push(jur);
        }
    }
}