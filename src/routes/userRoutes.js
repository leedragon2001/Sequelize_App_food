import express from "express";
import { order, orderList } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/order", order);
userRoutes.get("/orderList", orderList);

export default userRoutes;
