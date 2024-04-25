// Creates a badge depending on which license was selected
// If 'none' was selected, returns an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case "GNU General Public License v3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
  
    default: return '';
      break;
  }
}

// Creates a link to the selected license's URL
// If 'none' was selected, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0": 
      return `[License](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GNU General Public License v3.0":
      return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case "MIT License":
      return `[License: MIT](https://opensource.org/licenses/MIT)`
      break;
    
    default: return '';
      break;
  }  
}

// Creates the License section of the README
// If 'none' was selected, returns an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
  This project is licensed under the ${license}.\n
  ${renderLicenseLink(license)}`
  } else {
    return ''
  }
  
}

// Creates the big string with all the response data in its respective place
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions

  For more information, see my [GitHub](https://github.com/${data.github})

  Send any questions or comments to ${data.email}
`;
}

// Connects this js to the index.js
module.exports = generateMarkdown;
