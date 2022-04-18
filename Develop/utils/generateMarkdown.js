// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "ISC":
      return "https://img.shields.io/badge/License-ISC-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "Mozilla 2.0":
      return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
    case "GNU GPLv3":
      return "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
    case "Unlicense":
      return "https://img.shields.io/badge/license-Unlicense-blue.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Mozilla 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "Unlicense":
      return "http://unlicense.org/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "Unlicense" || license === "Unlicensed" || license === "unlicensed" || license === "unlicense") {
    return "This project is unlicensed";
  }
  return `This project is using under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return template = `
  # ${data.title}

  [![License: ${licenseProject}](${license.renderLicenseBadge(
    licenseProject
  )})](${license.renderLicenseLink(licenseProject)})

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

  ${license.renderLicenseText(licenseProject)}

  ---

  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

  ## How to Contribute

  ${data.contribute}

  ## Tests

  ${data.tests}
  
  ## Questions
  
  [GitHub profile](http://github.com/${GithubUser})
  [Contact Me - Email](mailto:${emailUser})
  `;
}

module.exports = generateMarkdown;
