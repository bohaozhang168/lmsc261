//Week 3 work
//Frog Pond 1
let numFrogs = prompt("How many frogs are about to jump in?");
numFrogs = Number(numFrogs);

const maxFrogCapacity = 15;

let isPondOverCapacity = numFrogs > maxFrogCapacity;
let messageToPrint = isPondOverCapacity ? "It's too crowded!" : "Come on in!";

print(messageToPrint);
