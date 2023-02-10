const express = require('express');
const { callShortCode } = require('../helper/shorten')
const bodyParser = require('body-parser')

const PORT = 3001;

const app = express()

app.use(bodyParser.json())

app.get("/shorten", async (req, res) => {
    try {
        const out = await callShortCode(req.query.shorturl)
        if (out.ok) {
            res.json({ message: out.result.short_link})
        } else {
            res.json({message: 'ERROR'})
    }} catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
