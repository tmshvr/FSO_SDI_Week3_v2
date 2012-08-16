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
        { "hamburgers": true, "from": "Mike" },
        { "hotdogs": true, "from": "Bobbi" },
        { "potatoes": false, "from": "Colleen" },
        { "hotdish": false, "from": "Amanda" },
        { "pop": false, "from": "Kelly" },
        { "dessert": false, "from": "Rose" }
    ],
    "totalGuests": 21
};

var Coordinator = function( list ) {
    var guestList = list,
        arrived = [],
        groupIterator = 0,

        whoArrived = function() {
            var arrival = getGroupAnnouncement( guestList[ groupIterator ]);
            console.log( arrival );
            groupIterator++;
        },
        getGroupAnnouncement = function( names ) {
            // --- Mutator --- (big one ?)
            var group = names.split( ", " );
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
                var stringGroup = "";
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
                return stringGroup + announcement; // --- Return String ---
            };
        },
        timePasses = function() { // --- Method Function ? ---
            whoArrived();
        };
    return {
        "timePasses": timePasses
    };
};

var jsonArg = JSON.stringify( jsonText );
console.log( JSON.parse( jsonArg ));
var Teri = new Coordinator( JSON.parse( jsonArg ).list );
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