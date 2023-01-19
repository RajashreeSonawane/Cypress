const { defineConfig } = require("cypress");
//const mysql = require('cypress-mysql');
//module.export = module.exports =defineConfig({
module.exports = defineConfig({
  "env":{
    "db": {
      "host": "127.0.0.1",
      "port": "3006",
       "user": "root",
      "password": "Kraj@123",
      "database": "persontest"
      }
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //mysql.configurePlugin(on);
      on('task', {
        queryDb: query => {
          return queryTestDb(query, config);
        },});
       },
  },
});


const mysql = require("mysql");
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}


