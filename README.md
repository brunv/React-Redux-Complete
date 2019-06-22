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

#### Functional Components vs Class Components:
- Funcitonal: good for simple content
- Class-based: good if you have any complex logic; anything that needs to respond to user input; anything that need to make network requests
  - Easier code organization
  - Can use *state*
  - Easier to handle user input
  - Understands lifecycle events
  - Easier to do things when the app first starts

### Props in Components
It's a system for passing data from a *parent* component to a *child* component. Its goal is to customize or configure a child component.

## React State
- Only usable with class components (technically can be used with functional components using the *hooks* system)
- *State* is a JS object that contains data relevant to a component
- Updating *state* on component causes the component to (almost) instantly rerender
- Must be initialized when a component is first created
- Can **only** be updated using the funcion *setState()*

## Component Lifecycle
- **START**
- Constructor:
  - Good place to do our state initialization and one-time setup (APIs, network requests, data loading...), but...
  - It's recommended (as stated as a good practice in the documentation) that you do it inside the componentDidMount mehtod
- Render:
  - Just return JSX
  - Avoid doing anything besides returning JSX
- (content visible on screen)
- ComponentDidMount:
  - Perfect location to do some initial data loading for your component
  - Or to kick off some outside process like getting users current position if you only have todo this one time
- (sit and wait for updates...)
- ComponentDidUpdate:
  - This method is called every single time that a component is updated any reason
  - Good place to do more data-loading when *state* or *props* change
- (sit and wait until this component is no longer shown)
- componentWillUnmount:
  - Good place to do cleanup (especially for non-React stuff)
- **END**

- **Other lifecycle methods (rarely used):**
- ShouldComponentUpdate
- GetDerivedStateFromProps
- GetSnapshotBeforeUpdate

## Controlled and Uncontrolled Forms
Controlled elements stores data inside of the component rather than leaving the data inside the DOM like Uncontrolled elements.

## React Refs
React Reafs are a system to give us direct access to a single DOM element that is rendered. To use it we create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props.

# Redux

### Redux Cycle
To change state of our app, we call an **Action Creator** that procudes an **Action**. This action gets fed to **Dispatch** that forwards the action to **Reducers**. This new Reducers creates new **State**, then we wait until we need to update state again to start the cycle once again.

To see a code example of this explanation, check this pen [Redux 101](https://codepen.io/brunv/pen/joXeeV).

### Installing Redux
To install Redux and React-Redux, just enter the command:
```
npm install --save-dev redux react-redux
```

### Redux Thunk
Thunk is a **middleware** to help us make requests in a redux application. Redux Thunk simply allows us Action Creators to return functions instead of actions objects, making async requests easier.
```
npm install --save-dev redux-thunk
```

### Some rules of Reducers
- Must return *any* value besided *undefined*
- Produces *state*, or data to be used inside of your app using only previous state and the action (reducers are pure)
- Must no return reach 'out of itself' to decide what value to return
- Must not mutate its input *state* argument

### How to work with Arrays and Objects without mutating the *state* argument directly
Why do we need to use this syntax? Because Redux notifies the React app only when there is a change to the state. It does it by comparing the previous state and the next one after getting through the reducers. This comparison between two arrays or two objects in JavaScript is done by comparing its position in memory, so if you change an object or array directly there is no way to tell if something has change thus Redux doesn't notify React about it. The only way Redux can identify the change is by reciving a new array or object. And to do so you need to use the ES6 syntax:

- **Removing** an element from an array:
  - **Bad**: state.pop()
  - **Good**: state.filter(element => element !== 'hi')
- **Adding** an element from an array:
  - **Bad**: state.push('hi')
  - **Good**: [...state, 'hi']
- **Replacing** an element in an array:
  - **Bad**: state\[0] = 'hi'
  - **Good**: state.map(el => el === 'hi' ? 'bye' : el)


- **Updating** an element from an object:
  - **Bad**: state.name = 'Sam'
  - **Good**: { ...state, name: 'Sam' }
- **Adding** an element from an object:
  - **Bad**: state.age = 30
  - **Good**: { ...state, age: undefined }
- **Removing** an element from an object:
  - **Bad**: delete state.name
  - **Good**: { ...state, age: undefined } or _.omit(state, 'age') (this is Lodash Library)

## React Router
A short overview of the react-router libs:

- **react-router**: core navigation lib (we don't install this manually)
- **react-router-dom**: navigation for dom-based app (that's what we need)
- **react-router-native**: navigation for react-native apps
- **react-router-redux**: binding between Redux and React Router (not necessary)

So we need to install:
```
npm install --save react-router-dom
```

### Different types of routers
 - **MemoryRouter**: doesn't use the URL to track navigation.
   - localhost:3000/
   - **Use case**: MemoryRouter uses no visible path. Useful in cases where direct navigation via the address bar doesn't make sense. Consider for example a game. Sure, the game has a start page, maybe some settings, a highscore list, and various stages going through the game. But navigating directly to e.g. /game/level/5 is (probably) not something you want (depending on the game of course).
 - **HashRouter**: uses everything after a # as the 'path'.
   - localhost:3000/#/pagetwo
   - **Use case**: HashRouter has a visible path, but uses the hash thing. Practically for the user this is no different from the BrowserRouter, but using the hash also means you as a developer, when you deploy, can deploy anywhere with no configuration of the web server. It will just work.
 - **BrowserRouter**: uses everything after the TLD (.com, .net) or port as the 'path'.
   - localhost:3000/pagetwo
   - **Use case**: BrowserRouter also has a visible path, but to properly work, you will need to do special configuration on the web server to make sure that your index.html file is served, even when the web server is asked for something else (like /pagetwo, from the example, which doesn't actually exist on the web server). For example, here's how one could do it using the Apache Web Server using an .htaccess file:
```
RewriteEngine on
RewriteBase /
 
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule .* index.html/$0 [L]
```

### Always visible components
In order to make sure that a components is always visible we just have to place it inside the App component and outside of out <Router>. To be more clear, here's an use case: when the same header is used (visible) in every page.

## React Authentication
#### Email/Password Authentication
- We store a record in a database with the user's email and password
- When the user tries to login, we compare email and passoword with what is stored in database
- A user is 'logged in' when they enter the correct email and password

#### OAuth Authentication
- User authenticates with outside service provider (Google, LinkedIn, Facebook)
- User authorizes our app to access their information
- Outside provider tells us about the user
- We are trusting the outside provider to correctly handle identification of a user
- OAuth can be used for:
  - user identification in our app
  - our app making actions on behalf of user

#### OAuth for Servers
- Results in a 'token' that a server can use to make requests on behalf of the user
- Usually used when we have an app that needs to access user data when they are not logged in
- Difficult to setup because we need to store a lot of info about the user

#### OAuth for JS Browser Apps
- Results in a 'token' that a server can use to make requests on behalf of the user
- Usually used when we have an app that only needs to access user data when they are logged in
- Very easy to set up thanks to Google's JS lib to automate the entire authentication proccess