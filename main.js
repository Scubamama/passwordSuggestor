//const faker = require('faker');
const faker = require("C:\Program Files\faker\lib");

document.getElementById('wordsForm').addEventListener('submit', getWords);

function getWords() {
    //  e.preventDefault();

  console.log("in getWords");
  
  let nounLocation = document.getElementById('noun');
  let noun = faker.noun();
  

//  console.log("from localStorage: issues: ", issues);

    let desc = issues[i].description;

    nounLocation.innerHTML += '<div class="card">'+
                            '<p>Issue ID: ' + id + '</p>' +
                            '<p><span class="badge badge-info">' + noun + '</span></p>' +
                            '<h5>' + desc + '</h5>' +
                            '<p><span class="far fa-clock"></span> ' + severity + '</p>' +
                            '<p><span class="fas fa-user-ninja"></span> ' + assignedTo + '</p>' +
                            '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' +
                            '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>' +
                            '</div>';
      
//  console.log('issuesList: ', issuesList);
}
