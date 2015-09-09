// Create a variable that holds your name
var myName = "Jesse";

// Create an object that holds your personal information
var myInfo = {
  age: 41,
  last_company: "Greer",
  marital_status: "married",
  spouse: "Kate"
};

// Add your name as a new key on the info object
myInfo.name = myName;

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};

var MC41 = {
  name: "MC41",
  artist: "MC4",
  year: 2015,
  sales: 8,
  number_of_hits: 0
}

var RubberSoul = {
  name: "Rubber Soul",
  artist: "The Beatles",
  year: 1967,
  sales: 10000000,
  number_of_hits: 3
}

var ForTheRecord = {
  name: "For The Record",
  artist: "Michigan Jake",
  year: 2002,
  sales: 5000,
  number_of_hits: 1
}

// Create an array that holds records
var recordArray = [Eliminator];

// Add at least two more album objects to the array
recordArray.push(MC41, RubberSoul, ForTheRecord);

/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var rateAlbum = function (album, rating) {
  // Add the rating to the album
  album.rating = rating;
};

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function (albumList) {
  for (var i = 0; i < recordArray.length; i++) {
    rateAlbum(albumList[i], 1);
  }
};

// Call the function that starts modifying the array
modifyAlbums(recordArray);
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById("x");

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);