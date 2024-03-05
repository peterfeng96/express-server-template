/* 
ALL REQUESTS THROUGH /API
*/
const express = require("express");

const router = express.Router();

// Options to change exact routing and insert middleware in between routes and final callback function
// Shown in user.js

// GET REQUEST
router.get("/", (req, res) => {
  res.send("GET request to /api");
});
// POST REQUEST
router.post("/", (req, res) => {
  res.send("POST request to /api");
});
// PUT REQUEST
router.put("/", (req, res) => {
  res.send("PUT request to /api");
});
// DELETE REQUEST
router.delete("/", (req, res) => {
  res.send("DELETE request to /api");
});

module.exports = router;
