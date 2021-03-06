//modal pop up
$(document).ready(function () {
    $('.modal').modal({
        opacity: 0,
    });
    $('.modal').modal("open");
});

//dropdown in nav bar
$(document).ready(function () {
    $('.dropdown-trigger').dropdown({ hover: false });
});

//color of mana select
(function ($) {
    $(function () {
        // Plugin initialization
        $('select').not('.disabled').formSelect();
    });
})(jQuery);

//hamburger-button
$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});

// Global variables
var numCardInput = document.querySelector("#number-of-card");
var colorManaInput = document.querySelector("#color-of-mana");
var numLandInput = document.querySelector("#number-of-land");
var numCreatureInput = document.querySelector("#number-of-creature");
var numInstantInput = document.querySelector("#number-of-instant");
var cardDisplayBox = document.querySelector(".card-display-box");
var deckUserInput = document.querySelector("#name-of-deck");

var modalFormEl = document.querySelector("#modal-form");

var savedDeckNameArr = [];
var landSavedDeckArr = [];
var creatureInstantSavedDeckArr = [];

// Array that stores all our decks 
// pulls from local storage on page refresh
// if nothing in local storage creates an empty array
var decks = JSON.parse(localStorage.getItem('decks')) || [];
loadFromPreviousSession();

function loadFromPreviousSession() {
    // iterate over decks and add buttons from previous sessions
    decks.forEach(function (deck) {
        addDeckToDropdown(deck.name);
    });
}

function addDeck(deckName, deckLands = [], deckCreatures = [], deckInstant = []) {
    //two parameters= name is a string and cards in an array. use to generate a deck
    // will array.push to deck array and make a new entry in decks
    // will add new object to decks array
    decks.push({
        name: deckName,
        landChosenArr: deckLands,
        creatureChosenArr: deckCreatures,
        instantChosenArr: deckInstant,
    });
    // refreshes the array in local storage with new info 
    localStorage.setItem('decks', JSON.stringify(decks));
}

// JSON data of land cards
var landCardJson = [
    {
        name: "Plains",
        type: "Land",
        color: "White",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524948&type=card"
    },
    {
        name: "Isolated Chapel",
        type: "Land",
        color: "White",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=443129&type=card"
    },
    {
        name: "Idyllic Grange",
        type: "Land",
        color: "White",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473208&type=card"
    },
    {
        name: "Bant Panorama",
        type: "Land",
        color: "White",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=430460&type=card"
    },
    {
        name: "Nykthos, Shrine to Nyx",
        type: "Land",
        color: "White",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=373713&type=card"
    },
    {
        name: "Seaside Citadel",
        type: "Land",
        color: "White",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=451232&type=card"
    },
    {
        name: "Isolated Watchtower",
        type: "Land",
        color: "White",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=450660&type=card"
    },
    {
        name: "Swamp",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524952&type=card"
    },
    {
        name: "Smoldering Marsh",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482942&type=card"
    },
    {
        name: "Silent Clearing",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=464195&type=card"
    },
    {
        name: "Cabal Stronghold",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=443126&type=card"
    },
    {
        name: "Castle Locthwain",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473203&type=card"
    },
    {
        name: "Leechridden Swamp",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417488&type=card"
    },
    {
        name: "Foul Orchard",
        type: "Land",
        color: "Black",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=508400&type=card"
    },
    {
        name: "Island",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524950&type=card"
    },
    {
        name: "Simic Growth Chamber",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=519352&type=card"
    },
    {
        name: "Zagoth Triome",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=479779&type=card"
    },
    {
        name: "Halimar Depths",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482908&type=card"
    },
    {
        name: "Botanical Sanctum",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417817&type=card"
    },
    {
        name: "Evolving Wilds",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=500962&type=card"
    },
    {
        name: "Tolaria West",
        type: "Land",
        color: "Blue",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=500962&type=card"
    },
    {
        name: "Mountain",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524954&type=card"
    },
    {
        name: "Cinder Glade",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=482891&type=card"
    },
    {
        name: "Caldera Lake",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=397490&type=card"
    },
    {
        name: "Sheltered Thicket",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426950&type=card"
    },
    {
        name: "Ghitu Encampment",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386321&type=card"
    },
    {
        name: "Needle Spires",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=496075&type=card"
    },
    {
        name: "Temple of Triumph",
        type: "Land",
        color: "Red",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=519362&type=card"
    },
    {
        name: "Forest",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=524956&type=card"
    },
    {
        name: "Graypelt Refuge",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=470795&type=card"
    },
    {
        name: "Selesnya Guildgate",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=496077&type=card"
    },
    {
        name: "Scattered Groves",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=426949&type=card"
    },
    {
        name: "Castle Garenbrig",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=473202&type=card"
    },
    {
        name: "Sunpetal Grove",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=435418&type=card"
    },
    {
        name: "Bayou",
        type: "Land",
        color: "Green",
        image: "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382860&type=card"
    }
]

