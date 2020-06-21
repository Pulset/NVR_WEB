var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  console.log(req.body.username, req.body.password);
  // res.status(200).json({ status: "ok" });
  // res.send(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  if (req.body.username && req.body.password) {
    var MongoClient = require("mongodb").MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("NVR");
      dbo
        .collection("userInfo")
        .find({ userName: req.body.username })
        .toArray(function (err, result) {
          // 返回集合中所有数据
          if (err) throw err;
          console.log(result);
          if (result.length && result[0].password === req.body.password) {
            res.status(200).send({
              result: true,
            });
          } else {
            res.status(200).send({
              result: false,
              err: "密码错误",
            });
          }
          db.close();
        });
    });
  } else {
    res.status(200).send({
      result: false,
      err: "缺少用户名或者密码",
    });
  }

  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );
});

module.exports = router;
