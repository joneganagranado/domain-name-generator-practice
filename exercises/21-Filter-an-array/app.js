let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter(function(val){
    return(val.toLowerCase().startsWith('r'));
})
console.log(resultingNames);