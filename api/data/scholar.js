const axios = require('axios')
const cheerio = require('cheerio')

async function getScholar(url) {
    return new Promise(async (resolve, reject) => {
        let Name, Data
        await axios.request({
            url: url,
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0"
            }
        }).then( ( { data } ) => {
            let $ = cheerio.load(data)
            $('#gsc_rsb_st').each((i, e) => {
                Data = {
                    "citations": $(e).find('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)').text() || "0",
                    "h-index": $(e).find('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2)').text() || "0",
                    "i10-index": $(e).find('tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2)').text() || "0",
                }
            })
            Name = $('#gsc_prf_in').text()
            resolve({
                "scholar":{
                    "name": Name,
                    "data": Data,
                }
            })
        }).catch(reject)
    })
}

module.exports = getScholar