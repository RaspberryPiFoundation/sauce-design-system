# Sauce Design System

[![Netlify Status](https://api.netlify.com/api/v1/badges/8723785b-6844-46a8-9440-879166a8de22/deploy-status)](https://app.netlify.com/sites/sauce-design-system/deploys)

https://sauce.raspberrypi.org/

**This README documents the setup procedure for development of Sauce itself, it does *not* document the process through which Sauce is consumed in an application. See the [Installation](https://sauce.raspberrypi.org/docs/get-started/installation) guide on the Sauce documentaton site.**

## Architecture Overview

This site uses [Fractal](https://fractal.build) to create a documentation site for the Sauce Design System. It contains technical and non-technical documentation, and holds the [Sass](https://sass-lang.com/) files that make up the Pattern Library for us in our applications.

## Development

### Requirements

- [NodeJS](https://nodejs.org/) - any [supported LTS version](https://github.com/nodejs/Release)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/#installation) - be sure to `netlify login` after installation

### Setup instructions

1. Clone this repository to your development machine
2. Navigate to the directory containing this file with your Terminal application
3. Run `npm install`

### VS Code setup (optional, but recommended)

This project contains settings to automatically lint and format your changes as you save files.

After opening this repository in VS Code for the first time, you may see a dialog in the bottom right asking if you would like to install all recommended extensions for this workspace.

If VS Code does **not** ask if you would like to install the extensions, open the Command Palette with <kbd>cmd</kbd> <kbd>shift</kbd> <kbd>p</kbd>, and run `Show Recommended Extensions`. You'll be taken to the extensions palette, and from there you can install all the **workspace's** recommended extensions.

### Running the development environment

```sh
netlify dev
```

This will start the development server running at http://localhost:31415/

The development server watches for changes to your docs and Sass files, so reloading the page should be unnecessary, unless you've made major changes to the organisation of documentation pages, or the Fractal config/theme.

While editing Sass files, your Terminal application will show any output from the compilation of styles. This may include errors, warnings, and debug information from the files that power the underlying architecture of the pattern library. Keep it visible and pay attention to anything it tells you.

### Testing the build target locally

To run the output of the `npm build` command locally, run the following command:

```sh
npm run build:debug
```

This will compile Sauce's styles, build fractal, and start a local Web server at http://localhost:8000

## Consuming this package locally

**HERE BE MONSTERS** - we need to look at this section again to make sure it's accurate.

You may find yourself in this scenario:

`As a developer I want to test changes to Sauce components in the local development environment of [application].`

In order to do so, your application must meet the requirements as detailed in the "For Developers / Getting Started" documentation. The following points are essential:

- Your application _must_ run on the same version of NodeJS as Sauce
- Your Node dependencies _should_ be installed through `npm`. If this isn't possible then this should still work for Yarn.

If those two points are satisfied, and you're able to include Sauce in your application as the "For Developers / Getting Started" documentation, you're ready to test a local copy of Sauce.

### STEP 1: Create Sauce npm link

In Terminal, navigate to the root of the `sauce-design-system` repository, and execute the following commands.

- `npm install`
- `npm link`
- `npm start`

### STEP 2: Link to Sauce in your application

In Terminal, navigate to the root of your application, which should be the same directory as its `package.json` file. Execute the following commands.

- `npm install`
- `npm link @rpf/sauce`

This will replace the `@rpf/sauce` directory in the application's `node_modules` directory with a symlink to your local copy of Sauce. Any changes you make in Sauce will be reflected in your application.

If you ever have to nuke your `node_modules` directory (which is an inevitability), you will need to link Sauce again, in which case you need only repeat `STEP 2`.
