// Code your solutions in this file
const names = [ 'Guadalupe', 'Ollie', 'Aki' ];

function writeCards(names) {
    let newArr = [];
    for (let i =0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newArr;
}
writeCards(names);
function countDown(positiveNumber){
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
}
countDown(5);