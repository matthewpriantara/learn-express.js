const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser') //library agar bisa req dari body di luar
const db = require('./connection')
const { error } = require('node:console')
const response = require('./response')

app.use(bodyParser.json()) //menggunakan body parser di set mengambil tipe json

// routes / URL / endpoint utama dengan method GET
app.get('/', (req, res) => {
    const sql = "SELECT * FROM mahasiswa"

    db.query(sql, (error, result) => {
        // ini nanti digunain untuk hasil data dari mysql nya
        response(200, result, "Data berhasil diambil dari mahasiswa", res)
    })
})

app.get('/find', (req, res) => {
    const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim}`
    db.query(sql, (error, result) => {
        response(200, result, "Data berhasil diambil dari mahasiswa", res)
    })
})

app.get('/mahasiswa', (req, res) => {
    const sql = `SELECT nama_lengkap,alamat FROM mahasiswa WHERE nim = ${req.query.nim}`
    db.query(sql, (error, result) => {
        response(200, result, "Data berhasil diambil dari mahasiswa", res)
    })
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside: req.body })
    res.send('Login Berhasil Kawan!')
})

app.put('/username', (req, res) => {
    console.log({ updateData: req.body })
    res.send('Update Success')
})

app.listen(port, () => {
  console.log(`App running di port${port}`)
})
