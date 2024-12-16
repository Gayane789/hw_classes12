class Employee{
    constructor(id, firstName, lastName, position, salary, workingHours){
        this._id =this.#generateID();
        this._firstName = firstName;
        this._lastName = lastName;
        this._position = position;
        this._salary = salary;
       this._workingHours = workingHours;
     }
     #generateID() {
        return Math.random().toString(36).slice(2);
      }

  get id(){
        return this._id;
     }
  get  firstName(){
    return this._firstName;
  }
  get lastName(){
return this._lastName;
}
get position(){
    return this._position;
}
get salary(){
    return this._salary;
}get workingHours(){
    return this._workingHours;
}

set id(value){
    return this._id = value;
 }
 set  firstName(value){
return this._firstName  = value;
}
set lastName(value){
return this._lastName  = value;
}
set position(value){
return this._position  = value;
}
set salary(value){
return this._salary  = value;
}
set workingHours(value){
return this._workingHours  = value;
}

getFullName(){
    return  `${this._firstName} ${this._lastName}`;
} 
getAnnualSalary(){
      this._totalSalary = this._salary * this. _workingHours * 12;
      return this._totalSalary ;
    }

raiseSalary(percent){
    this._totalSalary += (this._totalSalary * (percent / 100));
    return this._totalSalary;
}


toString() {
    return `Employee: ${this.getFullName()}, Employee Id:${employee.id}, Position: ${this._position}, Annual Salary: ${this.getAnnualSalary()},   Raise Salary: ${this.raiseSalary(15)}`;
  }
}
const employee = new Employee(1, "Ann", "Jackson", "chef", 20, 84);

console.log(employee);
console.log(employee.id);
console.log(employee.getFullName()); 
console.log(employee.getAnnualSalary());
console.log(employee.raiseSalary(15));
console.log(employee.toString());



