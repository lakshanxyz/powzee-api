const express = require("express");
const router = express.Router();

const getSinta = require('./data/sinta');
const getScholar = require('./data/scholar');

router.get("/", async (req, res) => {
  res.send('scholar or sinta only')
});

router.get("/sinta", (req, res) => {
    var url = req.query.url;
    if (!url || url == undefined)
    return res.send({
        status: false,
        message: "Data tidak tersedia!",
    });
    getSinta(url)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get("/scholar", (req, res) => {
    var url = req.query.url;
    if (!url || url == undefined)
    return res.send({
        status: false,
        message: "Data tidak tersedia!",
    });
    getScholar(url)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
