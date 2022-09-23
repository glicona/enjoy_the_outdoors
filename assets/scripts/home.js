"use strict"

let mountainsArray = []
let mountainOne
let mountainTwo
let mountainThree

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
        mountainOne=mountainsArray[Math.floor(Math.random() * mountainsArray.length)]
        mountainTwo=mountainsArray[Math.floor(Math.random() * mountainsArray.length)] 
        mountainThree=mountainsArray[Math.floor(Math.random() * mountainsArray.length)]   

        document.getElementById("imgOne").src='/assets/images/mountains/'+mountainOne.img;
        document.getElementById("tittle-one").innerHTML= mountainOne.name;
        document.getElementById("text-one").appendChild(document.createTextNode(mountainOne.desc))

        document.getElementById("imgTwo").src='/assets/images/mountains/'+mountainTwo.img;
        document.getElementById("tittle-two").innerHTML= mountainTwo.name;
        document.getElementById("text-two").appendChild(document.createTextNode(mountainTwo.desc))

        document.getElementById("imgthree").src='/assets/images/mountains/'+mountainThree.img;
        document.getElementById("tittle-three").innerHTML= mountainThree.name;
        document.getElementById("text-three").appendChild(document.createTextNode(mountainThree.desc))
        
    })
    
}


let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}

