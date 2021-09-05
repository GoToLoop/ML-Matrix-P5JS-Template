/**
 * ML-Matrix + p5js Template (v1.0.0)
 * GoToLoop (2021-Sep-04)
 *
 * https://Discourse.Processing.org/t/autocomplete-and-documentation-for-imported-p5js/31927/14
 *
 * https://GitHub.com/GoToLoop/ML-Matrix-P5JS-Template
 * https://GoToLoop.GitHub.io/ML-Matrix-P5JS-Template
 */
const { Matrix } = mlMatrix; // Unpack class Matrix from mlMatrix
const eye = Matrix.eye(3); // variable eye is recognized as datatype Matrix
globalThis.setup = function () {
    createCanvas(300, 300);
    noLoop();
    fill('yellow').stroke('red').strokeWeight(2.5);
    textSize(width >> 3).textAlign(CENTER, CENTER);
    print(eye.toString());
};
globalThis.draw = function () {
    background('blue');
    displayMatrix(eye);
};
function displayMatrix(matrix) {
    const { rows, columns: cols } = matrix;
    for (var y = 0; y < rows; ++y)
        for (var x = 0; x < cols; ++x) {
            const n = matrix.get(y, x);
            text(n, x * 100 + 50, y * 100 + 50);
        }
}
export {};
