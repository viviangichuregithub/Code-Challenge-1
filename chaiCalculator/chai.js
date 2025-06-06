function calculateChaiIngredients(numberOfChaiCups) {
    const water = 200 * numberOfChaiCups; 
    const milk = 50 * numberOfChaiCups; 
    const majani = 1 * numberOfChaiCups;
    const sukari = 2 * numberOfChaiCups; 

//this is what will display on the console after the user enters the number o cups needed to be made  
console.log(`To make ${numberOfChaiCups} cups of Chai, unahitaji:`);
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${majani} tablespoons of majani chai`);
    console.log(`${sukari} teaspoons of sugar`);
    console.log(`\nKaribu chai`);// /n is used to add a new line before the next message
    }
//prompts the user to enter the number of cups they want to make
const chaiCups = Number(prompt("Karibu! How many cups of Tea would you like to make?"));
calculateChaiIngredients(chaiCups);

