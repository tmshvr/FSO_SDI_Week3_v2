// alert("JavaScript works!");

// Thomas Shaver
// SDI 1208
// Project 3
// Storytelling; using JSON.

// --- Global vars ? ---
var teri = null,
jsonText = { // --- JSON Data & Level 1: object ---
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

Coordinator = function( jsonArray ) { // --- Array argument ---
// --- Local vars ---
    var menu = jsonArray[ 0 ], // --- Property object ---
        guestList = jsonArray[ 1 ], // --- Property array ---
        totalGuests = jsonArray[ 2 ], // --- Property number ---
        ready = false, // --- Property boolean ---
        tell = "Not yet, still people coming.", // --- Property string ---
        arrived = [],
        groupIterator = 0,
        decorations = 0,
        destroyed = 0,

        getGroupAnnouncement = function( names ) { // --- String arg & Method function ---
            // --- Mutator --- (Big one? Modifies arrived array.)
            var stringGroup = "", // for the else, and because Komodo calls this an anonymous function that doesn't always return a value, otherwise.
                group = names.split( ", " );
                announcement = " just got here.";
            if( group.length === 1 ) { // One person. --- Conditional ---
                arrived.push( group[ 0 ]);
                return ( group[ 0 ] + announcement ); // --- Return string ---
            }
            else if( group.length === 2 ) { // Two people.
                arrived.push( group[ 0 ]);
                arrived.push( group[ 1 ]);
                return( group[ 0 ] + " and " + group[ 1 ] + announcement );
            }
            else { // Three or more people in the group.
                for( var n = 0; n < group.length; n++ ) { // --- For loop ---
                    // --- Nested Conditional ---
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
            return stringGroup + announcement;
        },
        whatArrived = function() { // --- Method procedure ---
            var foodArrived = "";
                for( var k = 0; k < menu.length; k++ ) {
                    for( var j = 0; j < arrived.length; j++ ) {
                        if( menu[ k ].from === arrived[ j ] && menu[ k ].have === false ) { // --- Logical and ---
                            menu[ k ].have = true;
                            foodArrived = "\t" + arrived[ j ] + " brought the " + menu[ k ].food + ".\n";
                        };
                    };
                };
            return foodArrived;
        }, // --- Back ---
        getGuestsLeft = function( alreadyHere ) { // --- Number argument ---
            return( totalGuests - alreadyHere ); // --- Return number ---
        },
        getReady = function() { // --- Method Accessor (getter) ---
            return ready; // --- Return boolean ---
        },
        setReady = function( boolVal ) { // --- Boolean argument & Method Mutator (setter) ---
            if( boolVal === true || boolVal === false ) { // --- Logical OR ---
                ready = boolVal;
            };
        },
        announce = function( what ) { // --- String argument ---
            console.log( "Announcement:\t" + what ); // --- Output ---
        },
        decorate = function( up, down ) {
            decorations += up;
            destroyed += down;
        },
        timePasses = function( readyOrNot ) {
            var arrival = getGroupAnnouncement( guestList[ groupIterator ]), food = null;
                announce( arrival );
                groupIterator++;
                food = whatArrived();
                announce( food );
                if( arrived.length - 1 === totalGuests ) {
                    setReady( true );
                };
                if( ! arrived.length % 2 === 0 || arrived.length % 5 === 0 ) { // --- Logical or & Math ---
                    console.log( "Put up more decorations." );
                    if( arrived.length % 9 === 0 ) {
                        console.log( "The kids's destroyed a decoration." );
                        decorate( 2, 1 );
                    }
                    else {
                        decorate( 2, 0 );
                    };
                };
        },
        throwParty = function() {
            while( arrived.length < totalGuests ) { // --- While loop ---
                 timePasses( getReady());
            };
            console.log( "We got " + decorations + " decorations up, with " + destroyed + " decoration destroyed by the kids." );
            announce( "Everybody's here, so I'm gonna call Jim and tell him we're ready - nobody leave." );
        };
    return { // --- Return object ---
        "throwParty": throwParty
    };
};

var init = function( jsonObj ) { // --- Object argument ---
    return [ jsonObj.menu, jsonObj.list, jsonObj.total ]; // --- Return array ---
};

// --- Start ---
teri = new Coordinator(init( jsonText ));
teri.throwParty();
// --- Finish ---