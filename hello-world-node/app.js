const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/goodbye', (req, res) => {
    res.send('Goodbye world!')
})

app.listen(PORT, () => {
    console.log(`hello-world-node listening on port ${PORT}`)
})