


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  //apache(https://www.apache.org/licenses/LICENSE-2.0.txt)

  //MIT (https://www.mit.edu/~amini/LICENSE.md)

  //mozilla(https://www.mozilla.org/en-US/MPL/2.0/)

  //boost(https://www.boost.org/users/license.html)

  //GNU LGPL v3 (https://www.gnu.org/licenses/lgpl-3.0.html)

  //GNU APGL v3(https://www.gnu.org/licenses/agpl-3.0.html)

  //GNU GPL v3(https://www.gnu.org/licenses/gpl-3.0.html)


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}








// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponse,  userData) {
  
//conditionally create table of contents depending on user input. 
let tableofContent = `## Table of Contents`; 

if(userResponse.installation !== '') {
  tableofContent += `* [Installation](#installtion)`
}; 

if(userResponse.usage !== '') {
  tableofContent += `* [Usage](#usage)`
}; 

if(userResponse.contributing !== '') {
  tableofContent += `* [Contributing](#contributing)`
}; 

if(userResponse.tests !== '') {
  tableofContent += `* [Tests](#tests)`
}; 

//generate markdown for the required portion of README.md file
let readmeMarkdown = 
`# ${userResponse.title}

## License
![Badges for GitHub licenses]()


## Description 

${userResponse.description}

`
//generate table of contents if passed condition
readmeMarkdown += tableofContent; 


//input content conditonally in each section
if(userResponse.installation !== '') {

  readmeMarkdown += `

  ## Installation

  ${userResponse.installation}`

}; 

if(userResponse.usage !== '') {

  readmeMarkdown += 
  `
  ## Usage

  ${userResponse.usage}`
}; 

if(userResponse.contributing !== '') {
  readmeMarkdown +=
  `
  ## Contributing

  ${userResponse.contributing}`
}; 

if(userResponse.tests !== '') {
  readmeMarkdown +=`

  ## Tests

  ${userResponse.tests}`
}; 

readmeMarkdown += `

## License

${userResponse.license}`; 


//createing developer section
let developer = `
---
## Questions

<img src="${userData.avatar_url}" alt="${userData.login}" width="35%"/>

For any questions, please contact me with the information provided below: 

Github: [@${userData.login}](${userData.url})`; 

if(userData.email !== null) {
  developer += `
  Email: ${userData.email}
  `
}; 

readmeMarkdown += developer; 

return readmeMarkdown; 
}; 

module.exports = generateMarkdown; 
