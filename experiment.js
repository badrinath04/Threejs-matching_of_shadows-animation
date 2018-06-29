var div;

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'style.css');
document.getElementsByTagName('head')[0].appendChild(link);

/* Global Variables */
/* the developer should define variables and constants here */
/* We define a room with 3 walls, floor and ceiling */
/* We define a ball which bounces in the xy plane */
/* We define modifiable prameters : gravity, ball size, initial velocity */
/* We support draggable ball */
/* Scene Dimensions (in meters: at z = 0) */
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

/* Room Variables */
var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */
var myFloor;            /* Floor */
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;             /* Left */
var floor;
/* Ball variables */
var myBall;             /* Ball Object */
var myBallRadius;       /* Radius */        /* Y Acceleration */
var myBallZ;            /* Z Position for placing ball */
var light2;
var topside,topside1,topside3,rtopside,rtopside1,rtopside3;
var stool,ballshadow,boxshadow,tubeshadow,hamshadow,stoolshadow;
var thehammer;
/* Parameters, Variables */
var gravityX;           /* X component of Gravity in m/S2 */
var gravityY;           /* Y component of Gravity in m/S2 */

    /* Y Acceleration Slider Step */
var checkrotate=1;
var checkdrag=0;
 var manager;
 var dice;
 var light1,rope1,rope2,cylinder,sphere;


function initialiseControlVariables()
{
    
}

var rotation=0;

function initialiseControls()
{

    PIEaddInputCommand("Learn",learn);
    var parameters = 
        {
            Rotation:   function() { permitRotation(); },
            NoRotation:   function() { denyRotation(); },
            nothing:   function() { Nothing(); }
        };
        view = this;
        view.RotateObjects = false;
        view.MoveObjects = true;    
        
        //PIEinputGUI.add(parameters,'nothing').name("Movements :");  
            
        var CB1Controller = PIEinputGUI.add(view, 'RotateObjects').listen();
        CB1Controller.onChange(function(value){
                view.RotateObjects = true;
                view.MoveObjects = false;
                
                permitRotation();
        });
        
        var CB2Controller = PIEinputGUI.add(view, 'MoveObjects').listen();
        CB2Controller.onChange(function(value)
        {
            view.RotateObjects = false;
            view.MoveObjects = true;
            
            denyRotation();
        });

        PIEaddInputCommand("Next",next1);
PIEaddInputCommand("Asessment",opennav);

}


var geometry,flag=0,plane1,bulb1,bulb2,boy1,boy2,boyshadow;



function next1(){

    PIEstartAnimation();
    
     flag=0;

    if (document.getElementById('last1').style.display=="block") {
                   geometry=new THREE.PlaneGeometry(2.2,2.2);
    ballshadow=createMesh(geometry,"asset2.png");
    ballshadow.visible=true;
    PIEaddElement(ballshadow);
    PIErender();
     ballshadow.position.set(myCenterX, myCenterY-0.1,-8);
        PIErender();
    }

        document.getElementById('last1').style.display="none";
        //document.getElementById('notes1').style.display="block";
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="none";
        PIErender();
        cylinder.position.set(mySceneTLX+0.5,myCenterY-0.2,0);
         thehammer.position.set(mySceneTLX+0.7,myCenterY-0.2,-3);
        sphere.position.set(mySceneTLX+0.7,myCenterY-0.2,-1);
    Donut.position.set(mySceneBRX-0.5,myCenterY-0.27,0.5);
    dice.position.set(mySceneBRX-0.5,myCenterY-0.27,-2);
            PIErender();


            if(ballshadow.visible==true){
                 
                 PIEremoveElement(ballshadow);
                 ballshadow.visible=false;
                 PIErender();
                tubeshadow.visible=true;
                PIErender();
            }
            else if(tubeshadow.visible==true){
                ballshadow.visible==false;
                PIEremoveElement(tubeshadow);
                tubeshadow.visible=false;
                boxshadow.visible=true;
                hamshadow.visible=false;
                stoolshadow.visible=false;
                PIErender();
            }
            else if(boxshadow.visible==true){
                ballshadow.visible=false;
                tubeshadow.visible=false;
                PIEremoveElement(boxshadow);
                boxshadow.visible=false;
                hamshadow.visible=false;
                stoolshadow.visible=true;
            }
            else if(stoolshadow.visible==true){
                  PIEremoveElement(stoolshadow);
                stoolshadow.visible=false;
                ballshadow.visible=false;
                tubeshadow.visible=false;
                boxshadow.visible=false;
                hamshadow.visible=true;
              
            }
            else if(hamshadow.visible==true){
                ballshadow.visible=false;
                tubeshadow.visible=false;
                boxshadow.visible=false;
                PIEremoveElement(hamshadow);
                hamshadow.visible=false;
                stoolshadow.visible=false;
                 document.getElementById('notes1').style.display="none";
                document.getElementById('notes5').style.display="block";
            }

             if (bulb1.visible==true) {
        experimentagain();
    PIErender();
     }
}

var ballshadow1,tubeshadow1,boxshadow1,stoolshadow1,hamshadow1;

