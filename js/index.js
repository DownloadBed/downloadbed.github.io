/*
    TITLE: Index
    AUTHOR: Nicholas P Norman
    CREATE DATE: 25 Nov 2023
    PURPOSE: JS for the Homepage for DownloadBed
    MODIFICATION HISTORY:
    25 Nov 2023 (NPN)
    23 Dec 2023 (NPN)
*/

var currentGames = [
    ["Be The Pin (Remastered)", ["PC", "Mobile", "itch.io", "Play Store"], "./resources/default-thumbnail.png", ""],
    ["Quest of the Millionth Trade", ["PC", "Steam", "itch.io"], "./resources/default-thumbnail.png", ""],
    ["Mighty Sudoku", ["Mobile", "App Store", "Play Store"], "./resources/default-thumbnail.png", ""]
];

//function when options is selected
function selectShopTag(e) {
    var target = e.target;
    if(target instanceof HTMLLIElement) {
        //bold, underline, and add "X " on word
        target.classList.add("shop-selected");
        //remove all games by display none

        //for each game stored
        for (var i = 0; i < currentGames.length; i++) {
            //if value(s) is same as button pressed
            if (currentGames[i][1].includes(target.textContent.toString())) {
                //get game gallery child, then dinsplay none, set bool, etc (look at board)
            } else {
                console.log("not in");
            }
                //append game
            //else
                //do nothing
        }
    }
    
    e.stopPropagation();
}

//for a button press on shop select
var shopSelect = document.getElementById("game-sort");
shopSelect.addEventListener('click', function(e) {
    selectShopTag(e);
});