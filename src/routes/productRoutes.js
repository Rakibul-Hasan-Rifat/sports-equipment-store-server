import { client } from "../db/db.config.js"
import express from 'express'

const productRouter = express.Router()

productRouter.route('/products/')
  .all((req, res, next) => {
//   runs for all HTTP verbs first
//   think of it as route specific middleware!
    next()
  })
  .get(async (req, res, next) => {
    const equipments = await client.db('sport-equipment-store').collection('equipments').find().limit(6).sort({rating: 1}).toArray()

    res.send(equipments)
  })
  .put((req, res, next) => {
  // just an example of maybe updating the user
    req.user.name = req.params.name
    // save user ... etc
    res.json(req.user)
  })
  .post(async (req, res, next) => {
    console.log(req.body);
    const result = await client
    .db('sport-equipment-store')
    .collection('equipments')
    .insertOne(req.body)
    res.send(result)
  })
  .delete((req, res, next) => {
    next(new Error('not implemented'))
  })

export default productRouter;