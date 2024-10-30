const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    res.send({ firstname: 'Rahul Jha', age: 23 })
})

app.post('/user', (req, res) => {
    console.log('Data Successfully sumbitted on Database!')
    res.send('Data saved successfully!')
})

app.delete('/user', (req, res) => {
    console.log('User deleted successfully!')
    res.send('User deleted successfully!')
})

app.listen(3000, () => {
    console.log('Server is running on 3000 PORT...')
})