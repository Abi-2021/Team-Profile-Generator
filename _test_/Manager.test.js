const Manager = require("../lib/Manager");
test('Create manager object', function () {
    const manager = new Manager('02', 'manager name', 'manager@gmail.com');

    expect(manager.getId()).toBe('02');
    expect(manager.getName()).toBe('manager name');
    expect(manager.getEmail()).toBe('manager@gmail.com');
    expect(manager.getRole()).toBe('Manager');
})