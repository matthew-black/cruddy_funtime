console.log('👋🌍');


function getAndRenderDB(){
axios({
  method:'GET',
  url:'/us',

});
};

//console.log the function to see if the function is grabbing
//the router.get in the router side.
  console.log(getAndRenderDB());