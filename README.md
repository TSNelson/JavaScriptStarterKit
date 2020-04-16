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



Copy the package.json file to your project directory
Run npm install -g npm-check-updates
Run ncu -u to update all dependencies to their major versions using the tool installed above
Run npm install to install the dependencies from the package.json file

