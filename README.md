#face drawer

Face detection and tracking with [headtrackr](https://github.com/auduno/headtrackr)  

Drawing with [HTML5 canvas](http://www.html5canvastutorials.com/tutorials/html5-canvas-tutorials-introduction/)

Current version tracks your face via webcam and places a party hat on top of your head.

**Demo**:  http://alyssaq.github.io/face-trackr-canvas/

##Usage
1) Install nodejs. The only node module dependency is express.   
2) To grab node dependencies, run:

    > npm install  

3) Enable getUserMedia() in chrome.   
In the URL, type: chrome://flags  and search and enable: 
   
> **Enable screen capture support in getUserMedia()**
       
4) To run in the project folder:

    > node app.js

5) Have fun! Draw more shapes!

##To be added features

 - Moving head to right draws a new canvas shape   
 - Shapes can be moved based on head directional movement

##Nice to have features
 - Shapes should not be able to move into the area where head is detected.
 - Shapes should be not able to overlap. If they collide, just move in the opposite direction
 - Could colour code the shapes: if blue circle collide, they explode. if a blue and red circle collides, a new circle is created.