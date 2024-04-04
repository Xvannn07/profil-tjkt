const express = require("express")
const cors = require("cors")
const path = require("path")


const app = express()
app.set('view engine', 'ejs')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'assets')))


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "html/index.html"))
})

app.get("/data-guru", (req, res) => {
    res.sendFile(path.resolve(__dirname,"html/guru.html"))
})

app.get("/anggota-kelompok", (req, res) => {
    res.sendFile(path.resolve(__dirname,"html/anggota.html"))
})

app.get("/info", (req, res) => {
    res.sendFile(path.resolve(__dirname,"html/about.html"))
})

app.get("/informasi", (req, res) => {
    res.sendFile(path.resolve(__dirname,"html/informasi.html"))
})

app.use((req, res) => res.status(404).sendFile(path.resolve(__dirname,"html/404.html")));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Started on Port ' + (process.env.PORT || 3000));
});
