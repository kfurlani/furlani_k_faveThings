

import { getData } from "./modules/dataMiner";

(() => {
    console.log('fired!');

    let theThings = document.querySelector('#team-section'),
        theTemplate = document.querySelector('#bio-template').content, 
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
            containers[0].querySelector('button').id = thing;
            containers[0].querySelector('button').addEventListener('click', showThing)

            containers[1].textContent = data[thing].name;
            containers[2].textContent = data[thing].role;

            theThings.appendChild(panel);

          })
    }

    function showThing(){
        debugger;
        
        let currentThing = faveData[this.id];
    }

    getData('./data.json', buildThings);

})();

