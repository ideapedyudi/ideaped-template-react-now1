// env
require('dotenv').config()

const express = require('express')
const router = require('./src/routers')
const cors = require('cors');

const app = express()

// port yang digunakan untuk start
const port = 4000

// digunakan untuk menampilkan isi post data
app.use(express.json())
app.use(cors())

// get
app.use('/apiesi/v1/', router)


app.listen(port, () => console.log(`Running on port ${port}`));