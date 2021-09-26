
function renderLicenseBadge(license) {
  if(license !== "none") {
    return (
    `## License

    This project is licensed under the ${license} license.`
    )
  }
  return " "
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  - [Description](#Description)

  - [Installation](#Installation)

  - [Usage](#Usage)

  - [Questions](#Questions)

  ## Description

  * ${data.description}
  
  ## Installation

  These are the dependencies necessary to install:

  * ${data.installation}

  ## Usage

  \`\`\`md
  ${data.usage}
  \`\`\`

  ---

  ### Questions
  
  If you were wanting to see more of my work look me up on Github under the profile name ${data.github}

  Or if you have any question about my repo feel free to contact me at ${data.email}

  ---
`;
}

module.exports = generateMarkdown;
