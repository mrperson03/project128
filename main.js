sound1 = "";
sound2 = "";
righteyeX = 0;
righteyeY = 0;
lefteyeX = 0;
lefteyeY = 0;

function preload() {
    sound1 = loadSound('music.mp3');
    sound2 = loadSound('music2.mp3');
  }
  
  function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
  
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function modelLoaded() {
    console.log("posenet is initialized");
  }
  

  function gotPoses(results) {
    if(results.length > 0) {
      console.log(results);
      lefteyeX = results[0].pose.leftEye.x;
      lefteyeY = results[0].pose.leftEye.y;
      console.log("lefteyex = " + lefteyeX + "lefteyey = " + lefteyeY);
      righteyeX = results[0].pose.rightEye.x;
      righteyeY = results[0].pose.rightEye.y;
      console.log("righteyex = " + righteyeX + "righteyey = " + righteyeY);
  
    }
  }
  
  function draw() {
      background("white")
      image(video, 0, 0, 350, 350)
  }
