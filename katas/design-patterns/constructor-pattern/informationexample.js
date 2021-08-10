function information(name, age, gender, career) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this. career = career;
    this.describe = function() {
        console.log(this.name + ' is a ' + this.gender + ' and is ' + this.age + ' years old and studied ' + this.career);
    };
}

let student1 = new information('Mateo', '28', 'male', 'civil engineering');

student1.describe();

let student2 = new information('Sara', '15', 'female', 'still in college');

student2.describe();