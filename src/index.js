// import _ from 'lodash';


//  function component() {
//    const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work

//   // Lodash, now imported by this script
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//    return element;
//  }

//  document.body.appendChild(component());a

//main divider to hold top objects
let mainDiv = document.createElement('div');
mainDiv.setAttribute("style", "font-size: large; color: #121; display: flex; justify-content: center; flex-direction: column; align-items: center");
mainDiv.className = 'topPictureBox';

//top divider bar to allow selection of different elements, along with element icons
let topSelectBar = document.createElement('div');
topSelectBar.className = 'topSelectBar';
topSelectBar.setAttribute('style', "height: 225px; border: 2px solid #000; display: flex; justify-content: center; grid-gap: 10px")

// class for images set in topImages
// class topImages {

//   constructor (element, file){
//   self.element = element;
//   self.file = file;
//   }

//   set file(value) {
//     this._file = value
//     }
//   set element(value) {
//     this._element = value 
//   }
// }

// object holder for all images and related urls
const images = [
  { element: 'trash', file: './img/trash.webp' },
  { element: 'cigarette', file: './img/cigarette2.webp' },
  { element: 'dumpster', file: './img/dumpster-fire.webp' },
  { element: 'rat', file: './img/rat.webp' }
]

for (const image of images) {
  const imgElement = document.createElement('img')
  imgElement.setAttribute('src', image.file)
  imgElement.onmouseover =  function () {
    this.style.transform =  'scaleX(-1)'
  }
  imgElement.onmouseout = function () {
    this.style.transform =  'scaleX(1)'
  }
  topSelectBar.append(imgElement)
}

mainDiv.append(topSelectBar)

// top photo for header of website
let imgTop = document.createElement('img');
imgTop.setAttribute("src","./img/food-title-page.png")
imgTop.style.width = "60%";
mainDiv.appendChild(imgTop)
document.body.appendChild(mainDiv)

//separating bar for dividing elements
let sepDiv = document.createElement('hr');
sepDiv.setAttribute("style", "border-top: 2px solid #121212; margin-top: 60px")
document.body.append(sepDiv)
