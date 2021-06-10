const express = require('express');

require('dotenv').config();

const app = express();

app.get('/panda', (req, res) => {
    res.send('<h1>panda</h1>')
})

const PORT = process.env.PORT || 8005;

app.listen(PORT, () => {
    console.log(`--> Server ready at http://localhost:${PORT}`)
})
