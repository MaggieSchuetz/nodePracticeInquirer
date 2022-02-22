const writeFile = require('./writeFile.js');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'creatingFunctionFile',
      message: 'What is the name of your function?',
    },
  ])
  .then((answers) => {
    writeFile(answers.creatingFunctionFile);
    console.info(
      `Thank your for your answer. The file ${answers.creatingFunctionFile} has been created!`,
      answers.creatingFunctionFile
    );
  });
