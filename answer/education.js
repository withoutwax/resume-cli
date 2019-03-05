const inquirer = require("inquirer");
const chalk = require("chalk");
let resume = require("../resume.json");

let chalkGreen = chalk.bold.green;

module.exports = async (option) => {

    let education = resume[option];

    console.log(chalkGreen("--------------------------------------"));

    for (let key in education) {
        console.log(chalkGreen("|    ∙ " + key));
    }

    // console.log(resume[`${option}`]);
    // resume[`${option}`].forEach(school => {
    //     console.log(chalkGreen("|    ∙ " + school));
    // });
    console.log(chalkGreen("--------------------------------------"));

    inquirer.prompt({
        type: "list",
        name: "educationDetail",
        message: "Choose to see details",
        choices: [...Object.keys(education), "Back", "Exit"]
    }).then(choice => {
        switch (choice) {
            case 'Back':
                require('../')();
                break;
            case 'Exit':
                return;
                break;
        }
        education[`${choice.educationDetail}`].forEach(details => {
            console.log(chalkGreen("|    ∙ " + details));
        });
    });
}   