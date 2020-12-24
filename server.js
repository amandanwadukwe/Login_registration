const express = require('express')
const path = require('path')

const app = express()
//app.use('/', express.static(path.join(__dirname, 'static')))
app.get('/login', function(req, res){res.sendFile(__dirname + '/index.html');});


app.listen(9999, () => {
    console.log('server is up at 9999')
})