var xBall=50;
var yBall=50;

var orb1, randX1, randY1, randVx1, randVy1,osc1,panningDirection1,panningVolume1;

var orb2, randX2, randY2, randVx2, randVy2,osc2,panningDirection2,panningVolume2;
var osc3,panningDirection3,panningVolume3;   
var mic;
var fft = [];
var xOrigin,yOrigin;
var orbs = [];
var oscs = [];
var saws = [];
var randFQ = [];
var flock;
var volRandHI = [];
var randVx = [];
var randVy = [];
var randY  = [];
var randX  = [];
var numOForbs;
var panningVolume = [];
var panningDirection = [];
var randRes = [];

var spectrum = [];
var numWaveforms ;
var numSAWS  ;
var numTRIS  ;
var randQ = [];
var randDia = [];

  var  panningDirection2=[];
var    panningVolume2=[];




var randFQsine = [];
var randQsine   = [];   
var randRessine = [];
var   filterSINE = [];  
var fQsineL   = [];
var fQsineH   = [];
var fRessineL   = [];
var fRessineH     = [];


var randFQsaw = []; 
var randQsaw    = []; 
var randRessaw  = []; 
var   filterSAW = [];
var fQsawL   = [];
var fQsawH   = [];
var fRessawL   = [];
var fRessawH     = [];


var tris = [];
var randFQtri = []; 
var randQtri    = []; 
var randRestri  = []; 
var   filterTRI = [];

var mic, recorder, soundFile;

var state = 0; // mousePress will increment from Record, to Stop, to Play

var gWidth = 800;
var gHeight = 542;

// A wind direction vector
var wind;
// Circle position
var position;
var alien;

