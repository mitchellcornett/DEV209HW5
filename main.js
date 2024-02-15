// array that holds the games
let gameArray = [];

// game object (holds all the information for game)
let gameObject = function(pName, pDev, pYear, pReview, pGenre){
    this.name = pName;
    this.dev = pDev;
    this.year = pYear;
    this.review = pReview;
    this.genre = pGenre;
}

// examples to be pushed
gameArray.push(new gameObject("Granblue Fantasy", "Cygames", "2014", "This game is great!", "Role Playing"));
gameArray.push(new gameObject("Donkey Kong", "Nintendo", "1981", "A classic!", "Misc."));



// code runs when dom is loaded
document.addEventListener("DOMContentLoaded", function (event) {
    
    // assign html elements to javascript variables
    let gameName = document.getElementById("gameName");
    let gameDev = document.getElementById("gameDev");
    let gameYear = document.getElementById("gameYear");
    let gameReview = document.getElementById("gameReview");
    let selectGenre = "";
    
    // creates the list on the list page of the html
    createList();

    // called whenever the add button is pressed
    document.getElementById("addButton").addEventListener("click", function(){
        // pushes a new game to the game array
        gameArray.push(new gameObject(gameName.value, gameDev.value, gameYear.value, gameReview.value, selectGenre));

        // clears the values of the forms in the html form
        gameName.value = "";
        gameDev.value = "";
        gameYear.value = "";
        gameReview.value = "";

        // recreates the list in the list page of the html
        createList();

        document.location.href = "index.html#list";
    });

    // changes the selectGenre varialbe to whatever the value is of the select-genre tag is in the html
    $(document).bind("change", "#select-genre", function (event, ui) {
        selectGenre = document.getElementById("select-genre").value;
    });


});

function createList(){
    // clears the list in the list page of the html
    let gameList = document.getElementById("gameList");
    gameList.innerHTML = "";

    // for every element in the array, create an li element and append it to the ul
    for (let i = 0; i < gameArray.length; i++){
        let listElement = document.createElement('li');
        listElement.innerHTML = `${gameArray[i].name} - ${gameArray[i].dev}: ${gameArray[i].year} [${gameArray[i].genre}]`
        gameList.appendChild(listElement);
    }
};