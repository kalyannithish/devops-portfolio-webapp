const express = require("express");
const router = express.Router();

const orders = [
  { id: 1, item: "Laptop", amount: 1200 },
  { id: 2, item: "Phone", amount: 800 }
];

// GET /orders
router.get("/orders", (req, res) => {
  console.log("Fetching all orders");
  res.json(orders);
});

// GET /orders/:id
router.get("/orders/:id", (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.json(order);
});

// GET /health
router.get("/health", (req, res) => {
  res.json({ status: "OK", service: process.env.SERVICE_NAME });
});

module.exports = router;
