# JDev Web Components

Simple project to test the creation of vue plugins, publishing of npm modules and many other things!

For release notes, see the **CHANGELOG**

## Prefacy

I had a little curiosity about the publishing of npm modules and how the vue plugins creation works, so, this project was born.

It's for test and practice purpose, so you can download it, improve it, delete it, destroy it, eat it, do whatever you want.

## Prerequisites

You need to have installed the **NVM (Node Version Manager)** <https://github.com/creationix/nvm> version 8.9 or above (8.11.0+ recommended). With **NVM** comes the **NPM (Node Package Manager)**, you need to make sure that **NPM** is in the version 3 or above to get a better tree dependence.

## Setting-Up

After cloning the project and having the invicted version of nvm, you must execute the following command in your console to install the dependencies of the project:

```sh
 npm install
```

## Getting Started

Run the following command in your console: **npm run serve** to start the project on the port: 8080, this command will prepare the project environment and will open your browser by default at the address: <http://localhost:8080.> where the demo page with all the components will be waiting for you.

## How it works?

The main idea is that if the user wants to download one component or the complete suite can do it, for that reason we should be able to publish the complete suite as each component as well.

Inside the components folder you will see that each component has the following folder structure (Button component as example):

```sh
webcomps-button/
|-- dist/
|-- src/
    |-- Button.vue/
    |-- index.js/
|-- CHANGELOG.md
|-- README.md
|-- package.json
```

* dist: minified files result of webpack compression.
* src: The heart of the plugin, in this folder you will find the vue component and index.js file with its import.

To build it just need to do this tree simple steps:

1. npm link @vue/cli-service
2. npm link vue-template-compiler
3. npm run build

To test the package you just need to situate in the dist folder and run the command: **npm pack**, it will create a .tgz package that must to be moved to the root folder, then you can install it running: **npm install --save package-name.tgz**.

The same steps of installation if you want to integrate all the suite of components, just does not forget move the package-name.tgz to the packages folder and remove it after its installation.

### Lints and fixes files
```
npm run lint
```
