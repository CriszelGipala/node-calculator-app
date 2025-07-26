import express from 'express';
import { calculator } from './calculator.js';

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/add', (req, res) => {
    res.send(calculator.add(parseInt(req.query.addendOne), parseInt(req.query.addendTwo)));
})

app.get('/subtract', (req, res) => {
    res.send(calculator.subtract(parseInt(req.query.subtractendOne), parseInt(req.query.subtractendTwo)));
})

app.get('/multiply', (req, res) => {
    res.send(calculator.multiply(parseInt(req.query.multiplyendOne), parseInt(req.query.multiplyendTwo)));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// const port = process.env.PORT || 3000;

