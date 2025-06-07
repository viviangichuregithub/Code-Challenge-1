# Code Challenge 1
A collection of  JavaScript challenges designed to strengthen programming logic, input/output handling, and mathematical operations and use of conditions.Each challenge is organized in its own folder and can be run in a browser console.


## Table of Contents

- Chai Calculator
- Boda Fare Estimator
- Mobile Money Fee Estimator
- Project Setup
- Technologies Used
- Author


## Chai Calculator

This challange helps calculate the exact ingredients needed to prepare a given number of cups of
chai (tea). It is designed to prompt the user for input (the amout of cups that they want to make) ,
calculates whats needed and displays the in ingredients required to make a given number of chai cups in
the console.

**Calculation for one cup of Chai:**
- Water : 200 ml per cup  
- Milk : 50 ml per cup  
- Majani Chai : 1 tablespoon per cup  
- Sugar (Sukari) : 2 teaspoons per cup

**features**
- Prompts user to input the number of chai cups.
- Dynamically calculates total ingredients.
- Outputs measurements in a friendly format which is a mixture of English and Kiswahili phases.

**Example Output:**
Prompts : Karibu! How many cups of Tea would you like to make? (3)the user input

- To make 3 cups of Chai, unahitaji:
- 600 ml of water.
- 150 ml of milk.
- 3 tablespoons of majani chai.
- 6 teaspoons of sugar.

- Karibu chai


## Boda Fare Calculator

This challenge helps estimate how much it would cost to travel by Boda Boda (motorbike taxi) based on the distance entered by the user.
The fare includes:
A base fare of Ksh.50.
An additional Ksh.15 per kilometer traveled.

**Features**
- The user is prompted to enter the distance they wish to travel.
- Calculates base fare + per-kilometer fare.
- Outputs fare details in Sheng  for a fun local feel.

**Example Output:**

Prompts :Unafika wapi Mkubwa? Kilometer ngapi?: (2)the user input

- Umeamua kufika uko? Hiyo ni 2 Kilometer!  
- Kukalia boda ni 50 bob!  
- Kutoka hapa hadi huko ni ksh30 ,coz tunalipisha 15 bob per every Kilometer  
- Bill yote inakuja ksh80

- Twende! Boda iko ready!


## Transaction Fee Estimator

This challenge involved creating a program to estimate transaction fees when sending money. The transaction fee is calculated as 15% of the amount the user intends to send. However, certain conditions are applied:
- If the calculated fee is less than Ksh.10, it is set to Ksh.10.
- If the calculated fee is more than Ksh.70, it is capped at Ksh.70.

**features**

The program prompts the user to input the amount they wish to send, then displays the original amount, the transaction fee, and the total amount required to complete the transaction.

**Example Output 1: Where transaction fee is less than ksh.10**

Prompts : Unafika wapi Mkubwa? Kilometer ngapi?: (20)the user input

- Amount you want to send is : ksh.20  
- The Transaction fee is : ksh.10  
- The total amount needed is : ksh.30  

- Send Money Securely!

**Example Output 2:Where transaction fee is more > ksh.10 < sh.70**

Prompts : Unafika wapi Mkubwa? Kilometer ngapi?: (200)the user input
 
- Amount you want to send is : ksh.200  
- The Transaction fee is : ksh.30  
- The total amount needed is : ksh.230  

- Send Money Securely!

**Example Output 3: Where transaction fee is more than ksh.70** 

Prompts : Unafika wapi Mkubwa? Kilometer ngapi?: (1000)the user input

- Amount you want to send is : ksh.1000  
- The Transaction fee is : ksh.70  
- The total amount needed is : ksh.1070  

- Send Money Securely!

## Project Setup

This project is a collection of JavaScript logic challenges that run automatically in your browser.

**How to Run**
Open index.html

- You can open the file directly in your browser, or
- Use Live Server like in VS Code you will click "Go Live".

**Automatic Flow**

Once the page loads, you will be prompted for input , starting with the Chai Calculator, followed by the Boda Fare Estimator, and finally the Mobile Money Fee Estimator.

**View the Output**

- Press F12 or right-click the page click Inspect then go to the Console tab.
- All results are displayed in the browser console.

Make sure the Console is open, or you won't see any output after entering the prompts.


## Technologies Used

- HTML – Used to create the base structure of the webpage (index.html).
- JavaScript – Handles logic, prompts, calculations, and console output for each challenge. 
- Browser Developer Console – Used to view prompts and output. This is where all interaction happens.
- VS Code + Live Server Extension  – Used for development and to run the project locally in the browser.

## Author

Name: Vivian Gichure 
Role: Developer 
Email: viviangichure@gmail.com   
GitHub: [https://github.com/viviangichuregithub/Code-Challenge-1]

This project was created as my first JavaScript logic challenge to practice input/output handling, use of conditions, and mathematical operations in a fun, localized context.






