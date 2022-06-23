const fs = require("fs");

let fNameData = fs.readFileSync("fname.json", {encoding: "utf8"});
let lNameData = fs.readFileSync("lname.json", {encoding: "utf8"});
fNameData = JSON.parse(fNameData);
lNameData = JSON.parse(lNameData);
fNameData = fNameData.names;
lNameData = lNameData.names;

class person {
    constructor(fname, lname, age, email) {
        this.name = fname,
        this.lname = lname,
        this.age = age,
        this.email = email,
        this.disclaimer = "THIS PERSON IS RANDOMLY GENERATED!"
    }
}

function getPerson(provider) {
    if (!provider) return "No provider given....";
    let fname = fNameData[Math.round(Math.random() * fNameData.length)];
    let lname = lNameData[Math.round(Math.random() * lNameData.length)];
    let age = Math.round(Math.random() * 90);
    let email = fname + "." + lname + "@" + provider + ".com";
    return new person(fname, lname, age, email);
}

getPerson();


exports.getPerson = getPerson;