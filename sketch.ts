/**
 * ML-Matrix + p5js Template (v1.0.2)
 * GoToLoop (2021-Sep-04)
 *
 * https://Discourse.Processing.org/t/autocomplete-and-documentation-for-imported-p5js/31927/14
 *
 * https://GitHub.com/GoToLoop/ML-Matrix-P5JS-Template
 * https://GoToLoop.GitHub.io/ML-Matrix-P5JS-Template
 */

import * as p5js from "p5"; // get p5js types as namespace "p5"
import {} from "p5/global"; // also get p5js global types

import * as mlmtx from "ml-matrix"; // get ml-matrix types as namespace "mlmtx"

type p5 = p5js; // make TS recognize p5 as a "p5js" type
declare const p5: typeof p5js; // make TS recognize p5 as a "p5js" value

declare const mlMatrix: typeof mlmtx;  // make TS recognize mlMatrix as a "ml-matrix" value

const { Matrix } = mlMatrix; // Unpack class Matrix from mlMatrix
const eye = Matrix.eye(3); // variable eye is recognized as datatype Matrix

p5; // workaround to remove unused warnings for type p5.

(globalThis as any).setup = function () { // dump callback setup() in window so p5js can find it
  createCanvas(300, 300);
  noLoop();

  fill('yellow').stroke('red').strokeWeight(2.5);

  textSize(width >> 3).textAlign(CENTER, CENTER);

  print(eye.toString());
};

(globalThis as any).draw = function () { // dump callback draw() in window so p5js can find it
  background('blue');
  displayMatrix(eye);
};

function displayMatrix(matrix: mlmtx.Matrix) {
  const { rows, columns: cols } = matrix;

  for (var y = 0; y < rows; ++y)  for (var x = 0; x < cols; ++x) {
    const n = matrix.get(y, x);
    text(n, x * 100 + 50, y * 100 + 50);
  }
}
