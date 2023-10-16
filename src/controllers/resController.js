import sequelize from "../models/connect.js";
import initModels from "./../models/init-models.js";

let model = initModels(sequelize);

export const like = async (req, res) => {
  const { user_id, res_id } = req.body;
  const result = await model.like_res.create({
    user_id,
    res_id,
    date_like: new Date(),
  });
  res.json(result);
};

export const unLike = async (req, res) => {
  const { user_id, res_id } = req.body;
  const result = await model.like_res.destroy({ where: { user_id, res_id } });
  res.json({ deletedCount: result });
};

export const likeList = async (req, res) => {
  const { user_id, res_id } = req.query;
  const likes = await model.like_res.findAll({ where: { user_id, res_id } });
  res.json(likes);
};

export const rate = async (req, res) => {
  const { user_id, res_id, amount } = req.body;
  const result = await model.rate_res.create({
    user_id,
    res_id,
    amount,
    date_rate: new Date(),
  });
  res.json(result);
};

export const rateList = async (req, res) => {
  const { user_id, res_id } = req.query;
  const rates = await model.rate_res.findAll({ where: { user_id, res_id } });
  res.json(rates);
};
