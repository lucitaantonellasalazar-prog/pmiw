let caminar;
let giragira;
let grite;
let corre;
let fondo1;
let fondo2;
let fondo3;
let fondo4;
let framesCaminar=[];
let framesfrente=[];
let framessalir=[];
let framesgira=[];
let framesdesaparece=[];
let nframe=8;
let vel=4;
let escala=1;
let estados='direcciones';
let x=-60;
let y= 150;
let tiempo=0;
let misonido;



function elegirFrame(frames, velocidadAnimacion) {
  

  let indice = floor(frameCount / velocidadAnimacion) % frames.length;

  return frames[indice];
}
function preload() {
  
  soundFormats('mp3', 'ogg');
  misonido = loadSound('musiquita/visita.mp3');
  
  for (let i = 0; i < nframe; i++) {
    framesCaminar.push(loadImage('assets/saltito' + i + '.png'));
    framesfrente.push(loadImage('assets/saltito' + i + '.png'));  
  }
  
    for (let i = 0; i < 4; i++) {
    framessalir.push(loadImage('assets/salir' + i + '.png'));  
    framesgira.push(loadImage('assets/gira' + i + '.png')); 
  }
    for (let i = 0; i < 5; i++) {
    framesdesaparece.push(loadImage('assets/desaparece' + i + '.png'));  
    }
  
  print(framesCaminar);
  print(framesfrente);
  print(framessalir);
  print(framesgira);
  print(framesdesaparece);
  fondo1=loadImage('assets/fondo1.png');
  fondo2=loadImage('assets/fondo2.png');
  fondo3=loadImage('assets/fondo3.png');
  fondo4=loadImage('assets/fondo4.png');
  
}
function restaurar(){
 nframe=8;
 vel=4;
 escala=1;
 estados='direcciones';
 x=-60;
 y= 150;
 tiempo=0;


}

function keyPressed(){
if(key=='o'||key=='O'){
restaurar();
}
}
function setup() {
  
  createCanvas(800, 600);}

function mousePressed(){
 misonido.play();
 }


function draw() {
  image(fondo1, 0, 0);
  let frame;


  if (estados=='direcciones') {
    x += vel;
   if (x>=860) {
      x = 860;
      estados='direcciones1';
    }
    frame= elegirFrame(framesCaminar, 8)
  } else if (estados=='direcciones1') {
    x=515;
    const vel=1;
    y +=vel;
    if (y>=450) {
      y=450;
      estados='direcciones2';
    }
    frame=elegirFrame(framessalir, 4)
  }
 else if (estados=='direcciones2') {
   tiempo+=vel;
    if (tiempo>=120) {
      tiempo=120;
      estados='direcciones3';
    }
    frame=elegirFrame(framesgira, 4)
  }
else if (estados=='direcciones3') {
   tiempo+=vel;
    if (tiempo>=250) {
      tiempo=250;
      estados='direcciones4';
    }
    frame=elegirFrame(framesdesaparece, 5)
  }
    else if (estados=='direcciones4') {
   x=866;
    
    frame=elegirFrame(framesdesaparece, 5)
  }
  image(frame, x, y, frame.width * escala, frame.height * escala);
   image(fondo2, 0, 0);
  image(fondo3, 0, 0);
  image(fondo4, 0, 0);
 
}
