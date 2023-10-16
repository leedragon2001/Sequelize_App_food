import express from "express";
import {
  like,
  likeList,
  rate,
  rateList,
  unLike,
} from "../controllers/resController.js";

const resRoutes = express.Router();

resRoutes.get("/like", like);
resRoutes.get("/unlike", unLike);
resRoutes.get("/likeList", likeList);

resRoutes.get("/rate", rate);
resRoutes.get("/rateList", rateList);
export default resRoutes;
