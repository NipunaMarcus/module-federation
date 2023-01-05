# Module Federation with Vite and React

This is a sample with multiple packages with multiple applications to simulate usecase for developing
an application using module federation.

Blog: 

## Getting Started

### Prerequisites
  - Node: v16.9.0
  - NPM: 7.21.1

### Build & Run the project
Following command will install the dependencies.

`npm i`

Following command will build all the packages.

`npm run build`

Next open up two terminals and enter each of  following commands to run each of the projects.

**App**

```
cd packages/app
npm run preview
```

**Home**

```
cd packages/home
npm run start
```

Running applications can be access through these URLs

**Host Application**

`http://localhost:5001/`

**Remote Application 1**
Home page test application can be access from here.

`http://localhost:5000/`

Entry file for the javascript module for shared component.

`http://localhost:5000/assets/homepage.js`

