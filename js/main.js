

import { getData } from "./modules/dataMiner.js";

(() => {
    console.log('hi!');

    let theThings = document.querySelector('#things-section'),
        theTemplate = document.querySelector('#things-template').content; 
        //faveData;
        debugger;

   // getData();

    function buildThings(data) {
    
        debugger;
        //faveData = data;

        const things =Object.keys(data); 

        things.forEach(thing => {
            
            let panel = theTemplate.cloneNode(true);

            let containers = panel.firstElementChild.children;  

            containers[0].querySelector('img').src = `images/${data[thing].image}`;
            //containers[0].querySelector('buttons').id = thing;
            //containers[0].querySelector('buttons').addEventListener('click', showThing);

            containers[1].textContent = data[thing].favouriteThing;
            containers[2].textContent = data[thing].description;

            theThings.appendChild(panel);

          })
    }

    //function showThing(){
     //   debugger;
        
       // let currentThing = faveData[this.id];
    //}

    getData('./data.json', buildThings);

})();

