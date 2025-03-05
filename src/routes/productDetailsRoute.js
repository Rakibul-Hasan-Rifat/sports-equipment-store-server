import express from "express";
import { client } from "../db/db.config.js";
import { ObjectId } from "mongodb";

const productDetailsRoute = express.Router();

productDetailsRoute
  .route("/products/:id")
  .all((req, res, next) => {
    next();
  })
  .get(async (req, res) => {
    const result = await client
      .db("sport-equipment-store")
      .collection("equipments")
      .findOne({_id: new ObjectId(req.params.id)})

      res.send(result)
    console.log("request from details route", req.params.id);
  });

export default productDetailsRoute;