function setup() {
//vey8vlzHUkymzorYDbcIug



 // loadJSON('http://realtime.mbta.com/developer/api/v2/alertheaders?api_key=vey8vlzHUkymzorYDbcIug&format=json', gotWeather);
    alien    =   loadImage("../addons/alien.png");  // Load the image 

  createCanvas(gWidth, gHeight);

  numWaveforms  = random(1, 5);




  // numWaveforms  = 3;  

  // numSAWS   = random(1, 4);
  numSAWS   = 0;  

  numTRIS   = 0;   

  numOForbs = numWaveforms+numSAWS+numTRIS;

  // var x = 
  // var y = 
  // var vX =     
  // var vY = 
  
  // var fSINElo
  // var fSINEhi
 
  // var fSAWlo ;
  // var fSAWhi;
  // var fTRIlo;
  // var fTRIhi ;
  // var fQL ;
  // var fQH ;
  // var fResL ;
  // var fResH;
  // var numD  ;



var numWVFM     =     numOForbs           , 
    vol         =     0.3         , 
    x           =     780         , 
    y           =     520         , 
    vX          =     1.3         , 
    vY          =     0.5         , 
    fSINElo     =     87          , 
    fSINEhi     =     247         , 
    fQsineL     =     431          ,
    fQsineH     =     1200         , 
    fRessineL   =     .374        , 
    fRessineH   =     1.2         , 
    fSAWlo      =     50         , 
    fSAWhi      =     100         , 
    fQsawL      =     1200        ,
    fQsawH      =     1900        , 
    fRessawL    =     4.4          , 
    fRessawH    =     6.2         ,     
    fTRIlo      =     50         , 
    fTRIhi      =     100         , 
    fQtriL      =     200        ,
    fQtriH      =     1000        , 
    fRestriL    =     .97         ,    
    fRestriH    =     1.2         , 
    numD        =     40          ;



                 // num,      vol,  x,    y,    vX,   vY,   fSINlo, fSINEhi, fQL,    fQH,    fResL,  fResH,  numD
  orbInterationWAVEFORMS(numWVFM, vol, x, y, vX, vY, fSINElo, fSINEhi, fQsineL,fQsineH, fRessineL, fRessineH, fSAWlo, fSAWhi, fQsawL,fQsawH, fRessawL, fRessawH, fTRIlo, fTRIhi, fQtriL,fQtriH, fRestriL, fRestriH, numD);

  // orbInterationSAW(numSAWS, 0.2,  970,  580, 1.3,  2.5,   374,  147,  47,   233  ,   .22,   2.7,     75);



  //                // num,      vol,  x,    y,    vX,   vY,   fSINlo, fSINEhi, fQL,    fQH,    fResL,  fResH,  numD
  // orbInterationSAWS(numSAWS, 0.7,  658,  376,  1.3,  .2,   240,  480,  130,   340,   .02,    .7,     40);

//          for (var i=0; i<numOForbs; i++) {

//     saws[i]               =   new p5.SawOsc();
// }

//   for (var i=0; i<numOForbs; i++) {

// var vol = 0.1;
//     volRandHI[i]          =   random(0.013      ,   0.1);  
//     // panningDirection[i]   =   map(orbs[i].x  , 0.0  ,  gWidth   ,  -1.0  ,   1.0);
//     panningVolume[i]      =   map(orbs[i].y  , 0.0  ,  gHeight   ,  0.0   ,   volRandHI[i] );
 
var mainLabel;
var nameLink;
var quoteLabel;

fill(255);
mainLabel = createDiv('<div style="color:#FFFFFF; height:340px;width:240px;border:0px solid #ccc; border-color:#000000; font:14px Courier New;overflow:auto;">"HE DERELICT ON LV-426, CODENAMED ORIGIN AND ALSO KNOWN AS THE ALIEN DERELICT, WAS A CRASHED JUGGERNAUT-TYPE ENGINEER SPACECRAFT. SOME TIME IN 2122, A WARNING SIGNAL BEING BROADCAST FROM THE DERELICT WAS DETECTED BY WEYLAND-YUTANI AND THE COMMERCIAL HAULER USCSS NOSTROMO WAS SUBSEQUENTLY SENT TO INVESTIGATE, WITHOUT THE KNOWLEDGE OF ITS CREW. THE SHIP WAS BELIEVED TO HAVE CRASHED ON LV-426 SEVERAL MILLENNIA PRIOR TO THE ARRIVAL OF THE NOSTROMO."</div>');
// mainLabel = createDiv('<div style="color:#FFFFFF"> <a href=https://cskonopka.github.io/p5js/ style="color:#FFFFFF"; text-align:center;><h3>sine-wave playground ~ christopher konopka</h3></div>');
  mainLabel.position(10, 100);

// quoteLabel = createDiv('<div style="color:#FFFFFF; height:340px;width:240px;border:1px solid #ccc; border-color:#000000; font:14px Courier New;overflow:auto;">"DAY ON ACHERON WAS DIM TWILIGHT, NIGHT WAS DARKER THAN THE FARTHEST REACHES OF INTERSTELLAR SPACE, BECAUSE NOT EVEN STARS SHONE THROUGH ITS DENSE ATMOSPHERE TO SOFTEN THE BARREN SURFACE WITH TWINKLING LIGHT."</div>');
// // mainLabel = createDiv('<div style="color:#FFFFFF"> <a href=https://cskonopka.github.io/p5js/ style="color:#FFFFFF"; text-align:center;><h3>sine-wave playground ~ christopher konopka</h3></div>');
//   quoteLabel.position(10, 100);
  
  nameLink = createDiv('<a href="http://www.christopherkonopka.com"><font color="white">Christopher Konopka</font></a>');
// mainLabel = createDiv('<div style="color:#FFFFFF"> <a href=https://cskonopka.github.io/p5js/ style="color:#FFFFFF"; text-align:center;><h3>sine-wave playground ~ christopher konopka</h3></div>');
  nameLink.position(10, 515);

}

function draw() {
  // background(0, 0, 0);
  image(alien, 0, 0);  
  noStroke();  

fill(255);
textSize(24);
textFont("Courier New");
text("EXPLORING LV-426", 10, 30);

fill(255);
textSize(16);
textFont("Courier New");
text("A SONIFIED INTERPRETATION", 10, 60);
text("OF A DERELICT SHIP", 10, 80);

// fill(255);
// textSize(16);
// textFont("Courier New");
// text("THE DERELICT ON LV-426, CODENAMED ORIGIN AND ALSO KNOWN AS THE ALIEN DERELICT, WAS A CRASHED JUGGERNAUT-TYPE ENGINEER SPACECRAFT. SOME TIME IN 2122, A WARNING SIGNAL BEING BROADCAST FROM THE DERELICT WAS DETECTED BY WEYLAND-YUTANI AND THE COMMERCIAL HAULER USCSS NOSTROMO WAS SUBSEQUENTLY SENT TO INVESTIGATE, WITHOUT THE KNOWLEDGE OF ITS CREW. THE SHIP WAS BELIEVED TO HAVE CRASHED ON LV-426 SEVERAL MILLENNIA PRIOR TO THE ARRIVAL OF THE NOSTROMO.");


// fill(255);
// textSize(14);
// textFont("Courier New");
// text("~ CHRISTOPHER KONOPKA ~", 10, 530);

// fill(255);
// textSize(14);
// textFont("Courier New");
// text("BY CHRISTOPER KONOPKA", 700, 60);


  for (var i=0; i<numOForbs; i++) {
 
    orbs[i].move();
    orbs[i].display(); 

    panningDirection[i]   =   map(orbs[i].x  , 0.0  ,  gWidth   ,  -1.0  ,   1.0);
    panningVolume[i]      =   map(orbs[i].y  , 0.0  ,  gHeight   ,  0.0   ,   .3);
    
    oscs[i].amp(panningVolume[i]);  
    oscs[i].pan(panningDirection[i]);
    smooth(0.3);

    saws[i].pan(panningDirection[i]);
    saws[i].amp(panningVolume[i]);  
    smooth(0.3);

    tris[i].pan(panningDirection[i]);
    tris[i].amp(panningVolume[i]);  
    smooth(0.3);
  }
}




