// Code your solutions in this file

//for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// } 

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts){
//    for (let i = 0; i < gifts.length; i++){
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    }
//    return gifts;
//}

//wrapGifts(gifts);


function writeCards(name, occasion){
    let thankYouCards = []
    for (let i = 0; i < name.length; i++){
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
    }

    return thankYouCards;
}

writeCards(name, occasion);



function countDown(number){
    while (number >= 0){
        console.log(number--);
    }
}

countDown(number);