import { setLayout } from "../utils/render.js";

var recordNbr = 0;

//somehow add the username to content
const content = `<p>Profile du joueur</p>`;
const ProfilePage = ()=>{
setLayout("ProfilePage");
const page = document.getElementById("page");
page.innerHTML = content;
}

//returns username and all his records
const getUserRecord = async()=>{
    try{
        const response = await fetch("./api/users");
        const divPage = getElementById("page");

        if (!response.ok) {
            // status code was not 200, error status code
            const error = await response.text(); // get the textual error message
            throw new Error(error);
          }
          const user= await response.json(); // json() returns a promise => we wait for the data
          // create an HTMLTableElement dynamically, based on the pizzas data (Array of Objects)
          const table = document.createElement("table");
          const headerRow = document.createElement("tr");
          const headerCellNbr = document.createElement("th");
          const headerCellRe= document.createElement('th');
          headerCellNbr.innerHTML ="Nbr";
          headerCellDes.innerText = "Record";
          headerRow.appendChild(headerCellNbr);
          headerRow.appendChild(headerCellRe);
          table.appendChild(headerRow);
          // deal with data rows
          user.record.forEach((record) => {
           
            const line = document.createElement("tr");
            const nbrCell = document.createElement("td");
            const recordCell = document.createElement("td");
            nbrCell.innerHTML = recordNbr+1;
            recordCell.innerHTML = record[recordNbr];
            recordNbr++;
            line.appendChild(nbrCell);
            line.appendChild(recordCell)
            table.appendChild(line);

            divPage.innerHTML=table;
          });
    }catch (error) {
        console.error("error:", error);
      }
}


getUserName = async()=>{
    try{
        const response = await fetch("./api/users");
        const divPage = getElementById("page");

        if (!response.ok) {
            // status code was not 200, error status code
            const error = await response.text(); // get the textual error message
            throw new Error(error);
          }
          const user= await response.json(); // json() returns a promise => we wait for the data
         
          divPage.innerHTML = user.name;      
    }catch (error) {
        console.error("error:", error);
      } 
}

getUserRecord();
getUserName();
    
export default ProfilePage;