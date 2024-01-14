function funlogo() {
    document.getElementById('quick').style.visibility = 'hidden';
    document.getElementById('host').style.visibility = 'hidden';
    document.getElementById('practice').style.visibility = 'hidden';
    document.getElementById('settings').style.visibility = 'hidden';
    document.getElementById('exit').style.visibility = 'hidden';
    document.getElementById('video').style.filter = 'opacity(1)';
  }    
function funquick() {
    document.getElementById('quick').style.visibility = 'visible';
    document.getElementById('host').style.visibility = 'hidden';
    document.getElementById('practice').style.visibility = 'hidden';
    document.getElementById('settings').style.visibility = 'hidden';
    document.getElementById('exit').style.visibility = 'hidden';
    document.getElementById('video').style.filter = 'opacity(0.4)';
}
function funhost() {
    document.getElementById('quick').style.visibility = 'hidden';
    document.getElementById('host').style.visibility = 'visible';
    document.getElementById('practice').style.visibility = 'hidden';
    document.getElementById('settings').style.visibility = 'hidden';
    document.getElementById('exit').style.visibility = 'hidden';
    document.getElementById('video').style.filter = 'opacity(0.4)';
}
function funpractice() {
    document.getElementById('quick').style.visibility = 'hidden';
    document.getElementById('host').style.visibility = 'hidden';
    document.getElementById('practice').style.visibility = 'visible';
    document.getElementById('settings').style.visibility = 'hidden';
    document.getElementById('exit').style.visibility = 'hidden';
    document.getElementById('video').style.filter = 'opacity(0.4)';
}
function funsettings() {
    document.getElementById('quick').style.visibility = 'hidden';
    document.getElementById('host').style.visibility = 'hidden';
    document.getElementById('practice').style.visibility = 'hidden';
    document.getElementById('settings').style.visibility = 'visible';
    document.getElementById('exit').style.visibility = 'hidden';
    document.getElementById('video').style.filter = 'opacity(0.4)';
} 
function funexit() {
    document.getElementById('quick').style.visibility = 'hidden';
    document.getElementById('host').style.visibility = 'hidden';
    document.getElementById('practice').style.visibility = 'hidden';
    document.getElementById('settings').style.visibility = 'hidden';
    document.getElementById('exit').style.visibility = 'visible';
    document.getElementById('video').style.filter = 'opacity(0.4)';
} 

// Video settings
var vid = document.getElementById('video');
vid.load();
vid.playbackRate = 0.5;

// Audio settings
let play = function(){document.getElementById("audio").play()}
var audioclick = document.getElementById("audio");
audioclick.volume = 0.05;


