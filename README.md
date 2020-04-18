# JavaScriptStarterKit
JavaScript Starter Kit

Global Packages:
  Editor Configuration
    .editorconfig file specifies editor configuration settings. Visit editorconfig.org for help documentation and editor plugins
  Package Management
    Install node.js; use npm for package management
    Find package information: https://www.npmjs.com/
      Update npm by running as administrator: npm i npm@latest -g
  Package Security
    Now built in to npm - node security package checks packages for vulnerabilities
  Package Updates
    Use npm-check-updates: https://www.npmjs.com/package/npm-check-updates
    Install package: npm i npm-check-updates -g
    Update all dependencies to their major versions: ncu -u 
    Install updated packages: npm install
    Check global dependencies: ncu -g
  Automation
    Options for a taskrunner include Grunt, Gulp, and npm scripts
    Use npm scripts
      add to scripts section in package.json
      npm start at command line runs start script
      npm test at command line runs test script
      npm run <scriptname> runs any other npm scripts
        pre<scriptname> will run prior to <scriptname>, if present
        post<scriptname> will run after <scriptname> if present
      

Project Packages:
  Development Web Server:
    Live-Server for serving up static files
    * Express will work well for Web apps built with Node and offers live updates
    Webpack also has development server options with live update capability

    Serve to a local network:
      Browsersynch: share with an ip address on your local network. All devices connecting to the ip sych the same application state. Great for testing on multiple devices
    Serve on the web:
      Tools: localtunnel, ngrok, surge, now
      localtunnel: allows you to server to the web from your local device
        Install: npm i localtunnel -g
        Serve to web: start app and run; lt --port 3000 (or whatever local port the app is running on)
      ngrok: password protects access, but requires more setup
      now: deploys Node.js apps to the cloud (not served locally)
        Install: npm i now -g
        Create start script, and type now to serve to the cloud
      surge: deploys static files to a public cloud. Can also be use for hosting and automated deployments
        Install: npm surge -g
  
  Transpiler
    Options include Babel, TypeScript, and Elm
      There are hundreds of options. Many modern languages transpile to JavaScript
    Use Babel: babel-node allows you to use modern javascript for your build scripts

  Module Format
    Options include CommonJS, such as native to Node, and ES6 Modules
    To use ES6 Modules, you need a bundler like Webpack

  Bundler
    Options include Browserify, Webpack, Rollup, and JSPM
    Use Webpack
      Loaders allow you to bundle JavaScript, CSS, and more
      Add more notes and optimize configuration with Webpack course
    Disable AdBlock in Chrome to use SourceMaps when debugging
