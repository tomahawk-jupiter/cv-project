# CV Project

A basic React app for learning React basics. An Odin Project assignment.

Create React App was used to setup the boilerplate.

## Contents

- [Overview](#overview)
- [Create React App](#create-react-app)
- [Github Pages Hosting](#github-pages-hosting)

## Overview

There are three components; Contact, Education and Jobs. These are rendered in the top level component.

The Education and Jobs components hold the user inputted entries in an array. These arrays are passed into sub components that create the "cards" to display the entries.

## Create React App

Generate boilerplate for a react app without having to set it up yourself:

    $ npx create-react-app <name-of-app>

The original notes that come with the boilerplate are in `CRA_NOTES.md`.

### Start Dev Server

This will open the project in your browser using the Dev server.

    $ npm start

### Build folder

Build the build folder. The build folder contains the code you would use to host project eg. using Github pages.

    $ npm run build

## Github Pages Hosting

Push the build folder to its own branch to host on github pages:

    $ git subtree push --prefix build origin gh-pages
