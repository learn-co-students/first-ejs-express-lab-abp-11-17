# Your First Express App Lab

## Objectives

1. Draw a route to a GET '/'
2. Render `views/index.ejs` as a response.
3. Pass data from the route callback to the view.
4. Use data from the route callback in the view.

## Instructions

Just to be safe, before starting the tests or the server, run `npm install` in your terminal.

You can run the tests with `learn`.

To start your application, type `npm start`. The IDE will give you an IP address and port for your application, locally, your application will be running at `http://localhost:3000`.

### GET '/' Route

In `app.js`, define a route for the root of the application at `/`. In the callback for that route, you will be rendering a template inside the `views` directory called `index.ejs` using `resp.render()`.

Your route callback should also pass a javascript object to the view with a key `welcomePhrase` that has a value of `Hello, World from Express and EJS!`.
