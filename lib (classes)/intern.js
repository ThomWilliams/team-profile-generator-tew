// // The other three classes will extend `Employee`.

// n addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

function generateIntern(data) {
    return `
    <!-- Intern Card -->

    <div class="col-sm-4 d-flex justify-content-center">  
    <div class="card text-white bg-success mb-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" id="role">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item text-dark" id="internName">Name</li>
          <li class="list-group-item text-dark" id="internId">ID No.</li>
          <li class="list-group-item text-dark" id="internSchool">School Name</li>
        </ul>
        <div class="card-body ">
            <a href="#" class="card-link text-white" id="internEmail">Email Address</a>
        </div>
    </div>
    </div>
  `;
  }



