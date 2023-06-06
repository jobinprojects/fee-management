const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const port = 3001

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// --------------------
// Create a MySQL connection
const connection = mysql.createConnection({
  host : 'localhost',
    database : 'fake_database',
    user : 'root',
    password : '123456'
});

// Establish the connection
connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});


app.post('/add/user', (req, res) => {
 


  connection.query('INSERT INTO student_ SET ?', req.body, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }

    console.log('Data inserted successfully');
    res.status(200).json('User registered successfully' );
  });
});


app.listen(port, () => {
  console.log(`Student app listening on port ${port}`)
})