function getUserInput(event) {
    event.preventDefault();
    var numCard = numCardInput.value;
    var colorMana = colorManaInput.value;
    var numLand = numLandInput.value;
    var numCreature = numCreatureInput.value;
    var numInstant = numInstantInput.value;
    var deckNameInput = deckUserInput.value;

    // Add an alert message for valid number of cards 

    var totalNumCards = Number(numLand) + Number(numCreature) + Number(numInstant);
    // var deckName = document.querySelector("#name-of-deck")

    var errorMessage = document.querySelector("#error-message");

    if (Number(numCard) < totalNumCards) {
        errorMessage.textContent = "Please remove cards to equal total number of cards";
        return;
    } else if (Number(numCard) > totalNumCards) {
        errorMessage.textContent = "Please enter more cards";
        return;
    } else if (deckNameInput === "") {
        errorMessage.textContent = "Please enter deck name";
        return;
    } else if (Number(numCard) === totalNumCards) {
        $('.modal').hide();
    }

    // savedDeckNameArr.unshift(deckNameInput);
    console.log(numCard);
    console.log(colorMana);
    console.log(numLand);
    console.log(numCreature);
    console.log(numInstant);
    addDeckToDropdown(deckNameInput);
    // saveLocalStorageData();
    getCardData(colorMana, numLand, numCreature, numInstant, totalNumCards, deckNameInput);
    $('#modal-form')[0].reset();
}

// Function that appends a new button to the dropdown
function addDeckToDropdown(deckName) {
    var deckDropdown = document.createElement('a');
    deckDropdown.classList.add("navbar-item")
    deckDropdown.classList.add("dropdown-menu")
    var btnEl = document.createElement('button');

    // Add a function that runs on button click
    deckDropdown.onclick = function () {
        loadDeck(deckName);
    };

    deckDropdown.append(btnEl);
    deckDropdown.textContent = deckName;
    $("#save-deck-dropdown").append(deckDropdown);
}

// Tries to find a deck given a deckName and draw it on screen
function loadDeck(deckName) {
    var deckToLoad = decks.find(function (deck) {
        return deck.name === deckName;
    });

    drawDeckOnScreen(deckToLoad.landChosenArr, deckToLoad.creatureChosenArr, deckToLoad.instantChosenArr);

}


//clear local storage on button click

function clearStorage() {

    $(".dropdown-menu").empty();
    $('.card-display-box').empty();
    localStorage.clear()
}

document.getElementById('clear-button').addEventListener('click', clearStorage);

var landCategory = "Land";
var creatureCategory = "Creature";
var instantCategory = "Instant";

