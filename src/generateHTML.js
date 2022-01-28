const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const  Engineer = require('../lib/Engineer');

// function to display manager's card
function renderManagerCard(manager) {
    return `<div class="card p-3 h-100">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${manager.getName()}</h5>
            <h5 class="card-title"><i class="fas fa-coffee me-2"></i>${manager.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>`
}

function renderEngineerCard(engineer) {
    return `<div class="card p-3 h-100">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h5 class="card-title"><i class="fas fa-laptop me-2"></i>${engineer.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/"${engineer.getGithub()} target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>`
}

function renderInternCard(intern) {
    return `<div class="card p-3 h-100">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${intern.getName()}</h5>
            <h5 class="card-title"><i class="fas fa-users me-2"></i>${intern.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>`
}


function renderHTML(teamData) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">
    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
            integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ"
            crossorigin="anonymous"></script>
</head>
<body>
<header class="bg-danger p-5 text-center">
    <h1 class="text-white">Team Profile Generator</h1>
</header>
<section class="container-fluid bg-light d-flex justify-content-center gap-5 flex-wrap my-5">
    ${renderManagerCard(new Manager('01', 'Manager', 'email', '898989'))}
    ${renderInternCard(new Intern('43','Intern', 'email', 'school'))}
    ${renderEngineerCard(new Engineer('05','Engineer', 'email', '6576'))}
</section>
</body>
</html>`
}

module.exports = renderHTML;