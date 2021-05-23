canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
 rover_width = 100; rover_height = 90;
  background_image = "mars.jpg";
   rover_image = "rover.png";
    rover_x = 50; rover_y = 50;
     function add() { background_imgTag = new Image();
         background_imgTag.onload = uploadBackground;
          background_imgTag.src = background_image; 
          rover_imgTag = new Image();
           rover_imgTag.onload = uploadrover; 
           rover_imgTag.src = rover_image; 
        } function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
         } function uploadrover() { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
         } window.addEventListener("keydown", my_keydown); 
         function my_keydown(e) { keyPressed = e.keyCode;
            console.log(keyPressed); }
            function up() { if(rover_y >=0) { rover_y = rover_y - 10;
                console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                if(keyPressed=='38'){
                    console.log("up");
                }
            }
       
                 uploadBackground(); uploadrover(); } 
                 function down() { if(rover_y <=550) { rover_y = rover_y +10;
                   console.log("When up down is pressed, x = " + rover_x + " | y = " +rover_y);     
                   if(keyPressed=='40'){
                    console.log("down");
                }
                  uploadBackground(); uploadrover(); } }
                  function left() { if(rover_x >=0) { rover_x = rover_x -10;
                     console.log("When up left is pressed, x = " + rover_y + " | x = " +rover_x);
                     if(keyPressed=='37'){
                        console.log("left");
                    }
                    uploadBackground(); uploadrover(); } }
                    function right() { if(rover_x <=750) { rover_x = rover_x +10;
                     console.log("When up right is pressed, x = " + rover_y + " | y = " +rover_x);
                     if(keyPressed=='39'){
                        console.log("right");
                    }
                    uploadBackground(); uploadrover(); } }
                   
                    