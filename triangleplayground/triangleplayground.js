var osc1, osc2, osc3, osc4, osc5, osc6, osc7, osc8;
var oscFreqSlider1,oscFreqSlider2, oscFreqSlider3, oscFreqSlider4, oscFreqSlider5, oscFreqSlider6, oscFreqSlider7, oscFreqSlider8;
var oscAmpSlider1,oscAmpSlider2, oscAmpSlider3, oscAmpSlider4, oscAmpSlider5, oscAmpSlider6, oscAmpSlider7, oscAmpSlider8;
var filterQslider, filterFreqResponseSlider;
var lpFilter;
var button1;
var freqLabel, filterQLabel, filterFreqResLabel, ampLabel, freqLabel,tit;



var waveformMASTER;
  var waveform;
 var filter1;
var filterQslider, filterFreqResponseSlider;

var mainLabel, frequenciesLabel, amplitudesLabel;
// var one, two, three, four, five, six, seven, eight;

var filterParmLabel;

function setup() {

  var filterResStart = 3;

// General Block
  createCanvas(1100, 550);
  
  mainLabel = createDiv('<div style="color:#FFFFFF"> <a href=https://cskonopka.github.io/p5js/ style="color:#FFFFFF"; text-align:center;><h3>triangle playground ~ christopher konopka</h3></div>');
  mainLabel.position(740, -10);

  // githubLabel = createDiv('<div style="color:#FFFFFF"> <a href=https://github.com/cskonopka/p5js style="color:#FFFFFF"; text-align:center;><h3>github</h3></a>');
  // githubLabel.position(700, 40);

// Frequency Block
  var sliderFREQpos = 35;
  var sliderFREQvert = 25;

  oscFreqSlider1 = createSlider(0, 4700, 47);
  oscFreqSlider1.position(sliderFREQpos, 20+sliderFREQvert);

  oscFreqSlider2 = createSlider(0, 4700, 113);
  oscFreqSlider2.position(sliderFREQpos, 45+sliderFREQvert);

  oscFreqSlider3 = createSlider(0, 4700, 8);
  oscFreqSlider3.position(sliderFREQpos, 70+sliderFREQvert);

  oscFreqSlider4 = createSlider(0, 4700, 13);
  oscFreqSlider4.position(sliderFREQpos, 95+sliderFREQvert);

  oscFreqSlider5 = createSlider(0, 4700, 147);
  oscFreqSlider5.position(sliderFREQpos, 120+sliderFREQvert);

  oscFreqSlider6 = createSlider(0, 4700, 226);
  oscFreqSlider6.position(sliderFREQpos, 145+sliderFREQvert);

  oscFreqSlider7 = createSlider(0, 4700, 194);
  oscFreqSlider7.position(sliderFREQpos, 170+sliderFREQvert);

  oscFreqSlider8 = createSlider(0, 4700, 147);
  oscFreqSlider8.position(sliderFREQpos, 195+sliderFREQvert);

  frequenciesLabel = createDiv('<div style="color:#FFFFFF"> <p>frequencies</p></div>');
  frequenciesLabel.position(15, -5);
 
  one = createDiv('<div style="color:#FFFFFF"> <h5>#1</h5></div>');
  one.position(15, 25);  

  two = createDiv('<div style="color:#FFFFFF"> <h5>#2</h5></div>');
  two.position(15, 50);

  three = createDiv('<div style="color:#FFFFFF"> <h5>#3</h5></div>');
  three.position(15, 75);  

  four = createDiv('<div style="color:#FFFFFF"> <h5>#4</h5></div>');
  four.position(15, 100);

  five = createDiv('<div style="color:#FFFFFF"> <h5>#5</h5></div>');
  five.position(15, 125);  
 
  six = createDiv('<div style="color:#FFFFFF"> <h5>#6</h5></div>');
  six.position(15, 150);

  seven = createDiv('<div style="color:#FFFFFF"> <h5>#7</h5></div>');
  seven.position(15, 175);  

  eight = createDiv('<div style="color:#FFFFFF"> <h5>#8</h5></div>');
  eight.position(15, 200);

// Amplitude Block
  var sliderAMPpos = 200;
  var sliderAMPvert = 25;

  oscAmpSlider1 = createSlider(0, 255, 128);
  oscAmpSlider1.position(sliderAMPpos, 20+sliderAMPvert);

  oscAmpSlider2 = createSlider(0, 255, 128);
  oscAmpSlider2.position(sliderAMPpos, 45+sliderAMPvert);

  oscAmpSlider3 = createSlider(0, 255, 128);
  oscAmpSlider3.position(sliderAMPpos, 70+sliderAMPvert);

  oscAmpSlider4 = createSlider(0, 255, 128);
  oscAmpSlider4.position(sliderAMPpos, 95+sliderAMPvert);

  oscAmpSlider5 = createSlider(0, 255, 128);
  oscAmpSlider5.position(sliderAMPpos, 120+sliderAMPvert);

  oscAmpSlider6 = createSlider(0, 255, 128);
  oscAmpSlider6.position(sliderAMPpos, 145+sliderAMPvert);

  oscAmpSlider7 = createSlider(0, 255, 128);
  oscAmpSlider7.position(sliderAMPpos, 170+sliderAMPvert);

  oscAmpSlider8 = createSlider(0, 255, 128);
  oscAmpSlider8.position(sliderAMPpos, 195+sliderAMPvert);

  amplitudesLabel = createDiv('<div style="color:#FFFFFF"> <p>amplitudes</p></div>');
  amplitudesLabel.position(180, -5);

  one2 = createDiv('<div style="color:#FFFFFF"> <h5>#1</h5></div>');
  one2.position(180, 25);  
 
  two2 =  createDiv('<div style="color:#FFFFFF"> <h5>#2</h5></div>');  
  two2.position(180, 50);

  three2 = createDiv('<div style="color:#FFFFFF"> <h5>#3</h5></div>');
  three2.position(180, 75);  

  four2 = createDiv('<div style="color:#FFFFFF"> <h5>#4</h5></div>');
  four2.position(180, 100);

  five2 = createDiv('<div style="color:#FFFFFF"> <h5>#5</h5></div>');
  five2.position(180, 125);  
 
  six2 = createDiv('<div style="color:#FFFFFF"> <h5>#6</h5></div>');
  six2.position(180, 150);

  seven2 = createDiv('<div style="color:#FFFFFF"> <h5>#7</h5></div>');
  seven2.position(180, 175);  

  eight2 = createDiv('<div style="color:#FFFFFF"> <h5>#8</h5></div>');
  eight2.position(180, 200);

// Filter Block
  filterParmLabel = createDiv('<div style="color:#FFFFFF"> <p>filter parameters</p></div>');
  filterParmLabel.position(345, -5);

  filterQLabel = createDiv('<div style="color:#FFFFFF"> <h5>cuttoff</h5></div>');
  filterQLabel.position(345, 25);

  filterQslider = createSlider(0, 5000, 255);
  filterQslider.position(410, 45);  

  filterFreqResLabel =createDiv('<div style="color:#FFFFFF"> <h5>resonance</h5></div>');
  filterFreqResLabel.position(345, 50);

  filterFreqResponseSlider = createSlider(0, 25, filterResStart);
  filterFreqResponseSlider.position(410, 70);  


// Global Waveform Selector
  waveformMASTER = [
  {
      "waveform": ['sine', 'sawtooth', 'triangle', 'square']} 
  ];

  waveform = waveformMASTER[0].waveform[1];


//  Oscillator Block
  osc1 = new p5.Oscillator(waveform);
  osc1.amp(.2);
  osc1.start();

  osc2 = new p5.Oscillator(waveform);
  osc2.amp(.2);
  osc2.start();

  osc3 = new p5.Oscillator(waveform);
  osc3.amp(.2);
  osc3.start();

  osc4 = new p5.Oscillator(waveform);
  osc4.amp(.2);
  osc4.start();

  osc5 = new p5.Oscillator(waveform);
  osc5.amp(.2);
  osc5.start();

  osc6 = new p5.Oscillator(waveform);
  osc6.amp(.2);
  osc6.start();

  osc7 = new p5.Oscillator(waveform);
  osc7.amp(.2);
  osc7.start();

  osc8 = new p5.Oscillator(waveform);
  osc8.amp(.2);
  osc8.start(); 

// Additive Synthesis Block
  osc1.freq(osc2.add(),osc3.add(), osc4.add(),osc5.add(),osc6.add(), osc7.add(), osc8.add());
 
// Filter Connection Block
  filter1 = new p5.LowPass();   

  osc1.disconnect();
  osc1.connect(filter1);
  
  osc2.disconnect();
  osc2.connect(filter1);
  
  osc3.disconnect();
  osc3.connect(filter1);
  
  osc4.disconnect();
  osc4.connect(filter1);
  
  osc5.disconnect();
  osc5.connect(filter1);
  
  osc6.disconnect();
  osc6.connect(filter1);
  
  osc7.disconnect();
  osc7.connect(filter1);
  
  osc8.disconnect();
  osc8.connect(filter1);         
  
  fft = new p5.FFT();
}

