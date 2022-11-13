/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };
    

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var pica = pica();
var URL = window.URL || window.webkitURL;

var body = document.querySelector('body');
var sourceImg = document.querySelector('#source');
var canvases = [
  document.querySelector('#c18'),
  document.querySelector('#c181'),
  document.querySelector('#c182'),
  document.querySelector('#c36'),
  document.querySelector('#c72'),
  document.querySelector('#c281'),
  document.querySelector('#c282'),
  document.querySelector('#c28'),
  document.querySelector('#c56'),
  document.querySelector('#c112'),

];

sourceImg.addEventListener('load', () => {
  canvases.forEach((e) => {
    pica.resize(sourceImg, e, {
      quality: 2,
      alpha: true,
    });
  });
  document.getElementById("downloadTrigger").hidden=false;
});
body.ondragover = (e) => {
  e.preventDefault();
};

body.ondrop = (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.files);
  filename = e.dataTransfer.files[0].name.replace(/\.[^/.]+$/, "");
  filetype = e.dataTransfer.files[0].type;
  canvases.forEach((c) => {
    c.getContext("2d").clearRect(0,0,c.width,c.height);
  })
  sourceImg.src = URL.createObjectURL(e.dataTransfer.files[0]);
};

var downloadAll = async () => {
  var zip = new JSZip();
  var promises = canvases.map(async (c, id) => {
    var blobData = await new Promise(resolve => c.toBlob(resolve));
    zip.file(c.width + "-" + filename + ".png", blobData)
  })

  await Promise.all(promises);

  zip.generateAsync({type:"blob"})
  .then(function(content) {
      // see FileSaver.js
      saveAs(content, filename + ".zip");
  });

}

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "https://ogpaine.com/images/xbox/elite.webp",
    "https://ogpaine.com/images/xbox/light.webp",
    "https://ogpaine.com/images/xbox/cyan.webp",
    "https://ogpaine.com/images/xbox/pink.webp",
    "https://ogpaine.com/images/xbox/lime.webp",
    "https://ogpaine.com/images/xbox/xsilver.webp",
    "https://ogpaine.com/images/ps4/cherry.webp",
    "https://ogpaine.com/images/ps4/Benny.webp",
    "https://ogpaine.com/images/ps4/redcamo.webp",
    "https://ogpaine.com/images/ps4/orangy.webp"
)
