// alert("JavaScript works!");

// Thomas Shaver
// SDI 1208
// Project 3
// Storytelling; using JSON.

var jsonText = {
    "list": [
        "Mike, Nevada, Johnny",
        "Bobbi, Sage, Madi",
        "Haley",
        "Patrick, Colleen",
        "Amanda, Logan, Karli, Elizabeth",
        "Kelly, Tim",
        "Matt, Jesse",
        "Rose, Verna, Joe, Josh"
    ],
    "menu": [
        {
            "hamburgers": true,
            "from": "Mike"
        },
        {
            "hotdogs": true,
            "from": "Bobbi"
        },
        {
            "potatoes": false,
            "from": "Colleen"
        },
        {
            "hotdish": false,
            "from": "Amanda"
        },
        {
            "pop": false,
            "from": "Kelly"
        },
        {
            "dessert": false,
            "from": "Rose"
        }
    ],
    "totalGuests": 21
};

jsonObj = JSON.parse( JSON.stringify( jsonText ));
console.log( jsonObj );