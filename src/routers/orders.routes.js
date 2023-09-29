const { Router } = require("express");
const { addOrder, getOrders } = require("../controllers/orders.controllers");

const routers = Router();

routers.get("/get", getOrders);

routers.post("/addorder", addOrder);

module.exports = routers;
