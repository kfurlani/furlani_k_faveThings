

import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('fired!');

    let theThings = document.querySelector('.fave-lightbox'),
        theTemplate = document.querySelector('#things-template').content, 
        faveData;
        debugger;

    //getData();

    function buildThings(data) {
    
        debugger;

        faveData = data;

        const things =Object.keys(data); 

        things.forEach(thing => {
            
            let panel = theTemplate.cloneNode(true);    
            let containers = panel.firstElementChild.children;  

            containers[0].querySelector('img').src = `images/${data[thing].image}`;
            //containers[0].querySelector('img').id = thing;
            //containers[0].querySelector('button').addEventListener('click', showThing);

            containers[1].textContent = data[thing].favouriteThing;
            containers[2].textContent = data[thing].description;

            theThings.appendChild(panel);

          })
    }

    function showThing(){
        debugger;
        
        let currentThing = faveData[this.id];
    }

    getData('./data.json', buildThings);

})();

