#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n","Pin is 1010","\n");

// I use "\n" in my every console log to add a line break

let myAccountBalance = 9999;
let myPin: number = 1010;

let pinAnswer = await inquirer.prompt([
  {
    name: "pinCode",
    message: "Enter Your Pin Code",
    type: "number",
  },
]);
if (pinAnswer.pinCode === myPin) {
  console.log("\n","Correct Pin Code!!!\n");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select One Option From The Following",
      type: "list",
      choices: ["withdraw", "checkBalance", "changeYourPin"],
    },
  ]);
  if (operationAnswer.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "Amount",
        message: "Please Enter Amount How Much You Want To Withdraw",
        type: "number",
      },
    ]);

    if (amountAnswer.Amount <= myAccountBalance) {
      console.log("\n", amountAnswer.Amount - myAccountBalance, "$","\n");
    } else {
      console.log( "\n",
        " You Dont Have Sufficient Balance For This Transaction! Please Try Again!!","\n"
      );
    }
  } else if (operationAnswer.operation === "checkBalance") {
    console.log("Your Balance is", +myAccountBalance, "$","\n");
  }
  if (operationAnswer.operation === "changeYourPin") {
    let newPincode = await inquirer.prompt([
      {
        name: "newPin",
        message: "Enter New Pin Code",
        type: "number",
      },
    ]);
    myPin = newPincode.newPin;
    console.log("\n","Your New Pin Code is", +myPin, "\n");
  }
} else console.log("\n","Incorrect Pin Code!!","\n");

console.log("\n Credit: Ahmer Shaikh");
