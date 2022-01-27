// function to display manager's card
function renderManagerCard(manager) {
    return `<div class="card p-3">
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

function renderEngineerCard(Engineer) {
    return `<div class="card p-3">
        <div class="card-body bg-primary text-white">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h5 class="card-title"><i class="fas fa-laptop me-2"></i>${engineer.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/"${engineer.getGitHub()} target="_blank">${engineer.getGitHub()}</a></li>
        </ul>
    </div>`
}

function renderInternCard(Intern) {
    return `<div class="card p-3">
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
    return `entireHTML`
}

module.exports = renderHTML;