"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");

let chalkGreen = chalk.bold.green;
let resume = require("./resume.json");

let resumePrompts = {
    type: "list",
    name: "resumeOptions",
    message: "What do you want to know about me?",
    choices: [...Object.keys(resume), "Exit"]
};

module.exports = () => {
    console.log("Hello, My name is Will and welcome to my resume");
    
    inquirer.prompt(resumePrompts).then(answer => {
        switch (answer.resumeOptions) {
            case 'Exit':
                return;
                break;
            case 'Education':
                require('./answer/education')(answer.resumeOptions);
                break;
        }

        // // DISPLAY INFO ================================
        // let option = answer.resumeOptions;
        // console.log(chalkGreen("--------------------------------------"));
        // resume[`${option}`].forEach(info => {
        //     console.log(chalkGreen("|    => " + info));
        // });
        // console.log(chalkGreen("--------------------------------------"));

        // GO BACK OR EXIT ================================
        // inquirer.prompt({
        //     type: "list",
        //     name: "exitBack",
        //     message: "Go back or Exit?",
        //     choices: ["Back", "Exit"]
        // }).then(choice => {
        //     if (choice.exitBack == "Back") {
        //         resumeHandler();
        //     } else {
        //         return;
        //     }
        // });
        


    });
}
