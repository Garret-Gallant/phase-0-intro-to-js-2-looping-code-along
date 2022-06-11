// Code your solutions in this file
const array = [
    "Guadalupe",
    "Ollie", 
    "Aki"
]


function writeCards(array){
    console.log(array);
    const newArray = [];

     for (let i = 0; i < array.length; i++) {
        console.log(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
        newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}
writeCards(array);


//Working Function, DON'T TOUCH!
function countDown(num){
    for (let counter = num; num >= 0; num--) {
        console.log(num);
    }
}

