// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    // TITLE
    {
        type: 'input',
        name: 'title',
        message: "Enter the title of the project.",
    },
    // DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: "Enter a description of the project.",
    },
    // INSTALLATION
    {
        type: 'input',
        name: 'install',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    // USAGE
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use. Include screenshots as needed.",
    },
    // LICENSE
    {
        type: 'input',
        name: 'license',
        message: "Enter the license used for this project to let other developers know what they can and cannot do with your project. If you need help choosing a license, refer to https://choosealicense.com.",
    },
    // CONTRIBUTING
    {
        type: 'input',
        name: 'contribute',
        message: "Include guidelines for how other developers can contribute to this project.",
    },
    // CREDITS

    {
        type: 'input',
        name: 'credit',
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    },
    // TESTS
    {
        type: 'input',
        name: 'test',
        message: "Provide examples of how to run tests for the project.",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, description, install, usage, license, contribute, credit, test } = questions;
    return `
    # <Your-Project-Title>

    ## Description

    ${data.description}

    ## Table of Contents (Optional)

    If your README is long, add a table of contents to make it easy for users to find what they need.

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation

    ${data.install}

    ## Usage

    ${data.usage}

    To add a screenshot, create an assets / images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    // md
    // ![alt text](assets / images / screenshot.png)
    

    ## Credits

    ${data.credit}

    ## License

    ${data.license}

    ---

    ## Badges

    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

    ## How to Contribute

    ${data.contribute}

    ## Tests

    ${data.tests}
    `;
}

// TODO: Create a function to initialize app
function init() {
    questions.then(data => {
        writeToFile('./README.md', data, err => {
            throw err;
        })
    })
}

// Function call to initialize app
init();
