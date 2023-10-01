let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];

let allarry = ["smit","smit1","smit2","smit3","smit4","smit5","smit6", {
    name: "smit",
    age: 10},
     {
    name: "smit1",
    age: 12},
     {
    name: "smit2",
    age: 14},
     {
    name: "smit3",
    age: 16}, 
    {
    name: "smit4",
    age: 18},
    {
   name: "smit5",
   age: 20},
   {
      name: "smit6",
      age: 22},
      
null, null, null, null,null,null,null,
undefined,undefined,undefined,undefined,undefined,undefined,
1, 2, 3, 4, 5,,6,7,
];

for (let i = 0; i <  allarry.length; i++) {
    let printe1 = allarry[i];
    
    if (typeof printe1 === "string") {
        arr1.push(printe1);
    } else if (typeof printe1 === "object" && printe1 !== null) {
        arr2.push(printe1);
    } else if (printe1 === null) {
        arr3.push(printe1);
    } else if (typeof printe1 === "undefined") {
        arr4.push(printe1);
    } else{
        arr5.push(printe1);
    }
}


console.log("str Arr:", arr1);
console.log("obj Arr:", arr2);
console.log("null Arr:", arr3);
console.log("undefinad Arr:",arr4);
console.log("number Arr:", arr5);
