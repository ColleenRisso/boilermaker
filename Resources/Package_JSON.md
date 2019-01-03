#Start Command
In your package.json, you will need to set up an npm start command (or some combination of other commands) to build your client javascript and run your server.

##Start vs. Build Command
You may choose to have a separate scripts for building your client application and for starting your server, or do both with the same command - it's up to you. (webpack-dev-server does both, out of the box!) The one used in this app is an example where we run webpack in --watch mode in the background, and simultaneously start a server with nodemon (in server.js). Note that there are two different start commands that can be used to run/test the app.