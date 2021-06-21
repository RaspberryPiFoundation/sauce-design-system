# 2. Use Storybook for documentation

Date: 2021-06-21

## Status

Accepted

## Context

The current version of [Sauce's documentation site](https://sauce.raspberrypi.org) is powered by [Storybook](https://storybook.js.org/), an open-source tool for documenting Design Systems and component pattern libraries. This ADR attempts to retroactively validate the decision to use this system over the prospect of rolling our own.

### Features

Out-of-the-box, Storybook gives us the following:

* Rich documentation powered by MDX
* Component code samples, with documentation for appropriate use
* A tool for previewing components with different content, and with variations on a single component
* Responsive component previews
* A tool that simulates how a component will appear to people with different kinds of color-blindness
* Tools to provide basic accessibility checking
* Tools that highlight potential issues with a component when viewed in a mobile context

We have full control over the structure of the documentation, so we can provide as much or as little guidance as we'd like for developers to better understand how Sauce works, how to use it in an application, how to build further application styles on top of Sauce's foundations, and how to contribute back to Sauce when the need arises.



## Decision

The change that we're proposing or have agreed to implement.

## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.