//add deckNameInput to parameters so we can use it in this function
function getCardData(colorOfMana, numberOfLand, numberOfCreature, numberOfInstant, totalCards, deckNameInput) {
    var mtgApiUrl = "https://api.magicthegathering.io/v1/cards";

    fetch(mtgApiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $('.card-display-box').empty();
            console.log(data);
            console.log(typeof (data));
            console.log(data.cards.length);
            console.log(colorOfMana);

            var landPoolArr = [];
            var creaturePoolArr = [];
            var instantPoolArr = [];

            for (let i = 0; i < landCardJson.length; i++) {
                var dataMatchColorLand = landCardJson[i].color;
                var dataMatchTypesLand = landCardJson[i].type;
                if (dataMatchColorLand === colorOfMana && dataMatchTypesLand === landCategory) {
                    landPoolArr.push(landCardJson[i]);
                }
            }

            for (let i = 0; i < data.cards.length; i++) {
                var dataMatchColor = data.cards[i].colors[0];
                var dataMatchTypes = data.cards[i].types[0];
                if (dataMatchColor == colorOfMana && dataMatchTypes == creatureCategory) {
                    creaturePoolArr.push(data.cards[i]);
                } else if (dataMatchColor == colorOfMana && dataMatchTypes == instantCategory) {
                    instantPoolArr.push(data.cards[i]);
                }
            }
            console.log(landPoolArr);
            console.log(creaturePoolArr);
            console.log(instantPoolArr);

            var landChosenArr = [];
            var creatureChosenArr = [];
            var instantChosenArr = [];

            for (let i = 0; i < numberOfLand; i++) {
                var randomLandChosen = Math.floor(Math.random() * landPoolArr.length);
                var landPoolArrChosen = landPoolArr[randomLandChosen];
                landChosenArr.push(landPoolArrChosen);
            }

            for (let i = 0; i < numberOfCreature; i++) {
                var randomCreatureChosen = Math.floor(Math.random() * creaturePoolArr.length);
                var creaturePoolArrChosen = creaturePoolArr[randomCreatureChosen];
                creatureChosenArr.push(creaturePoolArrChosen);
            }

            for (let i = 0; i < numberOfInstant; i++) {
                var randomInstantChosen = Math.floor(Math.random() * instantPoolArr.length);
                var instantPoolArrChosen = instantPoolArr[randomInstantChosen];
                instantChosenArr.push(instantPoolArrChosen);
            }

            // We have all the data for this new deck
            // Name -> deckNameInput
            // Deck in 3 arrays -> landChosenArr, creatureChosenArr and instantChosenArr
            addDeck(deckNameInput, landChosenArr, creatureChosenArr, instantChosenArr);

            console.log(decks);

            drawDeckOnScreen(landChosenArr, creatureChosenArr, instantChosenArr);
        })
}

// Made part that draws cards on screen its own function
// so we can run this without looking for the api
function drawDeckOnScreen(landChosenArr, creatureChosenArr, instantChosenArr) {
    // Clear previous decks
    cardDisplayBox.innerHTML = '';

    var chosenCreatureInstantArr = [];
    chosenCreatureInstantArr = creatureChosenArr.concat(instantChosenArr);
    console.log(chosenCreatureInstantArr);

    cardDisplayBox.setAttribute("id", "card-display-row")

    for (let i = 0; i < landChosenArr.length; i++) {
        var landCardColumn = document.createElement('div');
        landCardColumn.classList.add("column", "is-one-fifth");
        var landCardFrame = document.createElement('div');
        landCardFrame.classList.add("card");
        var landCardImage = document.createElement('div');
        landCardImage.classList.add("card-image");
        var landCardImageSource = document.createElement('img')
        landCardImageSource.setAttribute('src', landChosenArr[i].image);
        if (landChosenArr[i].type === landCategory) {
            landCardImageSource.classList.add('land')
        }
        landCardImage.append(landCardImageSource);
        landCardColumn.append(landCardFrame);
        landCardColumn.append(landCardImage);
        cardDisplayBox.append(landCardColumn);
    }

    for (let i = 0; i < chosenCreatureInstantArr.length; i++) {
        var landCardColumn = document.createElement('div');
        landCardColumn.classList.add("column", "is-one-fifth");
        var landCardFrame = document.createElement('div');
        landCardFrame.classList.add("card");
        var landCardImage = document.createElement('div');
        landCardImage.classList.add("card-image");
        var landCardImageSource = document.createElement('img')
        landCardImageSource.setAttribute('src', (chosenCreatureInstantArr[i].imageUrl || "./no-url-image.jpeg"));
        if (chosenCreatureInstantArr[i].types[0] === creatureCategory) {
            landCardImageSource.classList.add('creature')
        } else {
            landCardImageSource.classList.add('instant')
        }
        landCardImage.append(landCardImageSource);
        landCardColumn.append(landCardFrame);
        landCardColumn.append(landCardImage);
        cardDisplayBox.append(landCardColumn);
    }
}

modalFormEl.addEventListener('submit', getUserInput);

// web animations

var turningIcon = {
    transform: "rotate(360deg) translate3D(-15%, -15%, 0)",
}

var iconTiming = {
    duration: 7000,
}

document.getElementById("white-mana").animate(
    turningIcon,
    iconTiming,
);

document.getElementById("red-mana").animate(
    turningIcon,
    iconTiming,
);

document.getElementById("black-mana").animate(
    turningIcon,
    iconTiming,
);

document.getElementById("blue-mana").animate(
    turningIcon,
    iconTiming,
);

document.getElementById("green-mana").animate(
    turningIcon,
    iconTiming,
);