const express = require('express');
const app = express();


app.use('/', (req, res) => {
    res.send('Hello I am your apis')
})
app.use('/user', (req, res) => {
    res.send('Hello I am your user')
})


app.listen(3000, () => {
    console.log('Your app is running on PORT 3000..')
})