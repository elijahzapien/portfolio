/*-------------------------------------------
 * Filename:      projectScripts-v1.3.js
 * Description:   project page js
 * Version:       1.3 (08-10-2014)
 * Website:       http://elijahzapien.com
 * Author:        Elijah Zapien
-------------------------------------------*/

var browserWidth = window.innerWidth;
var description = document.getElementById("projectDescription");
var images = document.getElementsByTagName("img");
var iframes = document.getElementsByTagName("iframe");

// Description
// ==========
if (browserWidth <= 550) {
  description.style.width = ((browserWidth * .8) - 28) + "px";
}

// iframes
// ==========
if (iframes.length) {
  var iframeWidth = parseInt(
    window.getComputedStyle(iframes[0]).getPropertyValue("width")
  );
  var iframeHeight = iframeWidth * .5619;

  for (var i = 0; i < iframes.length; i++) {
    iframes[i].style.height = iframeHeight + "px";
  }
}

// Images
// ==========
if (images.length) {
  for (var i = 0; i < images.length; i++) {
    images[i].onmousemove = function(e){
      //var hue = (e.pageX + e.pageY)/2;
      var hue = e.pageX + e.pageY;
      this.style.WebkitFilter = 'hue-rotate(' + hue + 'deg) saturate(15)';
      this.style.filter = 'hue-rotate(' + hue + 'deg) saturate(15)';
    };

    images[i].onmouseout = function(e){
      this.style.WebkitFilter = 'none';
      this.style.filter = 'none';
    };
  }
}

// Resize
// ==========
window.onresize = function() {
  // Description
  var browserWidth = window.innerWidth;

  if (browserWidth <= 550) {
    description.style.width = ((browserWidth*.8) - 28) + "px";
  }

  // iframe
  if (iframes.length) {
    iframeWidth = parseInt(
      window.getComputedStyle(iframes[0]).getPropertyValue("width")
    );
    iframeHeight = iframeWidth*.5619;

    for (var i = 0; i < iframes.length; i++) {
      iframes[i].style.height = iframeHeight + "px";
    }
  }
};
