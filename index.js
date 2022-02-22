const writeFile = require('./writeFile.js');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'functionName',
      message: 'What is the name of your function?',
    },

    {
      type: 'checkbox',
      name: 'fileTypes',
      message: 'Which kind of file should be created?',
      choices: ['component', 'spec', 'stories'],
      validate: (answer) => {
        if (answer.length < 1) {
          return 'Please select at least one!';
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    console.log(answers);
    answers.fileTypes.forEach((type) => {
      writeFile(answers.functionName, type);
    });
  });
