// module.exports = app => {
//     app.post('/users', async(req, res, next)=>{
//         const name = req.body.name;
      
//         await db.query("INSERT INTO `TB_USER` (ID, USER_NAME, EMAIL, IMAGE_URL, ADDRESS) VALUES (?, '?', '?', '?', '?');", [name]);
      
//         res.json({status:"OK"});
//         next();
//       });
//       app.get('/users', async (req, res, next) => {
      
//         const [rows] = await db.query("SELECT * FROM TB_USER;");
      
//         res.json(rows);
//         next();
//       });
      
// }