# Full-Stack CRUD Starter

##### Tech Stack:

* Client-Side / Front-End:
  * HTML
  * CSS
  * JS
* Server-Side / Back-End:
  * JS
  * Node
  * Express
  * PostgreSQL

##### Usage:

1. Click "Use this template" then "Create a new repository".
  * In the "Owner" dropdown that pops up, be sure to choose *your own* GitHub account.
  * Name the repository whatever you'd like. Only rule is *no swears*.
2. Clone the repo you've just generated.
3. `cd` into the repo.
4. Run `npm install` to install this repo's dependencies.
    * This will create the `node_modules/` folder.
5. In Postico, create and name your database.
6. Update `pool.js` to reflect the name you chose for your database.
7. Modify the `CREATE TABLE` and `INSERT INTO` statements in the `database.sql` file to reflect what you are going to build.
8. In Postico, connect to the database you created, then use the SQL queries you've modified `database.sql` to:
  * Create your table.
  * Populate the table with seed data.
9. Run `npm start` to start the server with `nodemon`.
  * Or, kick it old-school and use `node server/server.js`.
10. Go to `http://localhost:5001`.
11. Build a CRUD app.


## GET Functionality:

Get the data out of SQL and display on DOM!

🐻 = Client-Side
🐻‍❄️ = Server-Side

1. 🐻 Ask the server for the "us" data.
  * Inside a `getAndRender` function.
  * `axios` to make the HTTP GET request.
2. 🐻‍❄️ Ask the database for the "us" data.
  * Inside a GET route.
  * `pool.query` to send a `SELECT * FROM us` SQL query.
3. 🐻‍❄️ When our "us" data comes back (AKA: Inside the `pool.query`'s `.then`.), we send it to the client.
  * `dbResult.rows` will be the actual data we want to mail back to the client.
4. 🐻 Now the data we asked for in Step 1 is here. We need to write code that will render this data on the DOM.
  * Inside the `getAndRender` function.
  * DOM manipulation happens to display the "us" data we just got.


## POST Functionality:

Collect a name from the user, then send it to the server and insert it into the "us" table.

🐻 = Client-Side
🐻‍❄️ = Server-Side

1. 🐻 Create a form in `index.html` with one input to collect a name and a submit button.
2. 🐻 When the submit button gets clicked, send the name to the server.
  * Inside a `createPerson` or `handleSubmit` function.
  * `axios` to make the HTTP POST request.
3. 🐻‍❄️ Ask the database to insert a new row into the "us" table, using the name that got sent.
  * Inside a POST route.
  * `pool.query` to send a `INSERT INTO` SQL query.
  * Gonna need to do the ol' `pool.query(sqlText, sqlValues)` trick. 🙂
4. 🐻‍❄️ When the `INSERT INTO` SQL query has succeeded, send status 201 to the client.
5. 🐻 Now we know that our POST request was successful, we call our `getAndRender` function to refresh the DOM with our database data.
