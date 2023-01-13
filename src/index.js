import _ from 'lodash';
import { repeat } from 'lodash'
import css from './/style.css'
import img_one from   '/src/img/emily-andreeva-I35AJFW5jng-unsplash.jpg'
import img_two from   '/src/img/farhad-ibrahimzade-D-domDrwOaQ-unsplash.jpg'
import img_three from '/src/img/farhad-ibrahimzade-Gr-CnQJJ05Y-unsplash.jpg'
import img_four from  '/src/img/farhad-ibrahimzade-LJ49dflDcH8-unsplash.jpg'
import img_five from  '/src/img/fernando-andrade-R3f2emOt1bU-unsplash.jpg'
import img_six from   '/src/img/louis-hansel-AKcgMoIaLHg-unsplash.jpg'
import img_seven from '/src/img/molly-keesling-tk6_L0jDPsk-unsplash.jpg'
import img_eight from '/src/img/ta-focando-N0xibnb_2Ws-unsplash.jpg'


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
  // { element: 'img_five', src: img_five},
  { element: 'img_six', src: img_six},
  { element: 'img_seven', src: img_seven},
  // { element: 'img_eight', src: img_eight}  
]

//separating bar for dividing elements
let sepDiv = document.createElement('hr');
sepDiv.className = 'sepDiv'

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
document.body.append(sepDivTwo)

// Middle Attraction Food
let midImg = document.createElement('div');
midImg.className = 'midImgFood';
midImg.style.backgroundImage = 'url(\'/src/img/bg-1.jpg\')';
layOver.style.opacity = .2

let layOver = document.createElement('div');
let p1 = document.createElement('p');
p1.style.fontWeight = 'bold';
p1.style.color = '#000000';
p1.textContent = repeat('food ', 1000);


layOver.appendChild(p1)
midImg.appendChild(layOver)

document.body.appendChild(midImg);