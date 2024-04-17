// This function executes steps 1 and 4 of the
// "GET Functionality" plan in README.md:
function getAndRenderDB(){
axios({
  method:'GET',
  url:'/us',
})
  .then((response) => {
    let rowData = response.data;
    console.log("Checking to see:", rowData)

    for(dbData of rowData){
      let name = dbData.name
      let ishungry = dbData.ishungry
      let inserted_at = dbData.inserted_at

      let dbList=document.getElementById("dbList")
      dbList.innerHTML+=`
        <li>
          ${name} ${ishungry} ${inserted_at}  
        </li>
      `
    }
  })
};

// Call the function so that it executes when our web
// app loads up initially:
getAndRenderDB();
