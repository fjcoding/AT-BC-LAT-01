const employee = {
    name: '',
    department: '',
    income: 0
};

const employeeTech = Object.create(employee);
console.log(employeeTech.name);
employeeTech.name = 'Fernando';
console.log(employeeTech.name);

employeeTech.department = 'Tech';
console.log(employeeTech.department);

const employeeTester = Object.create(employee);
employeeTester.name = 'Federico';

console.log(employeeTech.name);
console.log(employeeTester.name);