// import json from './travelCountry.json'
const json = require("./travelCountry");
getData();

function getData() {
    let data = new Array();

    // fetch('./travelCountry.json', {
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //     },
    // })
    // .then(response => response.json())
    // .then(response => {
    //     data = response;
    //     addElement(data);
    // }).catch(
    //     (err) => {
    //         console.log(err);
    //     }
    // )
    addElement( json );
}

function addElement(items) {
    for (let i = 0; i < items.length; i ++) {
        let artElem = document.createElement("article");
        let divElem = document.createElement("div");
        let divElem2 = document.createElement("div");
        let h3Elem = document.createElement("h3");
        let pElem = document.createElement("p")
        let img = document.createElement("img");
        // attr1.value = items[0].path;
        divElem.setAttribute("class", "container");
        divElem2.setAttribute("class", "details");
        artElem.setAttribute("class", "card");

        divElem2.appendChild(h3Elem);
        divElem2.appendChild(pElem);
        
        h3Elem.innerText = items[i].name;
        pElem.innerText = items[i].description;
        img.setAttribute("src", items[i].path);
        divElem.appendChild(img);
        divElem.appendChild(divElem2);
        artElem.appendChild(divElem);
        document.getElementById("travelCountry").appendChild(artElem);
    }
}