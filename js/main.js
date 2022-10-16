// can't get the data to load on the click. 
// I am going to comment out my lightbox css because I want you 
// to see that the data is loading in. 

import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('hi!');

    let theThings = document.querySelector('#things-section'),
        theTemplate = document.querySelector('#things-template').content, 
        faveData, 
        theButtons = document.querySelectorAll('.buttons button'),
        lightbox = document.querySelector('.fave-lightbox');
        //debugger;

   // getData();

    function buildThings(data) {
    
        //debugger;
        faveData = data;

        const things =Object.keys(data); 

        things.forEach(thing => {
            
            let panel = theTemplate.cloneNode(true),
            containers = panel.firstElementChild.children;  
            

            containers[0].querySelector('img').src = `images/${data[thing].image}`;

            containers[0].querySelector('img').id = thing;
            containers[0].querySelector('img').addEventListener('click', showThing);

            containers[1].textContent = data[thing].favouriteThing;
            containers[2].textContent = data[thing].description;

            
            theThings.appendChild(panel);

          })
    }
    function showLightbox(){

        lightbox.classList.add('show-fave');
    }

    function showThing(){

        let currentThing = faveData[this.id];
        console.log(currentThing)
    }

    theButtons.forEach(button => button.addEventListener('click',showThing, showLightbox))
    

    getData('./data.json', buildThings);

})();

