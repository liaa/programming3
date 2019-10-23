class Jur {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
    }
    getNewDirections() {
        this.directions = [this.x + 1, this.y - 1];
    }
    chooseCell() {
        this.getNewDirections();
        var found = [];
        var x = this.directions[0];
        var y = this.directions[1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == 0) {
                found = this.directions;
            }
        }
        return found;
    }
    mul() {
        let newCell = this.chooseCell();

        if (newCell[0] != undefined) {

            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;

            let jur = new Jur(x, y);
            jurArr.push(jur);
        }
    }
}