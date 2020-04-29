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
    * Use Babel: babel-node allows you to use modern javascript for your build scripts
      Configure with additional plugins to work with experimental lanuage features

  Module Format
    Options include CommonJS, such as native to Node, and ES6 Modules
    * Use ES6 Modules
    To use ES6 Modules, you need a bundler like Webpack

  Bundler
    Options include Browserify, Webpack, Rollup, and JSPM
    * Use Webpack
      Loaders allow you to bundle JavaScript, CSS
      Allows for bundle splitting, speeding up page loads for complex applications
      Add more notes and optimize configuration with Webpack course
    Disable AdBlock in Chrome to use SourceMaps when debugging

  Linter
    * Use ESLint with ESLint-watch to lint all JavaScript files
      Use builtin preset rules as a starting point and customize rules as needed
      To work with experimental JavaScript features, try babel-eslint
      
      In the console, run `npm run lint:watch` to start process to watch files and lint when you save to provide near real time feedback on warnings and errors. lint:watch script also set to run in parallel on npm start.
  
  Atomated Testing
    What to test:
      Test types include Unit, Integration, and UI
      * Start with Unit testing: tests functions and modules
      Look to other frameworks for automated integration and UI testing
    Framework: 
      * Mocha: Popular standard, requires a separate assertion library
      Jasmine: Similar to mocha, includes assertion library, less flexible
      Jest: Popular for React development, extends Jasmine
    Assertion Library:
      * *hai: most popular
    Helper Library
      * JSDOM: Simulates the browser's DOM for running your tests https://github.com/jsdom/jsdom
      Cheerio: Allows you to query a virtual DOM using jQuery selectors
    Where to put them?
      Centralized, in a test folder
      * Alongside the file
      * Set a naming convention for test files: fileName.test.js
    Where to run them?
      In the browser? Options include Karma and Testem
      In a headless browser, like PhantomJS
      * In a simulated browser, with an In-memory DOM, like JSDOM
    When to run them?
      Run unit tests on save
        Rapid feedback, facilitates TDD
      Run integration and UI tests on deployment

  Continuous Integration
    Verifies build when code is committed. May also feed into an automated deployment.
    Options inlude Jenkins, Travis, Appveyor, CircleCI
    GitHub also has intergrated build test and deployment flows for node.js
    * Use TravisCI for a public repo for an opensource project
        Enable CI for a project here https://travis-ci.org/account/repositories
        Tutorial: https://docs.travis-ci.com/user/tutorial/

  HTTP Requests
    Within Node.js, use the native http, or the request package
    Within the browser, you could use Fetch w/ polyfills for older browsers or a package like Axios

    It's a best practice to centralize API calls
      Helps with standardizing format
      Simplifies preloader logic and handling errors
      Simplifies testing by making it easy to mock an API
    
    * Use Fetch w/ polyfill
        import 'whatwg-fetch' will add polyfill regardless of browser
        polyfill.io provides an api that will polyfill specific features only if needed by the client

  Mocking HTTP
    - static JSON
    - api-mock and JSON server use static JSON with a mock-API that you can interact with
    - JSON Schema faker generates randomized data for a schema you specify
    * Use JSON Server + JSON Schema Faker to produce randomized data
      - User JSON Schema to declare the shape of the data

  Dynamic HTML
    Build process dynamically generates HTML for the application.
    * Use HTML-Webpack-plugin
      Injects the bundle into the HTML
      Minifies HTML
      Use to implement cache busting with dynamically generated filenames

   Error Tracking
    Reports errors in production application
    Options include TrackJS, Sentry, New Relic, Raygun
    None of these options are free.
    Can use builtin support for html templates with html-webpack-plugin to conditionally included the error tracking code only in production.
  
  HTML Templates
    HTML-Webpack-plugin supports many HTML template options, including ejs, handlebars, underscore, and more 
    Default templating engine is ejs, embedded JavaScript templating; https://ejs.co/

  Hosting
    Consider creating separate projects for the UI and the API
      Built-in separation of concerns
      Faciliates teams working independently on each
      Each have different hosting needs. UI is easier and cheaper to host
      Use different technologies for API
    Cloud Hosting
      Full-Featured options include: aws, azure, heroku, firebase, google cloud platform
      Options for hosting static files include: netlify, github pages, surge
    * Hosting API on heroku
    * Hosting UI on Surge 

    For the demo, the API is broken out into a separate project that will be hosted on Heroku; see js-dev-env-demo-api

    The static HTML pages are deployed to Surge through the deploy script
    See here: https://surge.sh/
      Host static webpages for free, even specifying your own domain
    Build Scripts:
      While in development, use: npm start
      Perform a production build: npm run build
      Deploy to production: npm run deploy
      Remove a surge deployment: surge teardown <URL>

Handling Updates:
  Tools and strategies for keeping your projects up to date.
  
  Using Yeoman
    Create a Yeoman generator for your project environment
    Existing generator setups are a good source of ideas for your starter kit
    To update with Yeoman:
      Commit all your files
      Run the generator over your existing project
      Approve file overwrites as needed
      Diff the files to resolve any conflicts
  
  Using Github
    Host Starter Kit on github
    For new projects from Starter Kit
    Pull changes to the starter kit into existing projects
  
  Using npm
    Encapsulate kit in an npm package
    Update the npm package to receive the latest updates
      This means you can't customize the npm package to the project
    
For Ideas and Inspiration
  React starter kits: andrewhfarmer.com/starter-project
  Search on your framework and a keyword like starter kit, starter project, boilerplate, development environment, or seed
