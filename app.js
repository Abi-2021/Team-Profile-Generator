const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./src/generateHTML')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/intern')
const optionChoices = ['Add an Engineer', 'Add an Intern', 'Finish building my team']


function inputValidator(input, description) {
    if (!input) {
        console.log(description)
        return false;
    }
    return true;
}

// create an array of questions for team manager
const managerPromptQuestions = [
    {
        type: 'input',
        name: 'mName',
        message: 'Manager\'s name:',
        validate: (name) => inputValidator(name)
    },
    {
        type: 'input',
        name: 'mEmpId',
        message: 'Manager\'s employee id:',
        validate: (id) => inputValidator(id)
    },
    {
        type: 'input',
        name: 'mEmail',
        message: 'Manager\'s email:',
        validate: (email) => inputValidator(email)
    },
    {
        type: 'input',
        name: 'mOfficeNumber',
        message: 'Manager\'s office number:',
        validate: (phone) => inputValidator(phone)
    },
]


const promptOptionQuestion = [
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: optionChoices
    },
]

const engineerPromptQuestions = [
    {
        type: 'input',
        name: 'eName',
        message: 'Engineer\'s name:',
        validate: (name) => inputValidator(name)
    },
    {
        type: 'input',
        name: 'eEmpId',
        message: 'Engineer\'s employee id:',
        validate: (id) => inputValidator(id)
    },
    {
        type: 'input',
        name: 'eEmail',
        message: 'Engineer\'s email:',
        validate: (email) => inputValidator(email)
    },
    {
        type: 'input',
        name: 'eGithub',
        message: 'Engineer\'s GitHub username:',
        validate: (gitHub) => inputValidator(gitHub)
    },
]

const internPromptQuestions = [
    {
        type: 'input',
        name: 'iName',
        message: 'Intern\'s name:',
        validate: (name) => inputValidator(name)
    },
    {
        type: 'input',
        name: 'iEmpId',
        message: 'Intern\'s employee id:',
        validate: (id) => inputValidator(id)
    },
    {
        type: 'input',
        name: 'iEmail',
        message: 'Intern\'s email:',
        validate: (email) => inputValidator(email)
    },
    {
        type: 'input',
        name: 'iSchool',
        message: 'Intern\'s school name:',
        validate: (school) => inputValidator(school)
    },
]

// Prompts
const promptManager = () => {
    return inquirer.prompt(managerPromptQuestions).then(managerDetails => {
        const {mEmpId, mName, mEmail, mOfficeNumber} = managerDetails;
        return new Manager(mEmpId, mName, mEmail, mOfficeNumber);
    });
};

const promptOption = (team) => {
    return inquirer.prompt(promptOptionQuestion).then(option => {
        const {choice} = option;
        if (choice === 'Add an Engineer')
            return promptEngineer(team);
        else if (choice === 'Add an Intern')
            return promptInterns(team);
        else if (choice === 'Finish building my team')
            return team;
        else throw new Error('Something went wrong!')
    });
}

const promptEngineer = (team) => {
    if (!team.engineers) {
        team.engineers = [];
    }
    return inquirer.prompt(engineerPromptQuestions).then(currentEngineer => {
        const {eEmpId, eName, eEmail, eGithub} = currentEngineer;
        const engineer = new Engineer(eEmpId, eName, eEmail, eGithub);
        team.engineers.push(engineer);
        return promptOption(team)
    });
}

const promptInterns = (team) => {
    if (!team.interns) {
        team.interns = [];
    }
    return inquirer.prompt(internPromptQuestions).then(currentIntern => {
        const {iEmpId, iName, iEmail, iSchool} = currentIntern;
        const intern = new Intern(iEmpId, iName, iEmail, iSchool);
        team.interns.push(intern);
        return promptOption(team);
    });
}

promptManager().then(promptOption).then(answer => {
    fs.writeFile('dist/index.html', renderHTML(answer), (err => {
        if (err) console.log('Error occurred during the writing process');
        console.log('writing process successfully completed!');
    }));
});






