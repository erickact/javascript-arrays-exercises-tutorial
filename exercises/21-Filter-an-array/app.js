let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here
let resultingNames = allNames.filter(function(name) {
    return name.startsWith('R');
});

console.log(resultingNames);
