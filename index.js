#!/usr/bin/env node

"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");

let response = chalk.bold.green;
let resume = require("./resume.json");

let resumePrompts = {
    type: "list",
    name: "resumeOptions",
    message: "What do you want to know about me?",
    choices: [...Object.keys(resume), "Exit"]
};

function main() {
    console.log("Hello, My name is Will and welcome to my resume");
    resumeHandler();
}

function resumeHandler() {
    inquirer.prompt(resumePrompts).then(answer => {
        if (answer.resumeOptions == "Exit") {
            return;
        }

        let option = answer.resumeOptions;
        console.log(response("--------------------------------------"));

        resume[`${option}`].forEach(info => {
            console.log(response("|    => " + info));
        });
        console.log(response("--------------------------------------"));

        inquirer.prompt({
            type: "list",
            name: "exitBack",
            message: "Go back or Exit?",
            choices: ["Back", "Exit"]
        }).then(choice => {
            if (choice.exitBack == "Back") {
                resumeHandler();
            } else {
                return;
            }
        });
    });
}

main();