function opennav(){
    //experimentagain();
     flag=0;
    PIEstartAnimation();
    PIEremoveElement(ballshadow);
     ballshadow.visible=false;
     PIErender();
     PIEremoveElement(tubeshadow);
     tubeshadow.visible=false;
     PIErender();
     PIEremoveElement(boxshadow);
     boxshadow.visible=false;
     PIErender();
     PIEremoveElement(stoolshadow);
     stoolshadow.visible=false;
     PIErender();
     PIEremoveElement(hamshadow);
     hamshadow.visible=false;
     PIErender();


      cylinder.position.set(mySceneTLX+0.5,myCenterY-0.2,0);
         thehammer.position.set(mySceneTLX+0.7,myCenterY-0.2,-3);
        sphere.position.set(mySceneTLX+0.7,myCenterY-0.2,-1);
    Donut.position.set(mySceneBRX-0.5,myCenterY-0.27,0.5);
    dice.position.set(mySceneBRX-0.5,myCenterY-0.27,-2);
            PIErender();

    document.getElementById('notes5').style.display="none";
    document.getElementById('last1').style.display="none";
    document.getElementById('notes1').style.display="none";
    PIEstartAnimation();
    PIEremoveElement(ballshadow);
document.getElementById("mySidenav").style.width = "25%";
document.getElementById('wrong').style.display="none";
    document.getElementById('correct').style.display="none";
geometry=new THREE.PlaneGeometry(2.2,2.2);
    ballshadow1=createMesh(geometry,"asset2.png");
    ballshadow1.visible=true;
    PIEaddElement(ballshadow1);
     ballshadow1.position.set(myCenterX, myCenterY-0.6,-8);
    PIErender();

     geometry=new THREE.PlaneGeometry(2.2,2.2);
    tubeshadow1=createMesh(geometry,"asset5.png");
    // tubeshadow1.position.set(myCenterX, myCenterY-0.1,-8);
    tubeshadow1.visible=true;
    PIEaddElement(tubeshadow1);
     tubeshadow1.position.set(myCenterX-0.3, myCenterY+1.1,-8);
    PIErender();


    geometry=new THREE.PlaneGeometry(2.1,2.1);
    boxshadow1=createMesh(geometry,"asset4.png");
    // boxshadow1.position.set(myCenterX, myCenterY-0.1,-8);
     boxshadow1.visible=true;
    PIEaddElement(boxshadow1);
     boxshadow1.position.set(myCenterX-1.4, myCenterY+0.5,-8);
    PIErender();

       geometry=new THREE.PlaneGeometry(2.1,1.3);
    hamshadow1=createMesh(geometry,"assest1.png");
    // hamshadow1.position.set(myCenterX, myCenterY-0.1,-8);
    hamshadow1.visible=true;
    PIEaddElement(hamshadow1);
     hamshadow1.position.set(myCenterX+1.4, myCenterY,-8);
    PIErender();

      geometry=new THREE.PlaneGeometry(2.1,2.2);
    stoolshadow1=createMesh(geometry,"asset3.png");
    stoolshadow1.visible=true;
    PIEaddElement(stoolshadow1);
     stoolshadow1.position.set(myCenterX+1, myCenterY+1.1,-8);
    PIErender();
// document.getElementsByClassName("closebtn").style.display="inline-block";


var materialFront = new THREE.MeshBasicMaterial( { color: 0x2dcc22 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();
    loader.load( 'optimer_bold.typeface.js', function ( font ) {   
        var textGeom = new THREE.TextGeometry("3", 
        {
            size: 0.3, height: 0.1, curveSegments: 10,
            font: font, weight: "normal", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        te1 = new THREE.Mesh(textGeom, textMaterial );
        te1.position.set(tubeshadow1.position.x-0.1,tubeshadow1.position.y-0.1,tubeshadow1.position.z);
        
        PIEaddElement(te1);
         te1.visible=true;
        PIErender();
        
    });

    loader.load( 'optimer_bold.typeface.js', function ( font ) {   
        var textGeom1 = new THREE.TextGeometry("5", 
        {
            size: 0.3, height: 0.1, curveSegments: 10,
            font: font, weight: "normal", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        te2 = new THREE.Mesh(textGeom1, textMaterial );
        te2.position.set(boxshadow1.position.x,boxshadow1.position.y,boxshadow1.position.z);
        
        PIEaddElement(te2);
         te2.visible=true;
        PIErender();
        
    });

    loader.load( 'optimer_bold.typeface.js', function ( font ) {   
        var textGeom2 = new THREE.TextGeometry("4", 
        {
            size: 0.3, height: 0.1, curveSegments: 10,
            font: font, weight: "normal", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        te3 = new THREE.Mesh(textGeom2, textMaterial );
        te3.position.set(ballshadow1.position.x,ballshadow1.position.y,ballshadow1.position.z);
        
        PIEaddElement(te3);
         te3.visible=true;
        PIErender();
        
    });

    loader.load( 'optimer_bold.typeface.js', function ( font ) {   
        var textGeom3 = new THREE.TextGeometry("2", 
        {
            size: 0.3, height: 0.1, curveSegments: 10,
            font: font, weight: "normal", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        te4 = new THREE.Mesh(textGeom3, textMaterial );
        te4.position.set(stoolshadow1.position.x,stoolshadow1.position.y,stoolshadow1.position.z);
        
        PIEaddElement(te4);
         te4.visible=true;
        PIErender();
        
    });


       loader.load( 'optimer_bold.typeface.js', function ( font ) {   
        var textGeom4 = new THREE.TextGeometry("1", 
        {
            size: 0.3, height: 0.1, curveSegments: 10,
            font: font, weight: "normal", style: "normal",
            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            material: 0, extrudeMaterial: 0
        });  
    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        te5 = new THREE.Mesh(textGeom4, textMaterial );
        te5.position.set(hamshadow1.position.x,hamshadow1.position.y,hamshadow1.position.z);
        
        PIEaddElement(te5);
         te5.visible=true;
        PIErender();
        
    });

       if (bulb1.visible==true) {
        experimentagain();
    PIErender();
     }
        }


var ans1,ans2,ans3,ans4,ans5;


function submit1(){
 flag=0;
            ans1=document.getElementById("input1").value;
            ans2=document.getElementById("input2").value;
            ans3=document.getElementById("input3").value;
            ans4=document.getElementById("input4").value;
            ans5=document.getElementById("input5").value;
            if (ans1==1 && ans2==4 && ans3==5 && ans4==2 && ans5==3) {
            document.getElementById('wrong').style.display="none";
                document.getElementById('correct').style.display="block";
            }
            else{
                document.getElementById('wrong').style.display="block";
                document.getElementById('correct').style.display="none";
            }
}


var te1,te2,te3,te4,te5;

function closeNav() 
{

               PIEstartAnimation();
               
                flag=0;
               boxshadow.visible=false;
                ballshadow.visible=false;
                tubeshadow.visible=false;
                stoolshadow.visible=false;
                hamshadow.visible=false;
               PIEremoveElement(ballshadow1);
               ballshadow1.visible=false;
                PIEremoveElement(tubeshadow1);
               tubeshadow1.visible=false;
                PIEremoveElement(boxshadow1);
               boxshadow1.visible=false;
                PIEremoveElement(stoolshadow1);
               stoolshadow1.visible=false;
                PIEremoveElement(hamshadow1);
               hamshadow1.visible=false;
               te1.visible=false;
               te2.visible=false;
               te3.visible=false;
               te4.visible=false;
               te5.visible=false;
                cylinder.position.set(mySceneTLX+0.5,myCenterY-0.2,0);
                     thehammer.position.set(mySceneTLX+0.7,myCenterY-0.2,-3);
                    sphere.position.set(mySceneTLX+0.7,myCenterY-0.2,-1);
                Donut.position.set(mySceneBRX-0.5,myCenterY-0.27,0.5);
                dice.position.set(mySceneBRX-0.5,myCenterY-0.27,-2);
                document.getElementById('last1').style.display="block";
            document.getElementById("mySidenav").style.width = "0%";
             // document.getElementsByClassName("closebtn").style.display="none";
             if (bulb1.visible==true) {
                experimentagain();
             }
     }

function Nothing()
{

}
function permitRotation()
{
    rotation = 1;
}
function denyRotation()
{
    rotation = 0;
}



var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Match shadows to objects</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows shadows of various household objects produced by the glowing bulb provided in the room.</p>";
    helpContent = helpContent + "<h3>Starting of Experiment :</h3>";
    helpContent = helpContent + "<p>At starting the animation shows a shadow of an object on the screen. Student needs to select the object which can produce the shadow displayed on the screen.If student choose correct answer it shows correct otherwise wrong. And student has to proceed further by clicking <b>Next</b> Button</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls which contains some buttons and checkboxes.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    // helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to five sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    // helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<p>Checkbox 'Rotate Objets' : Onclicking this checkbox student will able to rotate the objects there by knowing about shadows effectively. </p>";
    helpContent = helpContent + "<p>Check box 'Move Objects' : Onclicking this checkbox student will able to move the objects(drag & drop)</p>";
    helpContent = helpContent + "<p>Button 'Next' : Onclicking this button it will show shadow of another object and student has to select the object whick can produc that shadow.</p>";
    helpContent = helpContent + "<p>Button 'Asessment' : Onclicking this Button student will get a side window which asks some information about shadows of objects.</p>";
     helpContent = helpContent + "<h3>Final stage</h3>";
      helpContent = helpContent + "<p>After completing asessment student will able to rotate and drag the objects to know about shadows at every angle produced by the bulb provided in the room.</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Match shadows to objects</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows shadows of various household objects produced by the glowing bulb provided in the room.</p>";
    infoContent = infoContent + "<h3>Shadow</h3>";
    infoContent = infoContent + "<p>A shadow is a dark area where light from a light source is blocked by an opaque object. It occupies all of the three-dimensional volume behind an object with light in front of it. The cross section of a shadow is a two-dimensional silhouette, or a reverse projection of the object blocking the light..</p>";
    infoContent = infoContent + "<h3>Theory</h3>";
    infoContent = infoContent + "<p>The experiment is about matching objects with shadows.According to the directions provided in the animation student has to proceed further to complete the given asessment.</p>";

    // infoContent = infoContent + "<p>At the time of impact, the ball is deformed because of the force of the wall. This deformation can be easily observed with a sponge ball. If you drop a ball of dough on the floor, it does not bounce, it is only deformed.</p>";
    // infoContent = infoContent + "<p>The harder balls are also deformed. But because of the hard nature of the meterial, the hard ball tries to regain it's shape. This attempt to reain the shape reverses the velocity by pushing aainst the wall.</p>";
    // infoContent = infoContent + "<p>When the ball collides with the left or the right wall, the velocity in the X direction reverses while the velocity in the Y direction reamains the same.</p>";
    // infoContent = infoContent + "<p>When the ball collides with the top or the bottom wall, the velocity in the Y direction reverses while the velocity in the Y direction reamains the same.</p>";
    // infoContent = infoContent + "<h3>The coefficient of restitution</h3>";
    // infoContent = infoContent + "<p>When the velocity reverses direction, it is not necessary that it's magnitude remains the same.</p>";
    // infoContent = infoContent + "<p>The ball may not retain it's original shape and texture. The cricket ball loses it's shine.</p>";
    // infoContent = infoContent + "<p>Some of the energy is lost because of the deformation of the ball. The energy loss means that the kinetic energy of the ball will be reduced after impact.</p>";
    // infoContent = infoContent + "<p>The coefficient of restitution specifies how much of the velocity will be retained after impact.</p>";
    // infoContent = infoContent + "<p>The coefficient of restitution does not affect te velocity in the direction parallel to the impact.</p>";
    // infoContent = infoContent + "<p>When the ball collides with the left or the right wall, the magnitude of the velocity in the X direction will reduce as per the coefficient of restitution. The magnitude and sign in Y direction remains the same.</p>";
    // infoContent = infoContent + "<p>When the ball collides with the top or the bottom wall, the magnitude of the velocity in the Y direction will reduce as per the coefficient of restitution. The magnitude and sign in X direction remains the same.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    //myBallZ    = -2.0;
}

function initialiseOtherVariables()
{

    
    /* Initialise variables */
    myBallRadius = mySceneW/30.0;
    wallThickness = 0.20;

    /* Gravity */
    gravityX = 0.0;
    gravityY = -9.8;

    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}





function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;

    PIEsetExperimentTitle("Match shadows to objects");
    PIEsetDeveloperName("Bonthu Badrinath");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();
    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

 
        createfloor();
        createtop();
        createtop2();
        createtop3();
       creatertop();
       creatertop2();
       creatertop3();
       
       
        geometry=new THREE.PlaneGeometry(0.1,0.4);
    var bulb=createMesh(geometry,"bulb1.png");
    // bulb.position.set(myCenterX-0.7,myCenterY+0.1,4);
    bulb.position.set(myCenterX+0.7,myCenterY+0.1,4);
    PIEaddElement(bulb);
    // bulb.rotateZ(-Math.PI/100);
    bulb.rotateZ(Math.PI/100);
    PIErender();
       
    /* Left */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshPhongMaterial( {color: 0x44adb8} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB-(wallThickness/2), myCenterY+1, 0.0);
    //myLeft.receiveShadow = true;
    PIEaddElement(myLeft);
    /* Right */
    geometry = new THREE.BoxGeometry( wallThickness, mySceneH * 2, 100 );
    material = new THREE.MeshPhongMaterial( {color: 0x44adb8,} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB+(wallThickness/2), myCenterY+1, 0.0);
    //myRight.receiveShadow = true;
    PIEaddElement(myRight);
    /* Back */
    // material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, map: texture } );
    // geometry = new THREE.PlaneBufferGeometry( mySceneW * 2, mySceneH * 2 );

  geometry = new THREE.BoxGeometry( mySceneW * 2, mySceneH * 2, wallThickness );
    material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY+1, backB - (wallThickness / 2)-4);
    myBack.receiveShadow = true;
    PIEaddElement(myBack);




     geometry=new THREE.PlaneGeometry(2.2,2.2);
    ballshadow=createMesh(geometry,"asset2.png");
    ballshadow.visible=true;
    PIEaddElement(ballshadow);
     ballshadow.position.set(myCenterX, myCenterY-0.1,-8);
    PIErender();

    geometry=new THREE.PlaneGeometry(2.2,2.2);
    tubeshadow=createMesh(geometry,"asset5.png");
    // tubeshadow.position.set(myCenterX, myCenterY-0.1,-8);
    tubeshadow.visible=false;
    PIEaddElement(tubeshadow);
     tubeshadow.position.set(myCenterX, myCenterY-0.1,-8);
    PIErender();

    geometry=new THREE.PlaneGeometry(2.1,2.1);
    boxshadow=createMesh(geometry,"asset4.png");
    // boxshadow.position.set(myCenterX, myCenterY-0.1,-8);
     boxshadow.visible=false;
    PIEaddElement(boxshadow);
     boxshadow.position.set(myCenterX, myCenterY-0.1,-8);
    PIErender();

       geometry=new THREE.PlaneGeometry(2.1,1.3);
    hamshadow=createMesh(geometry,"assest1.png");
    // hamshadow.position.set(myCenterX, myCenterY-0.1,-8);
    hamshadow.visible=false;
    PIEaddElement(hamshadow);
     hamshadow.position.set(myCenterX, myCenterY-0.1,-8);
    PIErender();
    
    geometry=new THREE.PlaneGeometry(2.1,2.2);
    stoolshadow=createMesh(geometry,"asset3.png");
    stoolshadow.visible=false;
    PIEaddElement(stoolshadow);
     stoolshadow.position.set(myCenterX, myCenterY-0.1,-8);
    PIErender();

    // var controls = new THREE.OrbitControls( PIEcamera, PIErenderer.domElement );
    // controls.addEventListener( 'change', PIErender );

     geometry = new THREE.CylinderGeometry( 0.09, 0.09, 0.4, 64 );
     material = new THREE.MeshPhongMaterial( {color: 0x9f643a} );
     cylinder = new THREE.Mesh( geometry, material );
    cylinder.visible=true;
    cylinder.receiveShadow=true;
      cylinder.castshadow=true;
   
    PIEaddElement(cylinder);
    PIEdragElement(cylinder);
    PIEsetDrag(cylinder, myBallDrag);
    PIEsetClick(cylinder, clickstool);
    PIErender();


     geometry = new THREE.CylinderGeometry( 0.25, 0.25, 0.04, 64 );
     material = new THREE.MeshPhongMaterial( {color: 0x9f643a} );
     cylinder2 = new THREE.Mesh( geometry, material );
    cylinder2.visible=true;
    cylinder2.receiveShadow=true;
      cylinder2.castshadow=true;
    PIEaddElement(cylinder2);
    cylinder2.position.set(mySceneTLX,myCenterY-1.3,0);
    cylinder.add(cylinder2);
    
    //PIEdragElement(cylinder2);
    //PIEsetDrag(cylinder2, myBallDrag2);
     cylinder.position.set(mySceneTLX+0.5,myCenterY-0.2,0);
     cylinder.rotateX(Math.PI/20);
    PIErender();




var geometry = new THREE.SphereGeometry(0.2,40,40,0,6.3,0,6.3);
//var geometry = new THREE.SphereGeometry(0.2,40,40);
    var texture = THREE.ImageUtils.loadTexture( 'ball1.png');
    
    
    sphere = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture  }));
    PIEaddElement(sphere);
    sphere.position.set(mySceneTLX+0.7,myCenterY-0.2,-1);
    PIEdragElement(sphere);
    sphere.receiveShadow=true;
    sphere.castshadow=true;
    PIEsetDrag(sphere,mydrag);
    PIEsetClick(sphere, clickball);




 var loader=new THREE.JSONLoader();
    loader.load("hammer1.json", function(geometry, materials) {
    thehammer = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
        thehammer.scale.y = 0.09;
        thehammer.scale.z=thehammer.scale.x = 0.05;
        thehammer.translation = geometry.center();
        thehammer.castShadow=thehammer.receiveShadow=true;
        thehammer.position.set(mySceneTLX+0.9,myCenterY-0.2,-3.3);
        PIEaddElement(thehammer);
      
         PIEdragElement(thehammer);
        PIEsetDrag(thehammer, hamdrag);
        PIEsetClick(thehammer, clickhammer);
        PIErender();
    });




var geometry = new THREE.TorusGeometry( 0.15, 0.07, 30, 200 ,6.3);
    var texture = THREE.ImageUtils.loadTexture( 'texture.png');
    Donut = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  }));
    PIEaddElement(Donut);
    Donut.position.set(mySceneBRX-0.5,myCenterY-0.27,0.5);
    //Donut.rotation.x = -0.85;
     PIEdragElement(Donut);
    PIEsetDrag(Donut,myDonutdrag);
    PIEsetClick(Donut, clickdonut);
    Donut.receiveShadow = true;


var geometry = new THREE.CubeGeometry( 0.3, 0.3, 0.3, 1, 1, 1 );
    var texture = THREE.ImageUtils.loadTexture( 'cube1.jpg');
 dice = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial( { map : texture, side: THREE.DoubleSide  }));
    dice.position.set(mySceneBRX-0.5,myCenterY-0.27,-2);
     PIEaddElement(dice);
    PIEdragElement(dice);
    PIEsetDrag(dice,mydicedrag);
    PIEsetClick(dice, clickdice);






    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
   // resetExperiment();
    //  controls.minPolarAngle = -Math.PI/5;
    // controls.maxPolarAngle = Math.PI/5;
    // controls.minAzimuthAngle = 0;
    // controls.maxAzimuthAngle = 0;
  
PIEcamera.rotateX(-Math.PI/40);


a=document.createElement('div');
 a.setAttribute('class','sidenav');
    a.setAttribute('id', 'mySidenav')
document.body.appendChild(a);


 var y12 = document.createElement("H1");
 t12 = document.createTextNode("X");
    y12.setAttribute('class','closebtn');
     y12.setAttribute('id', 'text12');
    y12.appendChild(t12);
    // a.appendChild(y1);
    //document.body.appendChild(y1);
c = document.createElement('a');
c.setAttribute('class', 'link');
c.setAttribute('href', 'javascript:void(0)');
c.setAttribute('onclick','closeNav()');
c.appendChild(y12);
a.appendChild(c);



z1 = document.createElement("H2");
     z2 = document.createTextNode("Fill out every field with it's respective shadow numbers : ");
     z1.setAttribute('id', 'text');
    z1.appendChild(z2);
    a.appendChild(z1);





 var y1 = document.createElement("H2");
    var t1 = document.createTextNode("Hammer : ");
     y1.setAttribute('id', 'text1');
    y1.appendChild(t1);
    a.appendChild(y1);
    //document.body.appendChild(y1);

    var y2 = document.createElement("H2");
    var t2 = document.createTextNode("Ball : ");
     y2.setAttribute('id', 'text2');
    y2.appendChild(t2);
    a.appendChild(y2);
    //document.body.appendChild(y2);

    var y3 = document.createElement("H2");
    var t3 = document.createTextNode("Rubix Cube : ");
     y3.setAttribute('id', 'text3');
    y3.appendChild(t3);
    a.appendChild(y3);
    //document.body.appendChild(y3);

    var y4 = document.createElement("H2");
    var t4 = document.createTextNode("Table : ");
     y4.setAttribute('id', 'text4');
    y4.appendChild(t4);
    a.appendChild(y4);

    var y5 = document.createElement("H2");
    var t5 = document.createTextNode("Swimtube : ");
     y5.setAttribute('id', 'text5');
    y5.appendChild(t5);
    a.appendChild(y5);
    //document.body.appendChild(y4);

 var x1 = document.createElement("INPUT");
    x1.setAttribute("type", "num");
    x1.setAttribute('class','input');
    x1.setAttribute('id', 'input1');
    a.appendChild(x1);
    //document.body.appendChild(x1);
    
var x2 = document.createElement("INPUT");
    x2.setAttribute("type", "num");
    x2.setAttribute('class','input');
    x2.setAttribute('id', 'input2');
    a.appendChild(x2);
    //document.body.appendChild(x2);

    var x3 = document.createElement("INPUT");
    x3.setAttribute("type", "num");
    x3.setAttribute('class','input');
    x3.setAttribute('id', 'input3');
    a.appendChild(x3);
    //document.body.appendChild(x3);

    var x4 = document.createElement("INPUT");
    x4.setAttribute("type", "num");
    x4.setAttribute('class','input');
    x4.setAttribute('id', 'input4');
    a.appendChild(x4);


    var x5 = document.createElement("INPUT");
    x5.setAttribute("type", "num");
    x5.setAttribute('class','input');
    x5.setAttribute('id', 'input5');
    a.appendChild(x5);
    //document.body.appendChild(x4);



div = document.createElement("div");                            /* div for submit option */
    div.setAttribute('class','label');
    div.setAttribute('id', 'submit');
    div.setAttribute('onclick','submit1()');
    div.innerHTML= "Submit";
    //document.body.appendChild(div);
a.appendChild(div);


correct1 = document.createElement("H2");
     correct2 = document.createTextNode(" Well done Correct Observation ");
     correct1.setAttribute('id', 'correct');
    correct1.appendChild(correct2);
    a.appendChild(correct1);
document.getElementById('correct').style.display="none";

    wrong1 = document.createElement("H2");
     wrong2 = document.createTextNode(" Wrong Observation Fill all fields correctly");
     wrong1.setAttribute('id', 'wrong');
    wrong1.appendChild(wrong2);
    a.appendChild(wrong1);
document.getElementById('wrong').style.display="none";

    document.body.appendChild(a);


// PIEcamera.position.x=mySceneBRX-0.3 ;
//   PIEcamera.position.y=myCenterY;
//   PIEcamera.position.z=5;
// PIEcamera.rotateX(-Math.PI/40);
// PIEcamera.rotateY(Math.PI/20)
a1 = document.createElement("H2");
     a2 = document.createTextNode("Select the object which can produce the shadow displayed on screen");
     a1.setAttribute('id', 'notes1');
    a1.appendChild(a2);
    document.body.appendChild(a1);
    document.getElementById('notes1').style.display="block";



    var abc1 = document.createElement("H2");
     abc2 = document.createTextNode("Now you can observe shadow of each object on screen by moving and rotating the objects");
     abc1.setAttribute('id', 'last1');
    abc1.appendChild(abc2);
    document.body.appendChild(abc1);
document.getElementById('last1').style.display="none";

// a3 = document.createElement("H2");
//      a4 = document.createTextNode("shadow displayed on screen ");
//      a3.setAttribute('id', 'notes2');
//     a3.appendChild(a4);
//     document.body.appendChild(a3);


    a5 = document.createElement("H2");
     a6 = document.createTextNode("Correct Object..  Click next ");
     a5.setAttribute('id', 'notes3');
    a5.appendChild(a6);
    document.body.appendChild(a5);
    document.getElementById('notes3').style.display="none";

     a7 = document.createElement("H2");
     a8 = document.createTextNode("Wrong Object.. select correct object ");
     a7.setAttribute('id', 'notes4');
    a7.appendChild(a8);
    document.body.appendChild(a7);
    document.getElementById('notes4').style.display="none";

    a9 = document.createElement("H2");
     a10 = document.createTextNode("Success..  Now complete the Asessment");
     a9.setAttribute('id', 'notes5');
    a9.appendChild(a10);
    document.body.appendChild(a9);
     document.getElementById('notes5').style.display="none";



light2 = new THREE.SpotLight(0xffffff, 1.5);
    light2.position.set(myCenterX,myCenterY,0);
    light2.target=cylinder;
    //light2.target.position.set(myCenterX, myCenterY+3, backB - (wallThickness / 2)-10);
    light2.angle=15;
    light2.distance=200;
    light2.penumbra = 1;
    light2.decay=1;
    light2.rotateY(Math.PI/2);
    light2.target.updateMatrixWorld();
    light2.visible=true;
  

   PIEstartAnimation();
   flag=0;
}
var a,b,c,d,e,f,g,h,y12,t12,cone,Donut,table,l1,l2,l3,l4,pipe,path,cylinder2,basket,baskettop,y1,y2,y3,y4,y5,y6,t1,t2,t3,t4,t5,t6,x1,x2,x3,x4,x5,x6,z1,z2,z3,z4;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,correct2,correct1,wrong1,wrong2;
   function CustomSinCurve( scale ) {
    THREE.Curve.call( this );
    this.scale = ( scale === undefined ) ? 1 : scale;

}



