const express = require('express')
const app = express()
const PORT = process.env.PORT;
//app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('static'))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))