function orbInterationWAVEFORMS(numWVFM, vol, x, y, vX, vY, fSINElo, fSINEhi, fQsineL,fQsineH, fRessineL, fRessineH, fSAWlo, fSAWhi, fQsawL,fQsawH, fRessawL, fRessawH, fTRIlo, fTRIhi, fQtriL,fQtriH, fRestriL, fRestriH, numD){
  for (var i = 0; i < numWVFM; i++) {

    randVx[i]             =   random(0.0147         ,   vX        );
    randVy[i]             =   random(0.0147         ,   vY        );
    randY[i]              =   random(47             ,   y         );
    randX[i]              =   random(47             ,   x         ); 
    
    randDia[i]            =   random(5              ,   numD      );

    randFQsine[i]         =   random(fSINElo        ,   fSINEhi       );        
    randQsine[i]          =   random(fQsineL        ,   fQsineH       );
    randRessine[i]        =   random(fRessineL      ,   fRessineH     );  
 
    randFQsaw[i]          =   random(fSAWlo         ,   fSAWhi       ); 
    randQsaw[i]           =   random(fQsawL         ,   fQsawH       );
    randRessaw[i]         =   random(fRessawL       ,   fRessawH     );   
 
    randFQtri[i]          =   random(fTRIlo         ,   fTRIhi       );
    randQtri[i]           =   random(fQtriL         ,   fQtriH       );
    randRestri[i]         =   random(fRestriL       ,   fRestriH     ); 
    
    orbs.push(new bouncingOrb(randX[i], randY[i],randVx[i], randVy[i], randDia[i], 147));

    filterSINE[i]         =   new p5.LowPass(); 
    filterSAW[i]          =   new p5.LowPass();    
    filterTRI[i]          =   new p5.LowPass();               
    oscs[i]               =   new p5.SinOsc();
    saws[i]               =   new p5.SawOsc(); 
    tris[i]               =   new p5.TriOsc();        
     
    // Sine block
    oscs[i].start();           

      oscs[i].freq(randFQsine[i]);  
      oscs[i].disconnect();

      oscs[i].connect(filterSINE[i]);
      filterSINE[i].set(randQsine[i], randRessine[i]);

    // // Saw block
    // saws[i%2].start();           

    //   saws[i%2].freq(randFQsaw[i%2]);
    //   saws[i%2].disconnect();

    //   saws[i%2].connect(filterSAW[i%2]);  
    //   filterSAW[i%2].set(randQsaw[i%2], randRessaw[i%2]);

    // Triangle block
    tris[i%3].start();           

      tris[i%3].freq(randFQtri[i%3]);  
      tris[i%3].disconnect();

        tris[i%3].connect(filterTRI[i%3]);
        filterTRI[i%3].set(randQtri[i%3], randRestri[i%3]);      
  }
}

function bouncingOrb(x, y, v1, v2, d, fade) {
  this.x    =   x;
  this.y    =   y;
  this.v1   =   v1;
  this.v2   =   v2;
  this.d    =   d;
  this.fade =   fade;
}

bouncingOrb.prototype.move = function() {
  this.x  =   this.x+this.v1;
  this.y  =   this.y+this.v2;

  if (this.x>gWidth-xBall/2||this.x<xBall/2) {
    this.v1   =   this.v1*-1;
  }
  if (this.y>gHeight-xBall/2||this.y<xBall/2) {
    this.v2   =   this.v2*-1;
  }      
};

bouncingOrb.prototype.display = function() {
  
  fill(255,255,255,this.fade); 
  ellipse(this.x,this.y, this.d, this.d);

  return {xOrigin : this.x, yOrigin : this.y};    
};
