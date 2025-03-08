import express from "express";
import { client } from "../db/db.config.js";

const productsByEmail = express.Router();

productsByEmail
  .route("/productsByUser")
  .all((req, res, next) => {
    next();
  })
  .get(async (req, res) => {
    const result = await client
      .db("sport-equipment-store")
      .collection("equipments")
      .find({ 'user.email': req.query?.email })
      .toArray();
    res.send(result);
  });

export default productsByEmail;
