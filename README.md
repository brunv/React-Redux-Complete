# React and Redux Complete Study
Repository for studying React and Redux using the following resources:
- [Modern React with Redux 2019](https://www.udemy.com/react-redux/)

## create-react-app
This package starts a new React Project that comes with Webpack, Babel and Dev Server.

If you're running this package for the first time, you must install it:
```
npm install -g create-react-app
```

To use this package and create your react app, just run:
```
npx create-react-app <app_name>
```

**Project Directory Structure:**
- **src:** Folder where we put all the source code we write
- **public:** Folder that stores static files, like images
- **node_modules:** Folder that contains all of our project dependencies (usually not commited to git)
- **package.json:** Records our project dependencies and configures our project
- **package-lock.json:** Records the exact version of packages that we install
- **README.md:** Instructions on how to use this project

#### Starting a project
Run this command:
```
npm start
```

## What is a Component?
A component is a *function* or *class* that produces HTML (using .jsx) to show the user and handles feedback from the user (using event handlers).

#### Component:
- **Nesting:** A component can be shown inside of another
- **Reusability:** We want to make components that can be easily reused through out application
- **Configuration:** We should be able to configure a component when it is created

#### Creating a reusable and configurable component:
- Identify the JSX that appears to be duplicated
- What is the purpose of that block of JSX? Think of a descriptive name for what it does
- Create a new file to house this new component - it should have the same name as the component and must be in uppercase
- Create a new component in the new file, paste the JSX into it
- Make the new component configurable by using React's *props* system

## Props in Components
It's a system for passing data from a *parent* component to a *child* component. Its goal is to customize or configure a child component.