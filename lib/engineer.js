// The other three classes will extend `Employee`.
const Employee = require('./employee');

// The first class is an `Employee` parent class with the following properties and methods:

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github
  }

  getGithub(){
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
