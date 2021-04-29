// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`


function generateManager(data) {
    return `
            <!-- Manager Card -->
            <div class="col-sm-4 d-flex justify-content-center">   
              <div class="card text-white bg-danger mb-3" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title" id="role">Manager</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item text-dark" id="managerName">${data.managerName}Name</li>
                    <li class="list-group-item text-dark" id="managerId">${data.managerId}ID No.</li>
                    <li class="list-group-item text-dark" id="managerOffice">${data.managerOffice}Office</li>
                  </ul>
                  <div class="card-body ">
                    <a href="mailto:${data.managerEmail}" class="card-link text-white" id="managerEmail">Email Address</a>
                  </div>
              </div>
            </div>
  `;
  }