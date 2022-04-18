// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return template = `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

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

module.exports = generateMarkdown;
