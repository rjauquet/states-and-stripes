var states = [
    { "name": "Alabama",         "abbreviation": "AL",   "code": "B", "joined": 22 },
    { "name": "Alaska",          "abbreviation": "AK",   "code": "A", "joined": 49 },
    { "name": "Arizona",         "abbreviation": "AZ",   "code": "D", "joined": 48 },
    { "name": "Arkansas",        "abbreviation": "AR",   "code": "C", "joined": 25 },
    { "name": "California",      "abbreviation": "CA",   "code": "E", "joined": 31 },
    { "name": "Colorado",        "abbreviation": "CO",   "code": "F", "joined": 38 },
    { "name": "Connecticut",     "abbreviation": "CT",   "code": "G", "joined": 5 },
    { "name": "Delaware",        "abbreviation": "DE",   "code": "H", "joined": 1 },
    { "name": "Florida",         "abbreviation": "FL",   "code": "I", "joined": 27 },
    { "name": "Georgia",         "abbreviation": "GA",   "code": "J", "joined": 4 },
    { "name": "Hawaii",          "abbreviation": "HI",   "code": "K", "joined": 50 },
    { "name": "Idaho",           "abbreviation": "ID",   "code": "M", "joined": 43 },
    { "name": "Illinois",        "abbreviation": "IL",   "code": "N", "joined": 21 },
    { "name": "Indiana",         "abbreviation": "IN",   "code": "O", "joined": 19 },
    { "name": "Iowa",            "abbreviation": "IA",   "code": "L", "joined": 29 },
    { "name": "Kansas",          "abbreviation": "KS",   "code": "P", "joined": 34 },
    { "name": "Kentucky",        "abbreviation": "KY",   "code": "Q", "joined": 15 },
    { "name": "Louisiana",       "abbreviation": "LA",   "code": "R", "joined": 18 },
    { "name": "Maine",           "abbreviation": "ME",   "code": "U", "joined": 23 },
    { "name": "Maryland",        "abbreviation": "MD",   "code": "T", "joined": 7 },
    { "name": "Massachusetts",   "abbreviation": "MA",   "code": "S", "joined": 6 },
    { "name": "Michigan",        "abbreviation": "MI",   "code": "V", "joined": 26 },
    { "name": "Minnesota",       "abbreviation": "MN",   "code": "W", "joined": 32 },
    { "name": "Mississippi",     "abbreviation": "MS",   "code": "Y", "joined": 20 },
    { "name": "Missouri",        "abbreviation": "MO",   "code": "X", "joined": 24 },
    { "name": "Montana",         "abbreviation": "MT",   "code": "Z", "joined": 41 },
    { "name": "Nebraska",        "abbreviation": "NE",   "code": "c", "joined": 37 },
    { "name": "Nevada",          "abbreviation": "NV",   "code": "g", "joined": 36 },
    { "name": "New Hampshire",   "abbreviation": "NH",   "code": "d", "joined": 9 },
    { "name": "New Jersey",      "abbreviation": "NJ",   "code": "e", "joined": 3 },
    { "name": "New Mexico",      "abbreviation": "NM",   "code": "f", "joined": 47 },
    { "name": "New York",        "abbreviation": "NY",   "code": "h", "joined": 11 },
    { "name": "North Carolina",  "abbreviation": "NC",   "code": "a", "joined": 12 },
    { "name": "North Dakota",    "abbreviation": "ND",   "code": "b", "joined": 39 },
    { "name": "Ohio",            "abbreviation": "OH",   "code": "i", "joined": 17 },
    { "name": "Oklahoma",        "abbreviation": "OK",   "code": "j", "joined": 46 },
    { "name": "Oregon",          "abbreviation": "OR",   "code": "k", "joined": 33 },
    { "name": "Pennsylvania",    "abbreviation": "PA",   "code": "l", "joined": 2 },
    { "name": "Rhode Island",    "abbreviation": "RI",   "code": "m", "joined": 13 },
    { "name": "South Carolina",  "abbreviation": "SC",   "code": "n", "joined": 8 },
    { "name": "South Dakota",    "abbreviation": "SD",   "code": "o", "joined": 40 },
    { "name": "Tennessee",       "abbreviation": "TN",   "code": "p", "joined": 16 },
    { "name": "Texas",           "abbreviation": "TX",   "code": "q", "joined": 28 },
    { "name": "Utah",            "abbreviation": "UT",   "code": "r", "joined": 45 },
    { "name": "Vermont",         "abbreviation": "VT",   "code": "t", "joined": 14 },
    { "name": "Virginia",        "abbreviation": "VA",   "code": "s", "joined": 10 },
    { "name": "Washington",      "abbreviation": "WA",   "code": "u", "joined": 42 },
    { "name": "West Virginia",   "abbreviation": "WV",   "code": "w", "joined": 35 },
    { "name": "Wisconsin",       "abbreviation": "WI",   "code": "v", "joined": 30 },
    { "name": "Wyoming",         "abbreviation": "WY",   "code": "x", "joined": 44 }
];

function buildStatesAndStripes(states, key){
    
    states.sort(function(a,b) { return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0); } );

    var stateGroup = document.getElementById('states');
    var rowlen = 6;
    var rowi = 0;
    var coli = 0;
    var basex = 35.6;
    var basey = 22.65;
    //var stateSize = 61.6;
    var stateSize = 55;
    var space = 126;
    for(var i=0; i<states.length; i++){

        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttributeNS(null, 'x', (basex + space*rowi + (rowlen === 6 ? 0:stateSize)));
        text.setAttributeNS(null, 'y', (basey + stateSize*(coli+1)));
        text.setAttributeNS(null, 'fill', 'white');
        text.setAttributeNS(null, 'font-family', 'StateFaceRegular');
        text.setAttributeNS(null, 'font-size', '61.6px');
        text.setAttributeNS(null, 'vertical-align', 'text-top');
        text.setAttributeNS(null, 'text-align', 'center');
        
        var textNode = document.createTextNode(states[i].code);
        text.appendChild(textNode);
        stateGroup.appendChild(text);

        rowi++;
        if(rowi === rowlen){
            rowlen = rowlen === 6 ? 5:6;
            rowi = 0;
            coli++;
            stateRow = '';
        }
    }
} 

(function (){
    buildStatesAndStripes(states, 'name');
})();