// practice 1
const car = {
    color: "red",
    year: "2015",
    brand: "Ford Mustang"
}
// practice 2
const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

// practice 3
const steve = {
    age: "11",
    height: "5ft"
}

const stan = {
    age: "15",
    height: "5.2ft"
}

const sarah = {
    age: "21",
    height: "5.6ft"
}

const seven = {
    age: "1",
    height: "2ft"
}


const familyMembers = ["steve", "stan", "sarah", "seven"]


// practice 4

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents);
console.log(wardrobe.depth);
console.log(wardrobe.width);


// practice 5


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// loging dimensions 

console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);

//loging dimensions bracket
console.log(empireStateBuilding["address"]);
console.log(empireStateBuilding["constructionDate"]);
console.log(empireStateBuilding["cost"]);
console.log(empireStateBuilding["owner"]);
console.log(empireStateBuilding["architect"]);

// practice 6
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
var fullTimeEmps = nashvilleSoftwareSchool.instructors.fullTime;
var partTimeEmps = nashvilleSoftwareSchool.instructors.partTime;

// console.log(fullTimeEmps);
// logging all the instructors names who work full time
for(var i = 0; i < partTimeEmps.length; i++) {
    console.log(partTimeEmps[i]);
}

 for(var i = 0; i < fullTimeEmps.length; i++) {
     console.log(fullTimeEmps[i]);
 }





