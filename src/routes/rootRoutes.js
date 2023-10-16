import express from "express";
import resRoutes from "./resRoutes.js";
import userRoutes from "./userRoutes.js";
const rootRoute = express.Router();

rootRoute.use("/res", resRoutes);
rootRoute.use("/user", userRoutes);

export default rootRoute;
