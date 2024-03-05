/* 
ALL REQUESTS THROUGH /USER
*/

const express = require("express");

const router = express.Router();
const adminRouter = require("./admin");

router.get("/", (req, res) => {
  res.send("Hello");
});

//Routes can be further extended/nested. All requests that go to http://localhost:3000/user/admin go to adminRouter
router.use("/admin", adminRouter);

module.exports = router;
