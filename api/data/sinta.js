const axios = require('axios')
const cheerio = require('cheerio')

async function getSinta(url) {
    return new Promise(async (resolve, reject) => {
        let Name, Data;
        await axios.request({
            url: url,
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0"
            }
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            $(".card-body > table").each((i, e) => {
                let getA = {
                    scopus: $(e).find('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)').text() || "0",
                    gscholar: $(e).find('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3)').text() || "0",
                    wos: $(e).find('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4)').text() || "0",
                }
                let getB = {
                    scopus: $(e).find('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2)').text() || "0",
                    gscholar: $(e).find('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3)').text() || "0",
                    wos: $(e).find('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(4)').text() || "0",
                }
                let getC = {
                    scopus: $(e).find('tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2)').text() || "0",
                    gscholar: $(e).find('tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(3)').text() || "0",
                    wos: $(e).find('tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(4)').text() || "0",
                }
                let getD = {
                    scopus: $(e).find('tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2)').text() || "0",
                    gscholar: $(e).find('tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(3)').text() || "0",
                    wos: $(e).find('tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(4)').text() || "0",
                }
                let getE = {
                    scopus: $(e).find('tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2)').text() || "0",
                    gscholar: $(e).find('tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(3)').text() || "0",
                    wos: $(e).find('tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(4)').text() || "0",
                }
                let getF = {
                    scopus: $(e).find('tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2)').text() || "0",
                    gscholar: $(e).find('tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3)').text() || "0",
                    wos: $(e).find('tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(4)').text() || "0",
                }
                Data = {
                    "article": getA,
                    "citation": getB,
                    "cited_document": getC,
                    "h-Index": getD,
                    "i10-index": getE,
                    "g-Index": getF,
                }
            })
            Name = $('h3 > a').text()
        }).catch(reject)
        resolve({
            "sinta": {
                "name": Name,
                "data": Data
            }
        })
    })
}

module.exports = getSinta