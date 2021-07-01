# 2. Determine platform for documentation website

Author: Jonic Linley (jonic@raspberrypi.org)
Date: 2021-07-01

## Status

Proposed

## Context

We need a documentation solution for our Sauce Design System and its component library.

It must allow us to...:

* author and present detailed documentation
* document our components with...
  * ...notes for appropriate usage and configuration
  * ...sample HTML
  * ...variants for components with multiple options
* easily contribute to the documentation and components

It must also be...:

* easy to navigate and use
* as tech-agnostic as possible:
  * simple DSL for providing component examples
  * little-to-no specialist knowledge required to author documentation and components
* easy to deploy, with a simple ops setup

We were able to easily eliminate the prospect of "rolling our own" solution, having done so in the past (https://github.com/RaspberryPiFoundation/style-guide), with limited success.

To attempt to satisfy these requirements, we have reviewed the following options in varying levels of detail:

* [Docusaurus](https://docusaurus.io/)
* [Docz](https://docz.site/)
* [Fractal](fractal.build/)
* [React Styleguidist](https://react-styleguidist.js.org/)
* [Storybook](https://storybook.js.org/)

Note: We have been using Storybook to power the documentation throughout the Alpha build of Sauce.

One thing many of these systems share is an emphasis on using [React](https://reactjs.org/) to author the component examples. We would like to avoid this if possible, because it can raises the barrier-to-contribution to an unacceptable level, as it requires a contributor to be able to author the necessary React component, as well as knowing about the DSL which powers the component documentation itself.

Use of React also requires the use of Webpack, which in turn often leads to a more complicated dev-environment, and more complicated tooling and config required in deployment.

We ideally need a system that stays as close to vanilla HTML/CSS/JavaScript as possible. With that in mind, we felt that tying the documentation to a highly opinionated framework such as React would lead to a worse experience for engineers who would like to contribute, or those who may be misled in thinking that React is the preferred (or only) framework through which Sauce-powered interfaces can/should be built.

It also almost entirely removes contribution opportunities to those without the technical knowledge to work with React, or the time to learn how to work in the system that powers the documentation site itself.

## Decision

After considering all of the above, and our experiences using Storybook throughout Sauce's Alpha, [Fractal](fractal.build/) has emerged as a clear front-runner to fit our requirements. We've conducted a test of Fractal, and it fulfills all of the criteria outlined in this ADR.

We're yet to get into a rhythm of regular contribution from many people of varying technical ability, but once we do, Fractal appears to be the easiest system to aid this process.

Fractal's feature set is more limited than some of the other services reviewed, but this is ultimately one of its strengths, in that it does just a few things, and does them very well. The main features we'll use are:

* [Markdown](https://guides.github.com/features/mastering-markdown/) for long-form documentation
* [Handlebars](https://handlebarsjs.com/)-powered templates for component examples (a few other template languages are supported)
* Component variants
* A simple tool to preview a component's responsive nature
* Plain HTML code samples
* A README.md file in each component for its usage notes (also written in Markdown)
* A "build-and-deploy" process which will deploy a static HTML site through CI
* A simple interface, with clear typography
* A search function

## Consequences

### Work to be done to adopt Fractal

If we adopt Fractal, the biggest consequence will be the initial setup and deployment. However, in assessing Fractal's suitability we already have a working installation, which is currently deployed to a Netlify preview app. This test installation is a perfect basis on which to build out the other component examples and documentation necessary for Sauce as it grows, so the biggest piece of work is already done.

### Enabling Engineers to contribute

Engineers will need to know how to contribute documentation and component examples. This can be dealt with via a workshop, and with contribution guidelines in the documentation itself (meta).

### Enabling NON-Engineers to contribute

Non-engineers may also find some benefit in contributing to the Markdown-powered, text-only documentation, or updating the usage notes for a component. This will also form part of the contribution guidelines, with the process also demonstrated for anyone else in the digital team who doesn't necessarily need to know how to create the components themselves.

### Deployment and ongoing costs

The deployment infrastructure is already in place in our Netlify account, which is already being used to power the Storybook version. The Fractal test installation includes the necessary Netlify config and Circle CI tasks to enable our preferred develop/review/merge/deploy workflow.

As for ongoing costs - Fractal itself is free, and the Sauce documentation website will see so little traffic that it'll hardly make a dent in our bandwidth usage.
