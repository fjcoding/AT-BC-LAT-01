const employee = {
    setName: (name) => {
        this.name = name;
    },
    setDepartment: (department) => {
        this.department = department;
    },
    getName: () => {
        return this.name;
    },
    getDepartment: () => {
        return this.department;
    }
};

const employee1 = Object.create(employee);
employee1.setName('Federico');
console.log(employee1.getName());

employee1.setDepartment('Tech');
console.log(employee1.getDepartment());