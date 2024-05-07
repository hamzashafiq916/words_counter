#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\t\twelcome to words counter");
console.log("=".repeat(60));
let answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter a sentence:  ",
    }]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(words);
console.log("=".repeat(60));
console.log(`words count: ${words.length}`);
