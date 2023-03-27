const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const data = require('./combined.json');
const cors = require('cors');

const {testArray, sampleObject, objectMaker} = require('./objects/objects.js');

let objArray = [sampleObject];

const PORT = process.env.PORT;
const dataArray = data.data;
app.use(cors());
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})

app.get('/', (req, res, next) => {
    res.send(dataArray);
})

const composerFinder = (composer) => {
    let resultsArray = [];
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].composer === composer) {
            resultsArray.push(dataArray[i])
        }
    }
    return resultsArray;
}

app.get('/composer/:composer', (req, res, next) => {
    let composer = req.params.composer;
    let result = composerFinder(composer);
    if (result.length === 0) {
        res.send('No results found')
    }
    res.send(result);
})

const levelFinder = (level) => {
    let resultsArray = [];
    for (let i = 0; i < dataArray.length; i ++) {
        if (dataArray[i].level === level) {
         resultsArray.push(dataArray[i]);   
        }
    }
    return resultsArray;
}

app.get('/level/:level', (req, res, next) => {
    let level = req.params.level;
    let result = levelFinder(level);
    if (result.length === 0) {
        res.send('No results found')
    }
    res.send(result)
})
/*
app.get('/', (req, res, next) => {
    res.send(testArray);
    console.log(req.method)
})

app.get('/name/:name', (req, res, next) => {
    res.send(testArray);
}).post('/name/:name', (req, res, next) => {
    objArray.push(objectMaker('tim', 30, "teacher"));
    console.log(objArray)
})


app.get('/post', (req, res, next) => {
    let name = req.query.name;
    let age = req.query.age;
    let occ = req.query.occupation;
    let newObj = objectMaker(name, age, occ);
    testArray.push(newObj);
    console.log(req.query);
    res.send(testArray);
})*/