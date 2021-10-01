/**
 * ML-Matrix + p5js Template (v1.0.4) [Instance Mode]
 * GoToLoop (2021-Oct-01)
 *
 * https://Discourse.Processing.org/t/autocomplete-and-documentation-for-imported-p5js/31927/14
 *
 * https://GitHub.com/GoToLoop/ML-Matrix-P5JS-Template
 * https://GoToLoop.GitHub.io/ML-Matrix-P5JS-Template/index.instance.html
 */

import * as p5js from "p5"; // get p5js types as namespace "p5js"

import * as mlmtx from "ml-matrix"; // get ml-matrix types as namespace "mlmtx"

type p5 = p5js; // make TS recognize p5 as a "p5js" type
declare const p5: typeof p5js; // make TS recognize p5 as a "p5js" value

declare const mlMatrix: typeof mlmtx;  // make TS recognize mlMatrix as a "ml-matrix" value

const { Matrix } = mlMatrix; // Unpack class Matrix from mlMatrix

new p5(function (p: p5) {
  const eye = Matrix.eye(3); // variable eye is recognized as datatype Matrix

  p.setup = function () {
    p.createCanvas(300, 300);
    p.noLoop();

    p.fill('yellow').stroke('red').strokeWeight(2.5);

    p.textSize(p.width >> 3).textAlign(p.CENTER, p.CENTER);

    p.print(eye.toString());
  };

  p.draw = function () {
    p.background('blue');
    displayMatrix(eye);
  };

  function displayMatrix(matrix: mlmtx.Matrix) {
    const { rows, columns: cols } = matrix;

    for (var y = 0; y < rows; ++y)  for (var x = 0; x < cols; ++x) {
      const n = matrix.get(y, x);
      p.text(n, x * 100 + 50, y * 100 + 50);
    }
  }
});
