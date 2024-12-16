class Person {
    constructor(firstName, lastName, gender, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._gender = gender;
      this._age = age;
    }
  
    get firstName() {
      return this._firstName;
    }
    get lastName() {
      return this._lastName;
    }
    get gender() {
      return this._gender;
    }
    get age() {
      return this._age;
    }
  
    set firstName(value) {
      this._firstName = value;
    }
    set lastName(value) {
      this._lastName = value;
    }
    set gender(value) {
      this._gender = value;
    }
    set age(value) {
      this._age = value;
    }
  
    toString() {
      return `Name: ${this._firstName} ${this._lastName}, Gender: ${this._gender}, Age: ${this._age}`;
    }
  }
  
  const person = new Person("Joe", "Jackson", "male", 25);
  console.log(person.toString());
  
 
  class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
      super(firstName, lastName, gender, age); 
      this._program = program; 
      this._year = year;
      this._fee = fee;
      this._examResults = {};
    }
  
    get program() {
      return this._program;
    }
    get year() {
      return this._year;
    }
    get fee() {
      return this._fee;
    }
  
    set program(value) {
      this._program = value;
    }
    set year(value) {
      this._year = value;
    }
    set fee(value) {
      this._fee = value;
    }
  
    passExam(program, grade) {
      this._examResults[program] = grade;
  
      const allPassed = this._program.every((prog) => this._examResults[prog] >= 50);
      if (allPassed) {
        this._year += 1;
      }
    }
  
    toString() {
      return `${super.toString()}, Program: ${this._program.join( ", " )},
       Year: ${this._year}, Fee: ${this._fee}, Exam Results: ${JSON.stringify( this._examResults )}`;
    }
  }
  
  const student = new Student("Joe", "Jackson", "male", 25, ["chemistry", "biology"], 1, 200);
  student.passExam("chemistry", 60);
  student.passExam("biology", 70);
  console.log("After passing exams:", student.toString());
  

  class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
      super(firstName, lastName, gender, age); 
      this._program = program;
      this._pay = pay;
    }
  
    get program() {
      return this._program;
    }
    get pay() {
      return this._pay;
    }
  
    set program(value) {
      this._program = value;
    }
    set pay(value) {
      this._pay = value;
    }
  
    toString() {
      return `${super.toString()}, Program: ${this._program}, Pay: ${this._pay}`;
    }
  }
  
  const teacher = new Teacher("Ann", "Smith", "female", 28, "biology", 300);
  console.log(teacher.toString());




// Name: Joe Jackson, Gender: male, Age: 25
// After passing exams: Name: Joe Jackson, Gender: male, Age: 25, Program: chemistry, biology, Year: 2, Fee: 200, Exam Results: {"chemistry":60,"biology":70}
// Name: Joe Jackson, Gender: male, Age: 25, Program: chemistry, biology, Year: 2, Fee: 200, Exam Results: {"chemistry":60,"biology":70}
// Name: Ann Smith, Gender: female, Age: 28, Program: biology, Pay: 300