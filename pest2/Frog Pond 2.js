//Frog Pond 2
const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];
let index = prompt("Enter a number for activity (0-3):");

index = Number(index) 

// ensure index is within bounds
let actualIndex = index % 4; 
let chosenActivity = activities[actualIndex];

print(chosenActivity);