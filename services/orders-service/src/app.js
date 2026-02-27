const express = require("express");
const ordersRoutes = require("./routes/orders.routes");

const app = express();

app.use(express.json());
app.use("/", ordersRoutes);

module.exports = app;
