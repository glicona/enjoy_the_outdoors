
let parksByTypes = []

function queryParks(typeQuery){
    switch (typeQuery) {
        case 0:
            document.getElementById("selectLocation").style.display = "block";
            document.getElementById("selectTypes").style.display = "none";
          break;
        case 1:
            document.getElementById("selectLocation").style.display = "none";
            document.getElementById("selectTypes").style.display = "block";
          break;
        case 2:
          //Statements executed when the
          //result of expression matches valueN
          break;
        default:
          //Statements executed when none of
          //the values match the value of the expression
          break;
      }
}

function searchByType(query){
      parksByTypes.length=0;
      parksByTypes = nationalParksArray.filter (park => park.LocationName.includes(query));
      generateTable();
}
function searchByLocation(query){
   console.log(query);
    parksByTypes.length=0;
    parksByTypes = nationalParksArray.filter (park => park.State===query);
    generateTable();
}
function searchAllParks(){
  parksByTypes.length=0;
  parksByTypes = nationalParksArray;
  generateTable();
}

function generateTable() {
    let contentTable  = document.getElementById('contentTable');
    contentTable.innerHTML="";
    const headers = ["LocationID", "LocationName", "Address", "City","State","ZipCode","Phone","Fax" ];
    const table = document.createElement("table");
    const tableHead = document.createElement("thead"); 
    const trow = document.createElement("tr");
    for (let x = 0; x < headers.length; x++) {
      const th = document.createElement("th");
      th.setAttribute("scope","col");
      th.appendChild(document.createTextNode(headers[x])); 
      trow.appendChild(th);
    }
    tableHead.appendChild(trow);
    table.appendChild(tableHead);
    
    table.className="table table-striped table-dark";
    const tableBody = document.createElement("tbody");
    for (let i = 0; i < parksByTypes.length; i++) {
        let park=parksByTypes[i]
        const row = document.createElement("tr");
          for (var key of Object.keys(park)) {
              if(headers.includes(key)){
                    const td = document.createElement("td");
                    td.appendChild(document.createTextNode(park[key])); 
                    row.appendChild(td);
                } 
            }
      tableBody.appendChild(row);      
    }
    table.appendChild(tableBody);
    contentTable.appendChild(table);
}