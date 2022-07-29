var ball, wall1, wall2, wall3, wall4, wall5, wall6,wall7, wall8, wall9, wall10, wall11
var cup;


function preload(){
    
}

function setup(){
    var ball=createSprite(30,30,15,15);
    ball.shapeColor=("green");
    var wall=createSprite(90,10,30,220);
    wall.shapeColor=("black");
    var wall1=createSprite(0,175,270,30); 
    wall1.shapeColor=("black");
    var wall2=createSprite(150,195,30,270);
    wall2.shapeColor=("black");
    var wall3=createSprite(95,315,80,30);
    wall3.shapeColor=("black");
    var wall4=createSprite(70,270,30,60);
    wall4.shapeColor=("black");
    var wall5=createSprite(0,285,40,250);
    wall5.shapeColor=("black");
    var wall6=createSprite(20,385,600,30);
    wall6.shapeColor=("black");
    var wall7=createSprite(305,335,30,70);
    wall7.shapeColor=("black");
    var wall8=createSprite(400,255,225,30);
    wall8.shapeColor=("black")
    var wall9=createSprite(303,195,30,90);
    wall9.shapeColor=("black");
    var wall10=createSprite(230,300,30,450);
    wall10.shapeColor=("black");
    var wall11=createSprite(285,65,140,30);
    wall11.shapeColor=("black");
    var cup=createSprite(400,360,50,90);
      cup.shapeColor=("yellow");
      ball.velocityX=0;
      ball.velocityY=0;
    
}

function draw(){
    background("red");
  
    createEdgeSprites()
    ball.bounceOff(edges);
    
      if(keyDown(UP_ARROW)) {
        ball.velocityX = 0;
        ball.velocityY = -2;
    }
      if (keyDown(DOWN_ARROW)) {
      
        ball.velocityX=0;
        ball.velocityY=2;
      
    }
      if (keyDown("left")) {
        ball.velocityX=-2;
        ball.velocityY=0;
      
    }
    
      if (keyDown("right")){
       
        ball.velocityX=2;
        ball.velocityY=0;    
    }  
    
    
    
    
      if (ball.isTouching(wall)||ball.isTouching(wall2)||ball.isTouching(wall3)||ball.isTouching(wall1)||ball.isTouching(wall4)||ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9)||ball.isTouching(wall10)){
        ball.x=30;
        ball.y=30;
        ball.velocityY=0;
        ball.velocityX=0;
        
   }
      if (ball.isTouching(cup)){
        ball.velocityX=0;
        ball.velocityY=0;
    
   }
      if (ball.isTouching(cup)){
          
        text("you won",200,200);
        DEFAULT_TEXT_FILL("blue");
        textSize(500);
        
      }
  
  drawSprites()
  
  ball.bounce(cup);
    
}   

