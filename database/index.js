
const mysql = require('mysql');
const { connectionData } = require('./mysql.config');

const connection = mysql.createConnection({
  host: connectionData.localhost,
  user: connectionData.user,
  password: connectionData.password,
  database: connectionData.database,
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