function draw() {

// General Block  
  background(0);
  var spectrum = fft.analyze();
   
// Oscillator Frequency Slider Block   
  var oscFreq1 = oscFreqSlider1.value();
  var oscFreq2 = oscFreqSlider2.value();
  var oscFreq3 = oscFreqSlider3.value();
  var oscFreq4 = oscFreqSlider4.value();
  var oscFreq5 = oscFreqSlider5.value();
  var oscFreq6 = oscFreqSlider6.value();
  var oscFreq7 = oscFreqSlider7.value();
  var oscFreq8 = oscFreqSlider8.value();

// Oscillator Amplitude Slider Block
  var oscAmp1 = oscAmpSlider1.value();
  var oscAmp2 = oscAmpSlider2.value();
  var oscAmp3 = oscAmpSlider3.value();
  var oscAmp4 = oscAmpSlider4.value();
  var oscAmp5 = oscAmpSlider5.value();
  var oscAmp6 = oscAmpSlider6.value();
  var oscAmp7 = oscAmpSlider7.value();
  var oscAmp8 = oscAmpSlider8.value();

// Filter Slider Block
  var filterQ = filterQslider.value();
  var filterFreqResponse = filterFreqResponseSlider.value();    

// Oscillator Parameters
  oscAmp1 = map(oscAmp1, 0, 255, 0, 1);
  osc1.amp(oscAmp1*0.1); 
    osc1.freq(oscFreq1);

  oscAmp2 = map(oscAmp2, 0, 255, 0, 1);
  osc2.amp(oscAmp2*0.1); 
    osc2.freq(oscFreq2);

  oscAmp3 = map(oscAmp3, 0, 255, 0, 1);
  osc3.amp(oscAmp3*0.1); 
    osc3.freq(oscFreq3);
  
  oscAmp4 = map(oscAmp4, 0, 255, 0, 1);      
  osc4.amp(oscAmp4*0.1); 
    osc4.freq(oscFreq4);
  
  oscAmp5 = map(oscAmp5, 0, 255, 0, 1);       
  osc5.amp(oscAmp5*0.1);
    osc5.freq(oscFreq5);

  oscAmp6 = map(oscAmp6, 0, 255, 0, 1);         
  osc6.amp(oscAmp6*0.1); 
    osc6.freq(oscFreq6);
  
  oscAmp7 = map(oscAmp7, 0, 255, 0, 1);   
  osc7.amp(oscAmp7*0.1); 
    osc7.freq(oscFreq7);

  oscAmp8 = map(oscAmp8, 0, 255, 0, 1);     
  osc8.amp(oscAmp8*0.1);
    osc8.freq(oscFreq8);
    
// Filter Parameters
  filter1.set(filterQ, filterFreqResponse);

// Waveform Display Block
  beginShape();
 
    for (i = 0; i<spectrum.length; i++) {
      stroke(255,120,200);
      var x = map(i, 0, spectrum.length, 0, 5000);
      var y = map(spectrum[i], 0, 512, height, 0);
      vertex(x, y);
    }
 
  endShape(); 
}