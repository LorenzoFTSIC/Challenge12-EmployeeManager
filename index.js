const inquirer= require("inquirer");
const logo = require("asciiart-logo");
const employee_db = require("./db");

function init() {
    asciiBanner();
    mainFunc();
}

function asciiBanner() {
    const makeBanner = logo({name: "Employee Manager" }).render();
    console.log(makeBanner);
}

// handle inquirer & switch statement for functions dpeending on seleciton
function mainFunc() {
    inquirer.prompt([
        {
            type:"list",
            name:"choice",
            message:"What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "show_employees"
                },
                {
                    name: "View All Departments",
                    value: "show_departments"
                },
                {
                    name: "View All Roles",
                    value: "show_roles"
                },
                {
                    name: "exit",
                    value: "exit"
                }
            ]
        }
    ]).then((answer) => {
        console.log(answer)
    })
}

// all functions for inquirer to work



init();