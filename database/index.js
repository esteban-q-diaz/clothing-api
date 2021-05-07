require('dotenv').config()
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.localhost,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

const getClothing = (productId, callback) => {
  const { type, weather, gender } = productId;
  const query = `select * from attire where type = '${type}' AND weather = '${weather}' AND gender = '${gender}'`;

  connection.query(query, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection, getClothing,
};
