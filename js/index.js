/*
    TITLE: Index
    AUTHOR: Nicholas P Norman
    CREATE DATE: 25 Nov 2023
    PURPOSE: JS for the Homepage for DownloadBed
    MODIFICATION HISTORY:
    25 Nov 2023 (NPN)
    23 Dec 2023 (NPN)
    28 Dec 2023 (NPN)
*/

var currentGames = [
    ["be-the-pin", ["PC", "Mobile", "itch.io", "Play Store"]],
    ["trade-quest", ["PC", "Steam", "itch.io"]],
    ["mighty-sudoku", ["Mobile", "App Store", "Play Store"]]
];

//function when options is selected
var isTagSelected = false;
var tagSelected = "";
var optionSelected = null;

function setOptionDecor(option) {
    option.classList.add("shop-selected");
}

function removeOptionDecor(option) {
    option.classList.remove("shop-selected");
}

function showGame(game) {
    game.style.display = "block";
}

function hideGame(game) {
    game.style.display = "none";
}

function selectTag(tag, option) {
    //set decor
    setOptionDecor(option);
    //save for future use
    isTagSelected = true;
    tagSelected = tag;
    optionSelected = option;

    //for each game
    for (var i = 0; i < currentGames.length; i++) {
        //hide game
        var tempGame = document.getElementById(currentGames[i][0]);
        hideGame(tempGame);
    }
    
    //for each game
    for (var i = 0; i < currentGames.length; i++) {
        //if tag is present
        if (currentGames[i][1].includes(tag)) {
            //show game
            var tempGame = document.getElementById(currentGames[i][0]);
            showGame(tempGame);
        }
    }
}

function deselectTag() {
    //remove decor
    removeOptionDecor(optionSelected);
    isTagSelected = false;
    tagSelected = "";
    optionSelected = null;

    //show all games
    for (var i = 0; i < currentGames.length; i++) {
        //show game
        var tempGame = document.getElementById(currentGames[i][0]);
        showGame(tempGame);
    }
}

function selectShopTag(e) {
    var target = e.target;
    var tag = target.textContent.toString();
    //makes sure list element is li/text
    if(target instanceof HTMLLIElement) {
        if (isTagSelected == false) {
            //select Tag
            selectTag(tag,target);
        } else {
            //tag is selected
            //if tag is the same
            if (tagSelected == tag) {
                deselectTag();
            } else {
                //else tag isnt the same
                //deselect old
                deselectTag();
                //select new
                selectTag(tag, target);
            }
        }
    }
    
    e.stopPropagation();
}

//for a button press on shop select
var shopSelect = document.getElementById("game-sort");
shopSelect.addEventListener('click', function(e) {
    selectShopTag(e);
});