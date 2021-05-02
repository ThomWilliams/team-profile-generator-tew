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
// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`







// function generateEngineer(data) {
//     return `
            
// //  <!-- Engineer Card -->
// <div class="col-sm-4 d-flex justify-content-center">  
// <div class="card text-white bg-primary mb-3" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title" id="role">Engineer</h5>
//     </div>
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item text-dark" id="engineerName">${data.engineerName}Name</li>
//       <li class="list-group-item text-dark" id="engineerId">${data.engineerId}ID No.</li>
//       <li class="list-group-item">
//         <a href="#" class="card-link" id="engineerGithub">${data.engineerGithub}GitHub Link</a>
//       </li>
//     </ul>
//     <div class="card-body ">
//         <a href="href="mailto:${data.engineerEmail}" class="card-link text-white" id="engineerEmail">Email Address</a>
//     </div>
// </div>
// </div>  

//   `;
//   }



module.exports = Engineer;