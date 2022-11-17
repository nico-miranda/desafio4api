const express = require("express")
const path = require("path")
const app = express()
const routes = require("./routes/index")
const PORT = 8010

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "/public")))
app.use("/api/products", routes)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server corriendo puerto: ${PORT} `);
})