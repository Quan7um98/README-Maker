// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
    case 'Apache':
      return `![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)`;
    case 'GPL':
      return `![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)`;
    case 'BSD':
      return `![License: BSD](https://img.shields.io/badge/License-BSD-blue.svg)`;
    case 'None':
      return `![License: None](https://img.shields.io/badge/License-None-lightgrey.svg)`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `[MIT License](http://opensourse.org/licenses/MIT)`
    case 'Apache':
      return `[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)`
    case 'GPL':
      return `[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)`
    case 'BSD':
      return `[BSD 2 Clause "Simplified" License and Patent License](https://spdx.org/licenses/BSD-2-Clause.html)`
    case 'None':
      return '';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    
    This project is licensed under the ${license} license. For more information, see the link below:
    ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
