var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");
  this.textSize(20)
 fill("black")
 this.text("Question:- What starts and ends with the letter ‘E’, but has only one letter?",100,100)


}
