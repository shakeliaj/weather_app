const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(path.join(__dirname, 'app'))) //serves the main html file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'app', 'index.html'))
})

app.listen(8080) //listens on port 8080
console.log('app is listening on port 8080')