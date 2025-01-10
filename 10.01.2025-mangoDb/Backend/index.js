const express = require('express')
const app = express()
const mongoose = require('mongoose');
const ProductRoutes = require("./routes/ProductRoutes")
const dotenv = require("dotenv")

dotenv.config()

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT


app.use(express.json());

app.use("/products", ProductRoutes )

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
    console.log('Connected!')
  });