# Node.js README.md Generator

<p>
    <img src="https://img.shields.io/github/repo-size/rush0218/node-project" />
    <img src="https://img.shields.io/github/languages/top/rush0218/node-project"  />
    <img src="https://img.shields.io/github/last-commit/rush0218/node-project" />
</p>

<p>
    <img src="https://img.shields.io/badge/Javascript-green" />
    <img src="https://img.shields.io/badge/-node.js-blue" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-screencastify-orange" />
    <img src="https://img.shields.io/badge/-json-lightgrey" />
</p>

## Description

A Node.js application that generates a high-quality README.md file for a GitHub repository. Users input information regarding the repository in the command line using Node.js "inquirer" and the file is created through "fs-file system". 

## User Story

```
As a developer
I want a README.md generator 
So that I can quickly create a professional README.md file for a new project
```

## Installation

To generate your own README.md, `git clone` the repository down to locally. 

Run `npm init` in order to install the followig npm package dependencies as specified in the `package,json`:

- `npm install inquirer` will prompt for user input in the command line. 


## Usage

![Gif Demo](src/Node-project.gif)

`node index.js` in the command line will initialize the application.

Answer each prompt accordingly to generate the README.md file. Once you've completed each prompt the README.md file will be generated and titled "ex-README.md". 

## Contributing 

Made with ❤️  by [Tre' Rush](https://github.com/Rush0218)

