/*
    TITLE: Index
    AUTHOR: Nicholas P Norman
    CREATE DATE: 25 Nov 2023
    PURPOSE: JS for the Homepage for DownloadBed
    MODIFICATION HISTORY:
    25 Nov 2023 (NPN)
    23 Dec 2023 (NPN)
*/

//create a "game" object
function Game(strName, intVals, imgThumbnail) {
    this.strName = "Default Name";
    this.intVals = [];
    this.imgThumbnail = "./resources/default-thumbnail.png";
}

var beThePin = Game("Be The Pin (Remastered)", ["PC", "Mobile", "itch.io", "Play Store"], "./resources/default-thumbnail.png");
var questTrade = Game("Quest of the Millionth Trade", ["PC", "Steam", "itch.io"], "./resources/default-thumbnail.png");
var mightySudoku = Game("Mighty Sudoku", ["Mobile", "App Store", "Play Store"], "./resources/default-thumbnail.png");
var currentGames = [beThePin, questTrade, mightySudoku];

//for a button press on shop select
    //bold, underline, and add "X " on word
    //remove all games
    //for each game stored
        //if value(s) is same as button pressed
            //append game
        //else
            //do nothing