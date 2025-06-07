function calculateBodaFare(bodaBodaFare){
    const baseFare = 50;
    const farePerKilometer = 15;
    const totalFare = baseFare + (farePerKilometer * bodaBodaFare);
//this is what will display on the console after the user enters the distance to be traveled
 console.log(`Umeamua kufika uko? Hiyo ni ${bodaBodaFare} Kilometer!`);
 console.log(`\nKukalia boda ni ${baseFare} bob!`);
 console.log(`Kutoka hapa hadi huko ni ksh${farePerKilometer * bodaBodaFare} ,coz tunalipisha ${farePerKilometer} bob per every Kilometer`);
 console.log(`Bill yote inakuja ksh${totalFare}`);
 console.log("Twende! Boda iko ready!");

}
//prompts the user to enter the distance they want to travel
const distance = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distance);