function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       PIErender();
       return mesh;

}
function clickdonut(){
    if (tubeshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (ballshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (boxshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (stoolshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (hamshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
}


function myDonutdrag(element,newpos){
      document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="none";
 var cenx2=newpos.x;
    var ceny2=newpos.y;
    var cenz2=newpos.z;
    if (rotation==1) {
        Donut.rotation.x=cenz2;
 Donut.rotation.y = cenx2;
        Donut.rotation.z = ceny2;
    }
    else{
         if(cenx2<=mySceneTLX+0.5){
        cenx2=mySceneTLX+0.5;
    }
    if(cenx2>=mySceneBRX-0.3){
        cenx2=mySceneBRX-0.3;
    }
    if(ceny2<=mySceneBRY+1.21){
        ceny2=mySceneBRY+1.21;
    }
    if (ceny2>=mySceneTLY-0.5) {
        ceny2=mySceneTLY-0.5;
    }
     Donut.position.set(cenx2,ceny2,cenz2);
    }
    if (tubeshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (ballshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (boxshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (stoolshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (hamshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }

}

function clickball(){
 if (ballshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (tubeshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (boxshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (stoolshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (hamshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
}

function mydrag(element,newpos){
//console.log("sphere");
     document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="none";
 var cenx1=newpos.x;
    var ceny1=newpos.y;
    var cenz1=newpos.z;
    var xval=false;
   // var myBallRadius = mySceneW/30.0;
   if(rotation==1){
sphere.rotation.x=cenz1;
 sphere.rotation.y = cenx1;
        sphere.rotation.z = ceny1;
        //cylinder.rotation.z=cenz;  
    
   }
    else{
if(cenx1<=mySceneTLX+0.55){
        cenx1=mySceneTLX+0.55;
    }
    if(cenx1>=mySceneBRX-0.3){
        cenx1=mySceneBRX-0.3;
    }
    if(ceny1<=mySceneBRY+1.2){
        ceny1=mySceneBRY+1.2;
    }
    if (ceny1>=mySceneTLY-0.5) {
        ceny1=mySceneTLY-0.5;
    }

         sphere.position.set(cenx1,ceny1,cenz1);
    
    }

    if (ballshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (tubeshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (boxshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (stoolshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (hamshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    
}

function clickhammer(){
if (hamshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (tubeshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (boxshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (stoolshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (ballshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
}

function hamdrag(element,newpos){
         document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="none";
var cenx2=newpos.x;
    var ceny2=newpos.y;
    var cenz2=newpos.z;
    var xval=false;
   // var myBallRadius = mySceneW/30.0;
   if(rotation==1){
thehammer.rotation.x=cenz2;
 thehammer.rotation.y = cenx2;
        thehammer.rotation.z = ceny2;
        //cylinder.rotation.z=cenz;  
    
   }
    else{
if(cenx2<=mySceneTLX+0.7){
        cenx2=mySceneTLX+0.7;
    }
    if(cenx2>=mySceneBRX-0.45){
        cenx2=mySceneBRX-0.45;
    }
    if(ceny2<=mySceneBRY+1.2){
        ceny2=mySceneBRY+1.2;
    }
    if (ceny2>=mySceneTLY-0.5) {
        ceny2=mySceneTLY-0.5;
    }

         thehammer.position.set(cenx2,ceny2,cenz2);
    
    }
    if (hamshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (tubeshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (boxshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (stoolshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (ballshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
}

function clickdice(){
     if (boxshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (tubeshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (ballshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (stoolshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (hamshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
}

function mydicedrag(element,newpos){
         document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="none";
 var cenx=newpos.x;
    var ceny=newpos.y;
    var cenz=newpos.z;
    if(rotation==1){
        dice.rotation.x=cenz;
 dice.rotation.y = cenx;
        dice.rotation.z = ceny;
    }
    else{
        if(cenx<=mySceneTLX+0.5){
        cenx=mySceneTLX+0.5;
    }
    if(cenx>=mySceneBRX-0.3){
        cenx=mySceneBRX-0.3;
    }
    if(ceny<=mySceneBRY+1.15){
        ceny=mySceneBRY+1.15;
    }
    if (ceny>=mySceneTLY-0.5) {
        ceny=mySceneTLY-0.5;
    }
    // if (cenx<=mySceneBRX+0.75 && ceny<=myCenterY-0.5-0.5) {
    //     cenx=mySceneBRX+0.75; ceny=myCenterY-0.5-0.5;
    // }
         dice.position.set(cenx,ceny,cenz);
    }
    if (boxshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (tubeshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (ballshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (stoolshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (hamshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    
}

function clickstool(){
     if (stoolshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (tubeshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (boxshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (ballshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (hamshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
}

function myBallDrag(element, newpos)
{
         document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="none";
//console.log("cylinder");
initialiseOtherVariables();
    // initialiseOtherVariables();
  // var cenx=newpos.x;
  //  var ceny=newpos.y;
  //   var cenz=newpos.z;
  //   cylinder.position.set(cenx,ceny,cenz);
    var cenx=newpos.x;
    var ceny=newpos.y;
    var cenz=newpos.z;
    var xval=false;
   // var myBallRadius = mySceneW/30.0;
   if(rotation==1){
cylinder.rotation.x=cenz;
 cylinder.rotation.y = cenx;
        cylinder.rotation.z = ceny;
        //cylinder.rotation.z=cenz;  
    
   }
    else{
if(cenx<=mySceneTLX+0.5){
        cenx=mySceneTLX+0.5;
    }
    if(cenx>=mySceneBRX-0.3){
        cenx=mySceneBRX-0.3;
    }
    // if(ceny<=mySceneBRY+1){
    //     ceny=mySceneBRY+1;
    // }
     if(ceny<=myCenterY-0.3){
        ceny=myCenterY-0.3;
    }
    if (ceny>=mySceneTLY-0.5) {
        ceny=mySceneTLY-0.5;
    }
    // if (cenx<=mySceneBRX+0.75 && ceny<=myCenterY-0.5-0.5) {
    //     cenx=mySceneBRX+0.75; ceny=myCenterY-0.5-0.5;
    // }
         cylinder.position.set(cenx,ceny,cenz);
    
    }
  if (stoolshadow.visible==true) {
        document.getElementById('notes4').style.display="none";
document.getElementById('notes3').style.display="block";
PIEstopAnimation();
    }
    else if (tubeshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (boxshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (ballshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
    else if (hamshadow.visible==true) {
        document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="block";
        PIEstartAnimation();
    }
}



function createfloor(){
var texture = new THREE.TextureLoader().load( 'ground.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture,side: THREE.DoubleSide } );
var geometry = new THREE.PlaneGeometry(mySceneW * 2, 100);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 15, 15 );
          floor = new THREE.Mesh(geometry, material);
            floor.rotateX(-Math.PI/2);
            // floor.position.z = zPosition;
            //floor.receiveShadow = true;
            floor.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
            PIEaddElement(floor);
            // floor.position.y -= mySceneH/2;

    
    
}



function createtop() {
   var texture = new THREE.TextureLoader().load( 'floor2.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture,side: THREE.DoubleSide } );
var geometry = new THREE.PlaneGeometry(1.5,20);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 10,20 );
          topside = new THREE.Mesh(geometry, material);
            topside.rotateX(-Math.PI/2);
            // floor.position.z = zPosition;
            //floor.receiveShadow = true;
            topside.position.set(mySceneTLX,myCenterY-0.5,0);
            PIEaddElement(topside);
             topside.receiveShadow = true;
  

}



function createtop2() {
    var texture = new THREE.TextureLoader().load( 'floor2.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture,side: THREE.DoubleSide } );
var geometry = new THREE.PlaneGeometry(1.5,20);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 10,20 );
          topside1= new THREE.Mesh(geometry, material);
            topside1.rotateX(-Math.PI/2);
            // floor.position.z = zPosition;
            //floor.receiveShadow = true;
            topside1.position.set(mySceneTLX,myCenterY-0.5-0.1,0);
            PIEaddElement(topside1);
             topside1.receiveShadow = true;


}

function createtop3() {
 var texture = new THREE.TextureLoader().load( 'floor2.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture,side: THREE.DoubleSide } );
var geometry = new THREE.PlaneGeometry(0.1,20);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 1,5 );
          topside3= new THREE.Mesh(geometry, material);
            topside3.rotateX(Math.PI/2);
            topside3.rotateY(Math.PI/2);
            // floor.position.z = zPosition;
            //floor.receiveShadow = true;
            topside3.position.set(mySceneTLX+0.75,myCenterY-0.5-0.05,0);
            PIEaddElement(topside3);
             topside3.receiveShadow = true;

    

}


function creatertop() {
   var texture = new THREE.TextureLoader().load( 'floor2.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture,side: THREE.DoubleSide } );
var geometry = new THREE.PlaneGeometry(1.5,20);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 10,20 );
          rtopside = new THREE.Mesh(geometry, material);
            rtopside.rotateX(-Math.PI/2);
            // floor.position.z = zPosition;
            //floor.receiveShadow = true;
            rtopside.position.set(mySceneBRX ,myCenterY-0.5,0);
            PIEaddElement(rtopside);
             rtopside.receiveShadow = true;
   

}



function creatertop2() {
    var texture = new THREE.TextureLoader().load( 'floor2.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture,side: THREE.DoubleSide } );
var geometry = new THREE.PlaneGeometry(1.5,20);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 10,20 );
          rtopside1= new THREE.Mesh(geometry, material);
            rtopside1.rotateX(-Math.PI/2);
            // floor.position.z = zPosition;
            //floor.receiveShadow = true;
            rtopside1.position.set(mySceneBRX,myCenterY-0.5-0.1,0);
            PIEaddElement(rtopside1);
             rtopside1.receiveShadow = true;
 

}

function creatertop3() {
 var texture = new THREE.TextureLoader().load( 'floor2.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture,side: THREE.DoubleSide } );
var geometry = new THREE.PlaneGeometry(0.1,20);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 1,5 );
          rtopside3= new THREE.Mesh(geometry, material);
            rtopside3.rotateX(Math.PI/2);
            rtopside3.rotateY(Math.PI/2);
            // floor.position.z = zPosition;
            //floor.receiveShadow = true;
            rtopside3.position.set(mySceneBRX-1,myCenterY-0.5-0.05+0.1,4.5);
            PIEaddElement(rtopside3);
            PIEdragElement(rtopside3);
             //rtopside3.receiveShadow = true;



}


function resetExperiment()
{
    document.getElementById('notes1').style.display="none";
    PIEstartAnimation();

    

    
         PIEremoveElement(ballshadow);
     ballshadow.visible=false;
     PIErender();
     PIEremoveElement(tubeshadow);
     tubeshadow.visible=false;
     PIErender();
     PIEremoveElement(boxshadow);
     boxshadow.visible=false;
     PIErender();
     PIEremoveElement(stoolshadow);
     stoolshadow.visible=false;
     PIErender();
     PIEremoveElement(hamshadow);
     hamshadow.visible=false;
     PIErender();

    cylinder.position.set(mySceneTLX+0.5,myCenterY-0.2,0);
         thehammer.position.set(mySceneTLX+0.7,myCenterY-0.2,-3);
        sphere.position.set(mySceneTLX+0.7,myCenterY-0.2,-1);
    Donut.position.set(mySceneBRX-0.5,myCenterY-0.27,0.5);
    dice.position.set(mySceneBRX-0.5,myCenterY-0.27,-2);
    PIErender();
    
 
document.getElementById('notes1').style.display="none";

    document.getElementById('last1').style.display="block";
        
     document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="none";

 // geometry=new THREE.PlaneGeometry(2.2,2.2);
 //    ballshadow=createMesh(geometry,"asset2.png");
 //    ballshadow.visible=true;
 //    PIEaddElement(ballshadow);
 //    PIErender();
 //     ballshadow.position.set(myCenterX, myCenterY-0.1,-8);
 //    PIErender();
   


 //     geometry=new THREE.PlaneGeometry(2.2,2.2);
 //    tubeshadow=createMesh(geometry,"asset5.png");
 //    // tubeshadow.position.set(myCenterX, myCenterY-0.1,-8);
 //    tubeshadow.visible=false;
 //    PIEaddElement(tubeshadow);
 //     tubeshadow.position.set(myCenterX, myCenterY-0.1,-8);
 //    PIErender();
   

 //    geometry=new THREE.PlaneGeometry(2.1,2.1);
 //    boxshadow=createMesh(geometry,"asset4.png");
 //    // boxshadow.position.set(myCenterX, myCenterY-0.1,-8);
 //     boxshadow.visible=false;
 //    PIEaddElement(boxshadow);
 //     boxshadow.position.set(myCenterX, myCenterY-0.1,-8);
 //    PIErender();

 //       geometry=new THREE.PlaneGeometry(2.1,1.3);
 //    hamshadow=createMesh(geometry,"assest1.png");
 //    // hamshadow.position.set(myCenterX, myCenterY-0.1,-8);
 //    hamshadow.visible=false;
 //    PIEaddElement(hamshadow);
 //     hamshadow.position.set(myCenterX, myCenterY-0.1,-8);
 //    PIErender();
    
 //    geometry=new THREE.PlaneGeometry(2.1,2.2);
 //    stoolshadow=createMesh(geometry,"asset3.png");
 //    stoolshadow.visible=false;
 //    PIEaddElement(stoolshadow);
 //     stoolshadow.position.set(myCenterX, myCenterY-0.1,-8);
 //    PIErender();
    if (bulb1.visible==true) {
        experimentagain();
        PIErender();
    }
    




                flag=0;
               boxshadow.visible=false;
                ballshadow.visible=false;
                tubeshadow.visible=false;
                stoolshadow.visible=false;
                hamshadow.visible=false;
               PIEremoveElement(ballshadow1);
               ballshadow1.visible=false;
                PIEremoveElement(tubeshadow1);
               tubeshadow1.visible=false;
                PIEremoveElement(boxshadow1);
               boxshadow1.visible=false;
                PIEremoveElement(stoolshadow1);
               stoolshadow1.visible=false;
                PIEremoveElement(hamshadow1);
               hamshadow1.visible=false;
               te1.visible=false;
               te2.visible=false;
               te3.visible=false;
               te4.visible=false;
               te5.visible=false;
                document.getElementById('last1').style.display="block";
            document.getElementById("mySidenav").style.width = "0%";
    PIErender();

    document.getElementById('shadownotes1').style.display="none";
    document.getElementById('shadownotes2').style.display="none";
    document.getElementById('shadownotes3').style.display="none";
    document.getElementById('shadownotes4').style.display="none";
    PIErender();
}


 
 var play=1;
 var rate=0;
 var rate1=0.01;
 var flag2=0;
 var flag3=0;
 var rate3=1;
 var rate4=0;
 var rate5=0;
function updateExperimentElements(t, dt)
{

var boundary=dt/1000;
    var play_time = t/1000;
    if (play_time>1.5 && flag==1) {
        rate=rate+0.01;
    document.getElementById('shadownotes1').style.opacity=rate;
}
     
if (play_time>9 && flag==1) {
    rate1=rate1+0.01;
    document.getElementById('shadownotes2').style.opacity=rate1;
}

if (play_time>14 && flag==1) {
    if (flag2==0) {
  clickoff();
}
  flag2=1;
}

if (play_time>19 && flag==1) {
    rate5=rate5+0.01;
    document.getElementById('shadownotes4').style.opacity=rate5;
}


if (play_time>24 && flag==1) {
    rate4=rate4+0.01;
    document.getElementById('shadownotes3').style.opacity=rate4;
    

}
if (play_time>27 && flag==1) {
    if(flag3==0){
        clickon();
    }
    flag3=1;
    

}


    if(play == 0 && flag==1){


    }



     // if(play_time >= 0.7&&play==1){
     //    PIEstopAnimation();
     //    play=0;

        
     //    }

}


var screen,boyshadow1,boyshadow2,on,off;
function learn(){
    flag=1;
     PIEstartAnimation();
     document.getElementById('notes1').style.display="none";
       document.getElementById('notes3').style.display="none";
        document.getElementById('notes4').style.display="none";
        document.getElementById('last1').style.display="none";
     PIEchangeInputCommand('Learn', 'Experiment', experimentagain);
     var geometry = new THREE.PlaneGeometry( 5, 5, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
 plane1 = new THREE.Mesh( geometry, material );
 plane1.position.set(myCenterX,myCenterY,4.3);
PIEaddElement( plane1 );

  var geometry = new THREE.PlaneGeometry(0.39, 0.25, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x4e5156, side: THREE.DoubleSide} );
 screen = new THREE.Mesh( geometry, material );
 screen.position.set(myCenterX+0.37,myCenterY-0.12,4.8);
 screen.rotateY(-Math.PI/3);
PIEaddElement( screen );


var geometry = new THREE.PlaneGeometry( 0.39, 0.25, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
 screen2 = new THREE.Mesh( geometry, material );
 screen2.position.set(myCenterX+0.37,myCenterY-0.12,4.8);
 screen2.visible=false;
 screen2.rotateY(-Math.PI/3);
PIEaddElement( screen2 );

 geometry=new THREE.PlaneGeometry(0.05,0.03,32);
    bulb1=createMesh(geometry,"bulboff.png");
    bulb1.position.set(myCenterX-0.18,myCenterY-0.07,5.1);
    bulb1.visible=true;
    PIEaddElement(bulb1);
    bulb1.rotateZ(-Math.PI/100);
    PIErender();

    // geometry=new THREE.PlaneGeometry(0.8,0.2,32);
    // bulb2=createMesh(geometry,"lightglow.png");
    // bulb2.position.set(myCenterX-0.01,myCenterY-0.08,5.1);
    // PIEaddElement(bulb2);
    // bulb2.visible=false;
    // //bulb2.rotateZ(-Math.PI/100);
    // PIErender();

     geometry=new THREE.PlaneGeometry(0.8,0.25,32);
    bulb2=createMesh(geometry,"lightglow.png");
    bulb2.position.set(myCenterX+0.18,myCenterY-0.1,4.9);
    PIEaddElement(bulb2);
    bulb2.visible=false;
    //bulb2.rotateZ(-Math.PI/100);
    PIErender();

    //  geometry=new THREE.PlaneGeometry(0.05,0.1,32);
    // boy1=createMesh(geometry,"boy1.png");
    // boy1.position.set(myCenterX,myCenterY-0.07,5.1);
    // PIEaddElement(boy1);
    // //boy1.rotateY(-Math.PI/8);
    // PIErender();

    geometry=new THREE.PlaneGeometry(0.05,0.1,32);
    boy1=createMesh(geometry,"boy1.png");
    boy1.position.set(myCenterX,myCenterY-0.09,5.1);
    PIEaddElement(boy1);
    //boy1.rotateY(-Math.PI/8);
    PIErender();

     geometry=new THREE.PlaneGeometry(0.05,0.1,32);
    boy2=createMesh(geometry,"boy2.png");
    boy2.position.set(myCenterX+0.1,myCenterY-0.07,5.1);
    PIEaddElement(boy2);
    //boy1.rotateY(-Math.PI/8);
    PIErender();

    geometry=new THREE.PlaneGeometry(0.05,0.1,32);
    boyshadow1=createMesh(geometry,"boyshadow.png");
    boyshadow1.position.set(myCenterX+0.17,myCenterY-0.07,5.09);
    boyshadow1.visible=false;
    PIEaddElement(boyshadow1);
    //boy1.rotateY(-Math.PI/8);
    PIErender();

     geometry=new THREE.PlaneGeometry(0.05,0.1,32);
    boyshadow2=createMesh(geometry,"boyshadow.png");
    boyshadow2.position.set(myCenterX+0.25,myCenterY-0.07,5.09);
    boyshadow2.visible=false;
    PIEaddElement(boyshadow2);
    //boy1.rotateY(-Math.PI/8);
    PIErender();

    geometry=new THREE.PlaneGeometry(0.03,0.02,32);
    off=createMesh(geometry,"off.png");
    off.position.set(myCenterX-0.175,myCenterY-0.1,5.11);
    PIEaddElement(off);
    PIEsetClick(off, clickoff);
    //boy1.rotateY(-Math.PI/8);
    PIErender();

    geometry=new THREE.PlaneGeometry(0.03,0.02,32);
    on=createMesh(geometry,"on.png");
    on.position.set(myCenterX-0.175,myCenterY-0.1,5.11);
    PIEaddElement(on);
    PIEsetClick(on, clickon);
    on.visible=false;
    //boy1.rotateY(-Math.PI/8);
    PIErender();

    var a56 = document.createElement("H2");
     a55 = document.createTextNode("A shadow is a dark area where light from a light source is blocked by an opaque object. It occupies all of the three-dimensional volume behind an object with light in front of it. ");
     a56.setAttribute('id', 'shadownotes1');
    a56.appendChild(a55);
    document.body.appendChild(a56);
    document.getElementById('shadownotes1').style.display="block";
    document.getElementById('shadownotes1').style.opacity=0;

     var a565 = document.createElement("H2");
     a556 = document.createTextNode("so we must need a light source to produce a shadow.Lets switch on the light...");
     a565.setAttribute('id', 'shadownotes2');
    a565.appendChild(a556);
    document.body.appendChild(a565);
    document.getElementById('shadownotes2').style.display="block";
    document.getElementById('shadownotes2').style.opacity=0;

    var b565 = document.createElement("H2");
     b556 = document.createTextNode("If you switch off the light no object produces the shadow.Lets switch off the light..");
     b565.setAttribute('id', 'shadownotes3');
    b565.appendChild(b556);
    document.body.appendChild(b565);
    document.getElementById('shadownotes3').style.display="block";
    document.getElementById('shadownotes3').style.opacity=0;

     var b56 = document.createElement("H2");
     b55 = document.createTextNode("Shadow is color independent.Observe the boys dress colors, both are different but produces same dark shadow ");
     b56.setAttribute('id', 'shadownotes4');
    b56.appendChild(b55);
    document.body.appendChild(b56);
    document.getElementById('shadownotes4').style.display="block";
    document.getElementById('shadownotes4').style.opacity=0;
  
}
function clickon(){
if (on.visible==true) {
    on.visible=false;
    off.visible=true;
    screen2.visible=false;
    bulb2.visible=false;
     screen.visible=true;
     boyshadow1.visible=false;
     boyshadow2.visible=false;

}
}

function clickoff(){
if (off.visible==true) {
    off.visible=false;
    on.visible=true;
     screen2.visible=true;
     screen.visible=false;
     bulb2.visible=true;
     boyshadow1.visible=true;
     boyshadow2.visible=true;
}
}
function experimentagain(){
   
    PIEstartAnimation();
    //document.getElementById('notes1').style.display="block";
    document.getElementById('shadownotes1').style.display="none";
    document.getElementById('shadownotes2').style.display="none";
    document.getElementById('shadownotes3').style.display="none";
    document.getElementById('shadownotes4').style.display="none";
    // PIEremoveElement(plane1);
    // PIErender();
    // PIEremoveElement(bulb1);
    // PIErender();
    PIEremoveElement(plane1);
    plane1.visible=false;
    PIEremoveElement(screen2);
    screen2.visible=false;
    PIEremoveElement(screen);
    screen.visible=false;
    PIEremoveElement(bulb1);
    bulb1.visible=false;
    PIEremoveElement(bulb2);
    bulb2.visible=false;
    PIEremoveElement(boy1);
    boy1.visible=false;
    PIEremoveElement(boy2);
    boy2.visible=false;
    PIEremoveElement(boyshadow1);
    boyshadow1.visible=false;
    PIEremoveElement(boyshadow2);
    boyshadow2.visible=false;
    PIEremoveElement(on);
    on.visible=false;
    PIEremoveElement(off);
    off.visible=false;
    PIEchangeInputCommand('Experiment', 'Learn', learn);
    
  
}

/******************* Update (animation changes) code ***********************/








function PIEsetDragStart(a, b) {
    a.dragStart = b
}
function PIEsetDrag(a, b) {
    a.drag = b
}
function PIEsetDragEnd(a, b) {
    a.dragEnd = b
}

var PIEdragElements = [];
function PIEdragElement(a) {
    PIEdragElements.push(a)
}
function PIEremoveDragElement(b) {
    var a;
    var c;
    c = false;
    for (a = 0; (c == false) && (a < PIEdragElements.length); a++) {
        if (PIEdragElements[a] == b) {
            c = true
        }
    }
    if (c == true) {
        while (a <= PIEdragElements.length) {
            PIEdragElements[a - 1] = PIEdragElements[a];
            a++
        }
        PIEdragElements.pop()
    }
}


function PIEremoveElement(b) {
    var a;
    var c;
    PIEscene.remove(b);
    c = false;
    for (a = PIEsceneElements.length - 1; (c == false) && (a >= 0); a--) {
        if (b == PIEsceneElements[a]) {
            while (a < PIEsceneElements.length - 1) {
                PIEsceneElements[a] = PIEsceneElements[a + 1];
                a++
            }
            PIEsceneElements.pop();
            c = true
        }
    }
}




