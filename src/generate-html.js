
const generateTeam = team => {
    console.log("Called", team)
    const htmlForEmployees = []; 

    const generateManagerHTML = manager => {
        return ` <!-- Manager Card -->
        <div class="col-sm-4 d-flex justify-content-center">   
          <div class="card text-white bg-danger mb-3" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title" id="role">Manager</h5>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item text-dark" id="managerName">${manager.getName()}</li>
                <li class="list-group-item text-dark" id="managerId">${manager.getId()}</li>
                <li class="list-group-item text-dark" id="managerOffice">${manager.getOfficeNumber()}</li>
              </ul>
              <div class="card-body ">
                <a href="#" class="card-link text-white" id="managerEmail">${manager.getEmail()}</a>
              </div>
          </div>
        </div>`
    }


    htmlForEmployees.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManagerHTML(manager)) )

    return htmlForEmployees.join("")
}

module.exports = team => {
  return ` 
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="jumbotron bg-primary">
        <h1 class="text-center text-white" style="font-family: 'Black Ops One', cursive;">My Team</h1>
    </header>

    <main class="container-fluid">

      <div class="d-flex flex-wrap align-content-around">
       ${generateTeam(team)};
        <!-- Engineer Card -->
        <div class="col-sm-4 d-flex justify-content-center">  
          <div class="card text-white bg-primary mb-3" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title" id="role">Engineer</h5>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item text-dark" id="engineerName">Name</li>
                <li class="list-group-item text-dark" id="engineerId">ID No.</li>
                <li class="list-group-item">
                  <a href="#" class="card-link" id="engineerGithub">GitHub Link</a>
                </li>
              </ul>
              <div class="card-body ">
                  <a href="#" class="card-link text-white" id="engineerEmail">Email Address</a>
              </div>
          </div>
        </div>  
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
      </div>
    </main>


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>`
}


