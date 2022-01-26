const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./src/generateHTML')


function inputValidator(input,description) {
    if(!input) {
        console.log(description)
        return false;
    }
    return true;
}

// create an array of questions for team manager
const managerQues = [
    {
        type : 'input',
        name : 'teamManagerName',
        message : 'What is the name of the team manager?',
        validate : teamManagerName => inputValidator(teamManagerName, 'Please enter the name.')
    },
    {
        type : 'input',
        name : 'employeeID',
        message: 'Please enter the employee ID.',
        validate : employeeID => inputValidator(employeeID, 'Please enter a employee ID.' )
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email address.',
        validate : email => inputValidator(email, 'Please enter a valid email address.')
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'Please enter office number.',
        validate : officeNum => inputValidator(officeNum, 'Please enter the office number.')
    }
]
// Create a function to generate HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if(err) {
            console.log(err);
        }
        console.log('HTML has been generated')
    })
}

// Create a function to initialize the app
    function init() {
    inquirer.prompt(managerQues)
            .then(answer => {
                console.log(answer);
                writeToFile('./dist/index.html',renderHTML() )
            })
    }
    init();

