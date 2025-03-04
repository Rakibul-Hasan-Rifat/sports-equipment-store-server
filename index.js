import express from "express";
import { client } from "./src/db/db.config.js";
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 2345

app.get('/', (req, res) => {
    console.log('the server is running!!');
    res.send('The app is mine.')
})

app.listen(port, async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        console.log(`The app is runnning at http://localhost:${port}`);
      }catch (error) {
        console.log('some went wrong, really wrong!!!', error);
    }
})