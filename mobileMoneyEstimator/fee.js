function estimateTransactionFee(moneyToBeSent){
    let transactionFee = 0.15 * moneyToBeSent;
    if (transactionFee < 10 ) {
        transactionFee= 10;//if the transaction fee is less than 10, set it to 10
    }
    else if (transactionFee > 70) {
        transactionFee = 70;//if the transaction fee is more than 70, set it to 70
    } 
    const totalAmountNeeded = moneyToBeSent + transactionFee;
// Displaying the results
    console.log(`Amount you want to send is : ksh.${moneyToBeSent}`); 
    console.log(`\nThe Transaction fee is : ksh.${transactionFee}`);
    console.log(`The total amount needed is : ksh.${moneyToBeSent + transactionFee}`);
    console.log("Send Money Securely!");
}
//calling the function
const moneyToBeSent = (Number(prompt("Enter the amount you want to send: ")));
 estimateTransactionFee(moneyToBeSent)
   
