const fs = require("fs");
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    //Your Project Title
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project? (Required)',
      },
      //Description
      {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project (Required)',
      },
      //Installation Instructions
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?(Required)',
      },
      //Usage Instructions
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.(Required)',
      },
      //License
      {
        type: 'list',
        name: 'License',
        message: 'Select a license for this project. This lets other developers know what they can and cannot do with your project. (Required)',
        choices: ['MIT','ISC', 'Zlib', 'None']
      },
      //contributing guidelines
      {
        type: 'input',
        name: 'Contribution',
        message: 'Provide Guidelines for Contributing to this Project.  (Required)',
      },
      //Test Instructions
      {
        type: 'input',
        name: 'Testing',
        message: 'Provide Testing Instructions for this Project.  (Required)',
      },
      //Questions
      //GitHub
        {
            type: 'input',
            name: 'Github Username',
            message: 'What is your GitHub username?',
        },
      //Email
        {
            type: 'input',
            name: 'Email Address',
            message: 'What is your email address?',
        }
    
];


// function to initialize program
function init() {
  inquirer
  //pass questions through
  .prompt(questions)
  //collect answers
  .then((answers) => {
      //let user know the readme is being generated
    console.log("README generating...");

    const questionoutput = answers

    fs.writeFile('outputReadme.md', JSON.stringify(questionoutput), (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
  
      // success case, the file was saved
      console.log('ReadMe Saved!')
    });

    });
};

init();