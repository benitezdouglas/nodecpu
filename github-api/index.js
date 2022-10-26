const axios = require('axios');

// Make a request for a user with a given ID
// axios.get('https://api.github.com/repos/benitezdouglas/mechanic-60-hotkeys/commits')
axios.get('https://api.github.com/repos/benitezdouglas/nodecpu/commits')
  .then(function (response) {
    // handle success
    const firstCommit = response.data.length - 1;
    const lastCommit = 0;

    var firstCommitDate = new Date(response.data[firstCommit].commit.committer.date); // another date
    var lastCommitDate = new Date(response.data[lastCommit].commit.committer.date); //todays date
    var duration = lastCommitDate - firstCommitDate; // miliseconds between dates

    console.log(response.data.length);

    // console.log(duration);

    // console.log(response.data[firstCommit].commit.message, firstCommitDate);
    // console.log(response.data[lastCommit].commit.message, lastCommitDate);

    // console.log(Math.floor((duration / 1000) % 60)); // minutes
    // console.log(Math.floor(duration / 1000)); // seconds
    // console.log(duration); // ms   

    // console.log(response.data);

    //test new commit
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
