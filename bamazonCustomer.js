var mysql = require("mysql");
var inquirer = require("inquirer");
var keys = require('./keys.js')
var Table = require('cli-table');

var purchaseId = [];

// create the connection information for the sql database
var connection = mysql.createConnection(keys.db);


connection.connect(function(err) {
  console.log(err)
});

productTable();

function productTable(){

  connection.query("SELECT * FROM products", function(error, results){
    if ( error ) return console.log(error);

    var table = new Table({
      head:['Id', 'Product Name', 'department', 'Item Price', 'Stock Quanity',]
    });

    for (i=0; i < results.length; i++){
      var tempArray = [];
      for(var key in results[i]){
        tempArray.push(results[i][key]);
      }

      table.push(tempArray);
    }

    console.log(table.toString());
    askQuestions();
  });

}

function askQuestions(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'qa1',
      message: 'What would you like to purchase?'
    },
    {
      type: "input",
      name: 'q2',
      message: 'How many would you like?'
    }
  ]).then(function(answers){
    // console.log(answers.qa1);

    // console.log(answers.q2);
    connection.query('SELECT * FROM products WHERE id = ' + answers.qa1, function(err, result) {
      var new_amount = parseInt(result[0].stock_quanity - answers.q2);
      console.log(new_amount);
      console.log(result);

      if ( new_amount > 0 ) {
        connection.query("UPDATE products SET stock_quanity = ? WHERE id = ?", [ new_amount, answers.qa1 ],
          function(error, results) {
            if ( error ) return console.log(error);
              var totalCost = (result[0].price * answers.q2)
              console.log("you owe "+ totalCost);
            productTable();
        });
      } else {
        console.log('Slow your roll...');
        productTable();
      }
    });


  });
}
