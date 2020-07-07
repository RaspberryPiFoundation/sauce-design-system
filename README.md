# Sauce Design System

[![Netlify Status](https://api.netlify.com/api/v1/badges/8723785b-6844-46a8-9440-879166a8de22/deploy-status)](https://app.netlify.com/sites/sauce-design-system/deploys)

## Architecture Overview

This site uses [Storybook JS](https://storybook.js.org) to create a documentation site for the Sauce Design System. It contains technical and non-technical documentation, and holds the [Sass](https://sass-lang.com/) files that make up the Pattern Library for us in our applications.

## Development

### Requirements

- [NodeJS](https://nodejs.org/) 12.18.1 - install with [`asdf`](https://asdf-vm.com/)

### Setup instructions

1. Clone this repository to your development machine
2. Navigate to the directory containing this file with your Terminal application
3. Run this: `npm install`

### Running the development environment

```sh
npm start
```

This will start the development server running at http://localhost:54321/

The development server watches for changes to your docs and Sass files, so reloading the page should be unnecessry, unless you've made major changes to the organisation of documentation pages.

While editing Sass files, your Terminal application will show any output from the compilation of styles. This may include errors, warnings, and debug information from the files that power the underlying architecture of the Pattern Library. Keep it visible and pay attention to anything it tells you.

## Consuming this package locally

You may find yourself in this scenario:

`As a developer I want to test changes to Sauce components in the local development environment of [application].`

In order to do so, your application must meet the requirements as detailed in the "For Developers / Getting Started" documentation. The following points are essential:

* Your application *must* run on the same version of NodeJS as Sauce (currently 12.18.1)
* Your Node dependencies *should* be installed through `npm`. If this isn't possible then this should still work for Yarn.

If those two points are satisfied, and you're able to include Sauce in your application as the "For Developers / Getting Started" documentation, you're ready to test a local copy of Sauce.

### STEP 1: Create Sauce npm link

In Terminal, navigate to the root of the `sauce-design-system` repository, and execute the following commands.

* `npm install`
* `npm link`
* `npm start`

### STEP 2: Link to Sauce in your application

In Terminal, navigate to the root of your application, which should be the same directory as its `package.json` file. Execute the following commands.

* `npm install`
* `npm link @rpf/sauce`

This will replace the `@rpf/sauce` directory in the application's `node_modules` directory with a symlink to your local copy of Sauce. Any changes you make in Sauce will be reflected in your application.

If you ever have to nuke your `node_modules` directory (which is an inevitability), you will need to link Sauce again, in which case you need only repeat `STEP 2`.
