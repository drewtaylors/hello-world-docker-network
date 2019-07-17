const express = require('express')
const app = express()
const PORT = 8081

const axios = require('axios')

app.get('/', (req, res) => {
    res.send('Hello space!')
})

app.get('/goodbye', (req, res) => {
    res.send('Goodbye space!')
})

app.get('/world', (req, res) => {
    axios.get('http://world-server:8080/')
        .then((response) => {
            res.send(`The world says hi! "${response.data}"`)
        })
})

app.listen(PORT, () => {
    console.log(`hello-space-node running on port ${PORT}`)
})