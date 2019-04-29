// REF: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
const getStuff = 'https://raw.githubusercontent.com/shultztom/dinosaur-fact-api/master/dinosaurs.json';

// Do stuff with returned data
let doStuff = function(dinosaurs) {

   // How big is array?
  console.log( 'There are ' + dinosaurs.length + ' dinosaurs on this list.' );
  console.log( dinosaurs );
  //console.log( dinosaurs[1].Description);

 
  for ( i=0; i < dinosaurs.length; i++ ) {

    const template = `<h1> ${dinosaurs[i].Name} </h1> <p> ${dinosaurs[i].Description} </p>`;
    $('#app').append( template );

  }
  
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, doStuff);


/************************************
  SHOW (DISPLAY ON PAGE)
************************************/ 
let showStuff = function(dinosaurs) {
  
  console.log( dinosaurs );  
 
}
