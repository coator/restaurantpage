import _ from 'lodash';
import { repeat } from 'lodash'
// import { sources } from 'webpack';
import css from './/style.css'

import img_one from   '/src/img/emily-andreeva-I35AJFW5jng-unsplash.jpg'
import img_two from   '/src/img/farhad-ibrahimzade-D-domDrwOaQ-unsplash.jpg'
import img_three from '/src/img/farhad-ibrahimzade-Gr-CnQJJ05Y-unsplash.jpg'
import img_four from  '/src/img/farhad-ibrahimzade-LJ49dflDcH8-unsplash.jpg'
import img_five from  '/src/img/fernando-andrade-R3f2emOt1bU-unsplash.jpg'
import img_six from   '/src/img/louis-hansel-AKcgMoIaLHg-unsplash.jpg'
import img_seven from '/src/img/molly-keesling-tk6_L0jDPsk-unsplash.jpg'
import img_eight from '/src/img/ta-focando-N0xibnb_2Ws-unsplash.jpg'

import svg_one from '/src/svg/flat-4716.svg' 
import svg_two from '/src/svg/flat-4722.svg'
import svg_thr from '/src/svg/flats-4726.svg'


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
  { element: 'img_one', src: img_one},
  { element: 'img_two', src: img_two},
  { element: 'img_three', src: img_three},
  { element: 'img_four', src: img_four},
  { element: 'img_six', src: img_six},
  { element: 'img_seven', src: img_seven},
]

// Assigns img properties for each img in loop
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

//separating bar for dividing elements
let sepDiv = document.createElement('hr');
sepDiv.className = 'sepDiv'


let sepDivOne = document.createElement('hr')
sepDivOne.className = 'sepDiv'
mainDiv.append(sepDivOne, topSelectBar)

// Restaurant Name
let resDiv = document.createElement('div');
resDiv.className = 'resNameBanner'
resDiv.textContent = 'Best Restaurant NYC'
resDiv.style.width = "100%";
mainDiv.appendChild(resDiv)
document.body.appendChild(mainDiv)

let sepDivTwo = document.createElement('hr');
sepDivTwo.className = 'sepDiv'

// Middle Photo
let midImg = document.createElement('div');
midImg.className = 'midImgFood';

//paragraph holder that pushes text down
let layOver = document.createElement('div');
layOver.className = 'layOver'
layOver.appendChild(sepDivTwo)

// demo paragraph
let p1 = document.createElement('p');
p1.textContent = repeat('food ', 1000);


midImg.appendChild(layOver)
document.body.appendChild(midImg);

let buttonHolder = document.createElement('div')
buttonHolder.className = 'buttonHolder'

const buttons = [
  { element: 'butOne', src: svg_one},
  { element: 'butTwo', src: svg_two},
  { element: 'butThr', src: svg_thr}
]

for (const buttonInst of buttons) {
  const btnNew = document.createElement('button');
  btnNew.style.backgroundImage = buttonInst.src;
  btnNew.className = 'buttonIcon'
  buttonHolder.appendChild(btnNew)
}



// for (const btn of buttons) {
  // btn.className = 'buttonIcon'
  // buttonHolder.appendChild(btn)
// }

layOver.appendChild(buttonHolder)
layOver.appendChild(p1)
