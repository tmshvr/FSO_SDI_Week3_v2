// alert("JavaScript works!");

// Thomas Shaver
// SDI 1208
// Project 3
// Storytelling; using JSON.

// --- Global vars ? ---
var teri = null,
jsonText = { // --- Level 1: object ---
    "menu": [ // --- Level 2: array ---
        { "food": "hamburgers", "have": false, "from": "Mike" }, // --- Level 3: object & Level 4: data ---
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
},

Coordinator = function( jsonObj ) { // --- Object argument ---
    var menu = jsonObj.menu, // --- Property object ---
        guestList = jsonObj.list, // --- Property array ---
        totalGuests = jsonObj.total, // --- Property number ---
        ready = false, // --- Property boolean ---
        tell = "Not yet, still people coming.", // --- Property string ---
        arrived = [],
        groupIterator = 0,

        getGroupAnnouncement = function( names ) { // --- String arg & Method Function ---
            // --- Mutator --- (Big one? Modifies arrived array.)
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
                for( var n = 0; n < group.length; n++ ) { // --- For loop ---
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
            return stringGroup + announcement; // --- Return string ---
        },
        whoArrived = function() {
            var arrival = getGroupAnnouncement( guestList[ groupIterator ]);
            console.log( arrival );
            groupIterator++;
        },
        whatArrived = function() { // --- Method procedure ---
            var foodArrived = "";
            for( var k = 0; k < menu.length; k++ ) {
                for( var j = 0; j < arrived.length; j++ ) {
                    if( menu[ k ].from === arrived[ j ]) {
                        if( menu[ k ].have === false ) { // --- Nested conditional ---
                            menu[ k ].have = true;
                            foodArrived = "\t\t" + arrived[ j ] + " brought the " + menu[ k ].food + ".\n";
                        };
                    };
                };
            };
            if( foodArrived != "" ) {
                console.log( foodArrived );
            };
        }, // --- Back ---
        getGuestsLeft = function( alreadyHere ) {
            return( totalGuests - alreadyHere );
        },
        getReady = function() { // --- Accessor (getter) ---
            return ready;
        },
        setReady = function( boolVal ) { // --- Boolean argument & Mutator (setter) ---
            if( boolVal === true || boolVal === false ) { // --- Logical OR ---
                ready = boolVal;
            };
        },
        timePasses = function( readyOrNot ) {
            whoArrived();
            whatArrived();
            if( arrived.length - 1 === totalGuests ) {
                setReady( true );
            };
        },
        throwParty = function() {
            while( arrived.length < totalGuests ) {
                 timePasses( getReady());
            };
        };
    return {
        "throwParty": throwParty
    };
};

teri = new Coordinator( jsonText );
teri.throwParty();