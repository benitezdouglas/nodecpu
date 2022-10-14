const axios = require('axios');
var moment = require('moment');

// Make a request for a user with a given ID
axios.get('https://api.github.com/repos/benitezdouglas/nodecpu/commits')
  .then(function (response) {
    // handle success
    const firstCommit = response.data.length - 1;
    const lastCommit = 0;

    var firstCommitDate = moment(response.data[firstCommit].commit.committer.date); // another date
    var lastCommitDate = moment(response.data[lastCommit].commit.committer.date); //todays date
    var duration = moment.duration(lastCommitDate.diff(firstCommitDate));

    console.log(response.data[firstCommit].commit.message, firstCommitDate);
    console.log(response.data[lastCommit].commit.message, lastCommitDate);

    console.log(duration.asMinutes());   
    console.log(duration.asSeconds());   
    console.log(duration.asMilliseconds());   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });