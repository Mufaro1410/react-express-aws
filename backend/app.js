import express from 'express';

const app = express()

app.get('/api', (req, res) => {
    res.send("Hello Backend")
})

app.listen('3000')