var mysql = require("mysql");
var inquirer = require("inquirer");
var keys = require('./keys.js')
var Table = require('cli-table');

var purchaseId = [];

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: keys.db,
  database: "bamazon"
});


productTable();

function productTable(){
  connection.connect();
  connection.query("SELECT * FROM products", function(error, results){
    if(error) throw error;
    console.log(error);

    var table = new Table({
      head:['Id', 'Product Name', 'department', 'Item Price', 'Stock Quanity',]
    });

    for (i=0; i < results.length; i++){
      var tempArray = [];
      for(var key in results[i]){
        tempArray.push(ressults[i][key]);
      }

      table.push(tempArray);
    }

    console.log(table.toString());
  });

  askQuestions();
}

function askQuestions(){
  inquirer.prompt([{

    type: 'input',
    name: 'qa1',
    message: 'What would you like to purchase?'
  }]).then(function(answers){
    console.log(answers.qa1);

    var answer1 = answers.qa1;

    inquirer.prompt([{

      type: "input",
      name: 'q2',
      message: 'How many would you like?'

    }]).then(function(answers){
      console.log(answers.q2);

      connection.query("SELECT * FROM products WHERE id= " + answer1, function(error, results){
        console.log(results);
      });
    })
  });
}
