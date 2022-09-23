"use strict"

let mountainsArray = []

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
        let select  = document.getElementById('selectMountains');
        for (let i = 0; i < mountainsArray.length; i++) {
               let  option = document.createElement('option');
                    option.setAttribute('value', mountainsArray.indexOf(mountainsArray[i]) );
                    option.appendChild(document.createTextNode(mountainsArray[i].name));
                    select.appendChild(option);
        }
    })
    
}


//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}

function selectMountain(index){
   if(index>-1&&existMountain(index)){
       createNodeCard(index);
       console.log(":::::::: Created node succefull :::::::")
    }
}

function existMountain(i){
        const parent = document.getElementById('row-id-container');
        const children = Array.from(parent.children);
        const nodeIds = children.map(element => {
           return element.id;
        });
    return  nodeIds.indexOf('div-column-'+i)==-1;
}

function createNodeCard(i){
    let mountain= mountainsArray[i]
    let row  = document.getElementById('row-id-container');
    var column = document.createElement('div');
        column.className='col-xs-12 col-sm-4';
        column.setAttribute('id','div-column-'+i);

    var card = document.createElement('div');
        card.className='card';
    var imgCard = document.createElement('a');
        imgCard.className='img-card';
    var img     = document.createElement('img');
        img.src= '/assets/images/mountains/'+mountain.img;
    
    var content = document.createElement('div');
        content.className='card-content';

    var title = document.createElement('h4');
        title.className='card-title';

    var textTitle = document.createElement('a');
        textTitle.appendChild(document.createTextNode(mountain.name));
        title.appendChild(textTitle);

    var description = document.createElement('p');
        description.appendChild(document.createTextNode(mountain.desc));
        content.appendChild(title);
        content.appendChild(description);
    
    var read = document.createElement('div');
        read.className='card-read-more';
    var more = document.createElement('a');
        more.className='btn btn-link btn-block';
        more.appendChild(document.createTextNode('Close'));
        more.setAttribute('onclick','removeCardMountain('+i+');');
        read.appendChild(more);

        imgCard.appendChild(img);
        card.appendChild(imgCard);
        card.appendChild(content);
        card.appendChild(read);

        column.appendChild(card);
        row.appendChild(column);
}

function removeCardMountain(i){
    var div_column = document.getElementById('div-column-'+i);
    div_column.parentNode.removeChild(div_column);
}

/*
!async function(){
    let data = await fetch("assets/data/mountains.json")
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
    
           mountainsArray = data.mountains;

        let ele = document.getElementById('selectMountains');
        for (let i = 0; i < mountainsArray.length; i++) {
            ele.innerHTML = ele.innerHTML +'<option value="' + mountainsArray[i].name + '">' + mountainsArray[i].name + '</option>';
        }
    }();*/