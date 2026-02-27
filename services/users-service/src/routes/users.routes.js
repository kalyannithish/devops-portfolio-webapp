const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Arjun" },
  { id: 2, name: "Lucky" },
  { id: 3, name: "Kalyan"},
];

// GET /users
router.get("/users", (req, res) => {
  console.log("Fetching all users");
  res.json(users);
});

// GET /users/:id
router.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

// GET /health
router.get("/health", (req, res) => {
  res.json({ status: "OK", service: process.env.SERVICE_NAME });
});

module.exports = router;
