// Ejemplo básico de colisión 2D con línea y línea
// Versión modificada del gran Simon Tiger
// https://editor.p5js.org/simontiger/sketches/S1kfupErZ
// ´biblioteca: https://github.com/bmoren/p5.collide2D
/*
collideLineLine(x1, y1, x2, y2, x3, y3, x4, y4, [calcIntersection])
*******************************************************************
Colisión línea a línea en 2D. Toma un parámetro booleano opcional que calcula el punto de intersección. Si está habilitado, devolverá un objeto que contiene la posición x,y de la intersección de colisión. Si no se produce ninguna intersección, devolverá un objeto que contiene valores x,y como false.
*/

let puntoColision;
let colisionan;
let xInterseccion;
let yInterseccion;

function setup() {
  createCanvas(400, 400);
  colisionan = select("#colisionan-html");
  xInterseccion = select("#x-interseccion-html");
  yInterseccion = select("#y-interseccion-html");
}

function draw() {
  background(255);
  strokeWeight(1);

  // determina punto de colisión
  puntoColision = collideLineLine(200, 300, 100, 150, mouseX, mouseY, 350, 50, true);

  // evalua si existe un punto de colisión
  if (puntoColision.x && puntoColision.y) {
    // cambio color contorno a rojo
    stroke(color("red"));
    //dibujo punto de colisión
    fill(color("red"))
    circle(puntoColision.x, puntoColision.y, 10);
    // cambio textos en etiquetas span en html
    colisionan.html("sí");
    xInterseccion.html(floor(puntoColision.x) + "px");
    yInterseccion.html(floor(puntoColision.y) + "px");

  } else {
    // cambio color contorno a negro
    stroke(color("black"));
    // cambio textos en etiquetas span en html
    colisionan.html("no");
    xInterseccion.html("(no se cruzan)");
    yInterseccion.html("(no se cruzan)");
  }
  // dibujo línea fija
  line(200, 300, 100, 150);

  stroke(color("black"));
  // dibujo línea móvil
  line(mouseX, mouseY, 350, 50);

  console.log(" x: " + puntoColision.x + " y: " + puntoColision.y);
}
