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

function handleSubmit(event) {
  event.preventDefault();

  // 1. Obtain the text the user typed into the name
  //    input, then store it in a variable called name.
  // 2. Send a POST request to POST /us containing
  //    a data object that looks something like:
  //    {name: name}
}

// Call the function so that it executes when our web
// app loads up initially:
getAndRenderDB();
