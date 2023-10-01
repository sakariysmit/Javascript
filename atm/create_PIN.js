
let stringsarr = [];
let objsarr = [];
let nullsarr = [];
let undefinedarr = [];
let numbersarr = [];

let alltypesarr = ["rushi", "hemi", "priyanka", "heer", "patel", {
    name: "rushi",
    age: 18
}, {
    name: "rushi",
    age: 8
}, {
    name: "heer",
    age: 18
}, {
    name: "hemi",
    age: 21
}, {
    name: "priyanka",
    age: 21
},
null, null, null, null, 1, 2, 3, 4, 5,undefined,undefined,undefined,undefined
];

for (let i = 0; i < alltypesarr.length; i++) {
    let element = alltypesarr[i];
    
    if (typeof element === "string") {
        stringsarr.push(element);
    } else if (typeof element === "object" && element !== null) {
        objsarr.push(element);
    } else if (element === null) {
        nullsarr.push(element);
    } else if (typeof element === "undefined") {
        undefinedarr.push(element);
    } else if (typeof element === "number") {
        numbersarr.push(element);
    }
}



console.log("Strings Array:", stringsarr);
console.log("Objects Array:", objsarr);
console.log("Nulls Array:", nullsarr);
console.log("Undefined Array:", undefinedarr);
console.log("Numbers Array:", numbersarr);
