import sequelize from "../models/connect.js";
import initModels from "./../models/init-models.js";

let model = initModels(sequelize);

export const order = async (req, res) => {
  const { user_id, food_id, amount, code, arr_sub_id } = req.body;
  const result = await model.orders.create({
    user_id,
    food_id,
    amount,
    code,
    arr_sub_id,
  });
  res.json(result);
};

export const orderList = async (req, res) => {
  const { user_id } = req.query;
  const orders = await model.orders.findAll({ where: { user_id } });
  res.json(orders);
};
