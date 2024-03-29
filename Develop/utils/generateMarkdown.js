// Creating a function that returns a license badge based on which license is passed in
// If there is no license, returning an empty string
const generateLicense = (license)  => {
  const lic = [
    {
      name: 'MIT',
      badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`, 
    },
    {
      name: 'APACHE 2.0',
      badge: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    },
    {
      name: 'GPL 3.0',
      badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    },
    {
      name: 'BSD 3',
      badge: `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
    },
    {
      name: 'Mozilla',
      badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    },
    {
      name: 'Eclipse',
      badge: `[![License: EPL 1.0](https://img.shields.io/badge/License-EPL%201.0-yellow.svg)](https://opensource.org/licenses/EPL-1.0)`,
    },
    // adding a default option for no license
    {
      name: 'none',
      badge: '',
    }
  ]
  let licenseBadge = ``;
  lic.forEach(licname => {
    if (licname.name === license) {
      licenseBadge = licname.badge;
    }
  })
  return `${licenseBadge}`;

};

// Creating a function that returns the license link
// If there is no license, returns an empty string
function generateLicenseLink(license) {
  if (license === 'none') {
    return ""
  } else {
    return `* [License](#license)`
  }
};

// Creating a function that returns the license section of README
// If there is no license, returns an empty string
function generateLicenseSection(license) {
  if (license === 'none') {
    return ""
  } else {
    return `## License

${generateLicense(license)}

`;
  }
}

// Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Author](#author)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Username](#username)
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Author
  ${data.author}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Username
  ${data.username}

  ## License
  ${generateLicenseLink(data.license)}
  ${generateLicenseSection(data.license)}
`};

// exporting the generateMarkdown function
module.exports = generateMarkdown;
