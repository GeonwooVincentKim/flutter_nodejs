
// const express = require("express");
// const mysql = require("mysql2/promise");

// let db = null;
// const app = express();

// app.use(express.json());

// app.post('/users', async(req, res, next)=>{
//   const id = req.body.id;
//   const name = req.body.name;
//   const email = req.body.email;
//   const image_url = req.body.image_url;
//   const address = req.body.address;

//   await db.query("INSERT INTO `TB_USER` (ID, USER_NAME, EMAIL, IMAGE_URL, ADDRESS) VALUES (?, '?', '?', '?', '?');", [id, name, email, image_url, address]);

//   res.json({status:"OK"});
//   next();
// });
// app.get('/users', async (req, res, next) => {

//   const [rows] = await db.query("SELECT * FROM TB_USER;");

//   res.json(rows);
//   next();
// });

// async function main(){
//   db = await mysql.createConnection({
//     host:"localhost",
//     port: "3306",
//     user: "root",
//     password: "1234",
//     database: "UserDB",
//     // timezone: "+00:00",
//     // charset: "utf8mb4_general_ci",
//   });

//   app.listen(8000);
// }

// main();

const express = require("express");
const mysql = require("mysql2/promise");

let db = null;
const app = express();

app.use(express.json());

app.post('/create-user', async(req, res, next)=>{
  const name = req.body.name;

  await db.query("INSERT INTO users (name) VALUES (?);", [name]);

  res.json({status:"OK"});
  next();
});
app.get('/users', async (req, res, next) => {

  const [rows] = await db.query("SELECT * FROM users;");

  res.json(rows);
  next();
});

async function main(){
  db = await mysql.createConnection({
    host:"localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "UserDB",
    // timezone: "+00:00",
    // charset: "utf8mb4_general_ci",
  });

  app.listen(8000);
}

main();