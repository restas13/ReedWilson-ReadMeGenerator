const { error } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'Project',
    },
    {
        type: 'input',
        message: 'Enter a brief description of the project:',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What code should be used to install this project?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How should this project be run?',
        name: 'Usage',
    },
    {
        type: 'select',
        message: 'What license is used for this project?',
        choices: ['license1', 'license2', 'license3', 'none'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What are some guidelines for contributing?',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'What email should be used to contact you for questions?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your github profile link:',
        name: 'github',
    },
]).then((response) => {
    fs.writeFile('readme.md', 
    `# ${response.Project}
>## Table of Contents
* [Description]()
* [Installation]()
* [Usage]()
* [Contributing]()
* [Tests]()
* [Questions]()
>## Description
${response.Description}
>## Installation
    ${response.Installation}
>## Usage
    ${response.Usage}
>## Contributing
${response.Contribution}
>## Tests

>## Questions`
    , (error) => {
        error ? console.log(error) : console.log('your readme has been written!');
    })
})