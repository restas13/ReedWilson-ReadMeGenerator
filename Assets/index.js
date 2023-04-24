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
        type: 'checkbox',
        message: 'What license is used for this project?',
        choices: ['GNU_AGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'MIT_License', 'None'],
        default: 'None',
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
    fs.writeFile('README.md', 
    `# ${response.Project}
[![Generic badge](https://img.shields.io/badge/License-<${response.license}>-blue.svg)](https://shields.io/)
>## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
>## Description
${response.Description}
>## Installation
    ${response.Installation}
>## Usage
    ${response.Usage}
>## Contributing
${response.Contribution}
>## Tests
Testing and adding features should be pushed to a branch separate from the main to avoid creating unwanted error and/or bugs.
>## Questions
Any questions? contact me thorugh [email](${response.email}), or through my [github](${response.github})`
    , (error) => {
        error ? console.log(error) : console.log('your readme has been written!');
    })
})