const Employee = require('../lib/Employee')

test('Create employee object', function () {
    const employee = new Employee('01', 'employee name', 'employee@gmail.com');

    expect(employee.getId()).toBe('01');
    expect(employee.getName()).toBe('employee name');
    expect(employee.getEmail()).toBe('employee@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})