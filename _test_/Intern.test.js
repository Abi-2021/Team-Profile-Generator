const Intern = require("../lib/Intern");
test('Create intern object', function () {
    const intern = new Intern('02', 'intern name', 'intern@gmail.com');

    expect(intern.getId()).toBe('02');
    expect(intern.getName()).toBe('intern name');
    expect(intern.getEmail()).toBe('intern@gmail.com');
    expect(intern.getRole()).toBe('Intern');
})