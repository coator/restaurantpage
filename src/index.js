// import _ from 'lodash';
import css from './/style.css'
import Burger from './/img/burger.jpg';
import ChixPasta from './img/mexican-dishes.jpg';
import JalaPasta from './img/pasta-jalapeno.jpg';
import RiceBread from './img/rice-bread.jpg'


//  function component() {
//    const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work

//   // Lodash, now imported by this script
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//    return element;
//  }

//  document.body.appendChild(component());a

const content = document.getElementById('content')


//main divider to hold top objects
let mainDiv = document.createElement('div');
mainDiv.className = 'topPictureBox';
content.appendChild(mainDiv)

//top divider bar to allow selection of different elements, along with element icons
let topSelectBar = document.createElement('div');
topSelectBar.className = 'topSelectBar';

// object holder for all images and related urls
const images = [
  { element: 'Burger', src: Burger },
  { element: 'pasta-chicken', src: ChixPasta },
  { element: 'pasta-jalapeno', src: JalaPasta },
  { element: 'rice-bread', src: RiceBread }
]

for (const image of images) {
  const img = new Image();
  img.src = image.src
  
  img.onmouseover =  function () {
    this.style.transform =  'scaleX(-1)'
  }
  img.onmouseout = function () {
    this.style.transform =  'scaleX(1)'
  }
  topSelectBar.append(img)
}

mainDiv.append(topSelectBar)

// top photo for header of website
let imgTop = document.createElement('img');
imgTop.setAttribute("src","./img/mexican-dishes.jpg")
imgTop.style.width = "60%";
mainDiv.appendChild(imgTop)
document.body.appendChild(mainDiv)

//separating bar for dividing elements
let sepDiv = document.createElement('hr');
sepDiv.setAttribute("style", "border-top: 2px solid #121212; margin-top: 60px")
document.body.append(sepDiv)
