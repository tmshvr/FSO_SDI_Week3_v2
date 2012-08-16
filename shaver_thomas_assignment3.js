// alert("JavaScript works!");

// Thomas Shaver
// SDI 1208
// Project 3
// Storytelling; using JSON.
var jsonText = {
    "menu": [
        { "food": "hamburgers", "have": false, "from": "Mike" },
        { "food": "hotdogs", "have": false, "from": "Bobbi" },
        { "food": "potatoes", "have": false, "from": "Colleen" },
        { "food": "hotdish", "have": false, "from": "Amanda" },
        { "food": "pop", "have": false, "from": "Kelly" },
        { "food": "dessert", "have": false, "from": "Rose" }
    ],
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
    "total": 21
};

var Coordinator = function( jsonObj ) {
    var menu = jsonObj.menu,
        guestList = ( jsonObj.list ),
        totalGuests = jsonObj.total,
        arrived = [],
        groupIterator = 0,

        whoArrived = function() {
            var arrival = getGroupAnnouncement( guestList[ groupIterator ]);
            console.log( arrival );
            groupIterator++;
        },
        getGroupAnnouncement = function( names ) {
            // --- Mutator --- (big one ?)
            var stringGroup = "", // for the else, and because Komodo calls this an anonymous function that doesn't always return a value, otherwise.
                group = names.split( ", " );
                announcement = " just got here.";

            if( group.length === 1 ) { // One person.
                arrived.push( group[ 0 ]);
                return ( group[ 0 ] + announcement );
            }
            else if( group.length === 2 ) { // Two people.
                arrived.push( group[ 0 ]);
                arrived.push( group[ 1 ]);
                return( group[ 0 ] + " and " + group[ 1 ] + announcement );
            }
            else { // Three or more people in the group.
                for( var n = 0; n < group.length; n++ ) { // for loop
                    // --- Nested Conditionals ---
                    if( n < ( group.length - 2 )) { // If it not the last person ", " concatenate them on.
                        stringGroup += group[ n ] + ", ";
                    }
                    else if( n === ( group.length - 2 )) { // If it's the next to last person..
                        stringGroup += group[ n ] + ", and " // ", and" them to the next.
                    }
                    else if( n === ( group.length - 1 )) { // If it's the last person..
                        stringGroup += group[ n ]; // no comma.
                    };
                    arrived.push( group[ n ]);
                };
            };
            return stringGroup + announcement; // --- Return String ---
        },
        whatArrived = function() { // --- Method Procedure ---
            var foodArrived = "";
            for( var k = 0; k < menu.length; k++ ) {
                for( var j = 0; j < arrived.length; j++ ) {
                    if( menu[ k ].from === arrived[ j ] && menu[ k ].have === false ) {
                        menu[ k ].have = true;
                        foodArrived = "\t\t" + arrived[ j ] + " brought the " + menu[ k ].food + ".\n";
                    };
                };
            };
            if( foodArrived != "" ) {
                console.log( foodArrived );
            };
        },
        getGuestsLeft = function( alreadyHere ) {
            return( totalGuests - alreadyHere );
        },
        timePasses = function() {
            whoArrived();
            whatArrived();
/*
            if( getGuestsLeft( arrived.length ) === 0 ) {
                whatArrived();
            };
*/
        };
    return {
        "timePasses": timePasses
    };
};

var Teri = new Coordinator( jsonText );
/**/
Teri.timePasses();
Teri.timePasses();
Teri.timePasses();
Teri.timePasses();
Teri.timePasses();
Teri.timePasses();
Teri.timePasses();
Teri.timePasses();
/**/