const express = require("express");
const router = express.Router();

const sinta = require('./data/sinta');
const scholar = require('./data/scholar');

router.get("/", async (req, res) => {
  res.send('scholar or sinta only')
});

router.get('/sinta', (req, res) => {
    sinta()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

router.get('/scholar', (req, res) => {
    scholar()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router;
