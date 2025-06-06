function calculateChaiIngredients(numberOfChaiCups) {
    const water = 200 * numberOfChaiCups; 
    const milk = 50 * numberOfChaiCups; 
    const majani = 1 * numberOfChaiCups;
    const sukari = 2 * numberOfChaiCups; 

//this is what will display on the console after the user enters the number o cups needed to be made  
console.log(`To make ${numberOfChaiCups} cups of  Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${majani} tablespoons`);
    console.log(`Sugar (Sukari): ${sukari} teaspoons`);
    console.log(`\nEnjoy your Chai Bora!`);// /n is used to add a new line before the next message
    }
//prompts the user to enter the number of cups they want to make
const chaiCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
calculateChaiIngredients(chaiCups);

