/*-------------------------------------------
 * Filename:     scripts.js
 * Description:  index page js
 * Version:      1.6 (08-10-2014)
 * Website:      http://elijahzapien.com
 * Author:       Elijah Zapien
-------------------------------------------*/

var loading = document.getElementById('loading');
var mainNav = document.getElementById('mainNav');
var mainNavPos = window.getComputedStyle(mainNav).getPropertyValue('position');
var navBtns = document.getElementsByClassName('navBtn');
var nameBtn = document.getElementById('name');
var nameBg = document.getElementById('nameBg');
var contactBtn = document.getElementById('contact');
var contactBg = document.getElementById('contactBg');
var bgs = document.getElementsByClassName('projectBg');
var bgCount = bgs.length;

var browserWidth = window.innerWidth;
var browserHeight = window.innerHeight;
var imgCounter = 1;
var numBgImgs = 5;
var projectTimer;

// Loader
// ==========
window.onload = function() {
  fadeOut(loading, 400);
  fadeIn(mainNav, 400);
  setTimeout(function(){document.body.removeChild(loading);},400);
};

// Responsive check
// ==========
if (typeof window.orientation !== 'undefined' || mainNavPos != 'fixed') {
  for (var i = 0; i < bgCount; i++) {
    document.body.removeChild(bgs[0]);
  }

  contactBtn.innerHTML='Contact@elijahzapien.com';
}

// Desktop
// ==========
if (bgs.length) {
  window.onresize=function(){
    browserWidth = window.innerWidth;
    browserHeight = window.innerHeight;
  };

  // Name btn
  // ==========
  nameBtn.onmouseover=function(){
    nameBg.style.visibility = 'visible';
    nameBg.style.WebkitAnimation = 'filterCycle 1.5s linear infinite alternate';
    nameBg.style.animation = 'filterCycle 1.5s linear infinite alternate';
  };

  nameBtn.onmouseout = function(){
    nameBg.style.visibility = 'hidden';
    nameBg.style.WebkitAnimation = 'none';
    nameBg.style.animation = 'none';
  }

  nameBtn.onmousemove = function(e){
    nameBg.style.top = e.pageY-browserHeight + 'px';
    nameBg.style.left = e.pageX-browserWidth + 'px';
  };

  // Contact btn
  // ==========
  contactBtn.onmouseover= function(){this.innerHTML='Contact@elijahzapien.com';}
  contactBtn.onmouseout = function(){this.innerHTML='Contact';}

  // Project btns
  // ==========
  //starts at 2 because first two buttons are name and contact
  for (var i = 2; i < navBtns.length; i++) {
    navBtns[i].onmouseover= function() {
      var targetedNavBtn = this.id;
      var randNum = Math.floor(Math.random() * 360);
      var targetedBg = document.getElementById(targetedNavBtn + 'Bg');

      projectTimer = setInterval(function() {
        projectBgSwitch(targetedNavBtn)
      }, 100);

      targetedBg.style.visibility = 'visible';
      targetedBg.style.WebkitFilter = 'hue-rotate('+randNum+'deg) saturate(8)';
      targetedBg.style.filter = 'hue-rotate('+randNum+'deg) saturate(8)';
    };

    navBtns[i].onmouseout= function() {
      var targetedNavBtn = this.id;
      var randNum = Math.floor(Math.random() * 360);
      var targetedBg = document.getElementById(targetedNavBtn + 'Bg');

      targetedBg.style.visibility = 'hidden';
      targetedBg.style.WebkitFilter = 'none';
      targetedBg.style.filter = 'none';

      clearInterval(projectTimer);

      imgCounter = 1;
    };
  }

  function projectBgSwitch(target) {
    if (imgCounter > numBgImgs) {
      imgCounter = 1;
    }

    var targetedBg = document.getElementById(target + 'Bg');
    var targetedBgImgs = targetedBg.getElementsByTagName('img');

    for (var i = 0; i < targetedBgImgs.length; i++) {
      targetedBgImgs[i].style.display = 'none';
    }

    targetedBgImgs[imgCounter-1].style.display = 'block';
    imgCounter++;
  }
}

// Utils
// ==========
function fadeOut(element, time) {
  var opacity = 1;
  var opacityTimer = setInterval(function() {
    if (opacity <= 0.01) {
      element.style.display = 'none';
      element.style.opacity = 1;
      element.style.filter = 'alpha(opacity=' + 1 + ')';
      clearInterval(opacityTimer);
    } else {
      opacity = opacity - 0.01;
      element.style.opacity = opacity;
      element.style.filter = 'alpha(opacity=' + opacity + ')';
    }
  }, time/100);
}

function fadeIn(element, time) {
  var opacity = 0;

  element.style.opacity = opacity;
  element.style.filter = 'alpha(opacity=' + opacity + ')';
  element.style.display = 'block';

  var opacityTimer = setInterval(function(){
    if (opacity >= 0.99){
      element.style.opacity = 1;
      element.style.filter = 'alpha(opacity=' + 1 + ')';
      clearInterval(opacityTimer);
    }
    else {
      opacity = opacity + 0.01;
      element.style.opacity = opacity;
      element.style.filter = 'alpha(opacity=' + opacity + ')';
    }
  }, time/100);
}
