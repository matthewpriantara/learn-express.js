const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser') //library agar bisa req dari body di luar
const db = require('./connection')
const { error } = require('node:console')
const response = require('./response')

app.use(bodyParser.json()) //menggunakan body parser di set mengambil tipe json

app.get("/", (req, res) => {
    response(200, "ini data", "ini message", res)
})

app.get("/mahasiswa", (req, res) => {
    response(200, "ini data mahasiswa", "ini message untuk mahasiswa", res)
})

app.get("/mahasiswa/:nim", (req, res) => {
    const nim = req.params.nim
    response(200, "ini data", "ini message", res)
})

app.post("/mahasiswa/post", (req, res) => {
    response(200, "ini data", "ini message", res)
})

app.put("/mahasiswa/put", (req, res) => {
    response(200, "ini data", "ini message", res)
})

app.delete("/mahasiswa/delete", (req, res) => {
    response(200, "ini data", "ini message", res)
})

app.listen(port, () => {
  console.log(`App running di port${port}`)
})
