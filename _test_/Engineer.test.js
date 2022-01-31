const Engineer = require('../lib/Engineer');

test('Create engineer object', function () {
    const engineer = new Engineer('02', 'engineer name', 'engineer@gmail.com');

    expect(engineer.getId()).toBe('02');
    expect(engineer.getName()).toBe('engineer name');
    expect(engineer.getEmail()).toBe('engineer@gmail.com');
    expect(engineer.getRole()).toBe('Engineer');
})