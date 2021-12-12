function generateMarkdown(userResponse) {
  return`
  # ${userResponse.title} 

  ![Badge](https://img.shields.io/badge/license-${userResponse.license}-green)

  ## Description
  ${userResponse.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation 

  ${userResponse.installation}

  ## Usage 

  ${userResponse.usage}

  ## License

  This application is covered under the ${userResponse.license} License. 

  ## Contributing 

  ${userResponse.contributing}

  ## Tests 

  ${userResponse.tests}

  ---

  ## Questions 

  For any questions, please contact me with the information provided below:

  - Email: ${userResponse.email}
  - GitHub: [${userResponse.username}](https://github.com/${userResponse.username})
  `; 
}

module.exports = generateMarkdown; 