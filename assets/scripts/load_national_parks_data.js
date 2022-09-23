"use strict"

let locationsArray = []
let nationalParksArray = []
let parkTypesArray = []

window.onload = function(){

    loadJsonData("assets/data/locations.json").then((locations) => {
        locationsArray = locations;
        let select  = document.getElementById('selectLocation');
        for (let i = 0; i < locationsArray.length; i++) {
               let  option = document.createElement('option');
                    option.setAttribute('value', locationsArray[i] );
                    option.appendChild(document.createTextNode(locationsArray[i]));
                    select.appendChild(option);
        }
    })

    loadJsonData("assets/data/nationalparks.json").then((nationalParks) => {
        nationalParksArray = nationalParks.parks;
    })

    loadJsonData("assets/data/parktypes.json").then((parkTypes) => {
        parkTypesArray = parkTypes;
        let select  = document.getElementById('selectTypes');
        for (let i = 0; i < parkTypesArray.length; i++) {
               let  option = document.createElement('option');
                    option.setAttribute('value',parkTypesArray[i] );
                    option.appendChild(document.createTextNode(parkTypesArray[i]));
                    select.appendChild(option);
        }        
    })
    document.getElementById("selectLocation").style.display = "none";
    document.getElementById("selectTypes").style.display = "none";
}

let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}