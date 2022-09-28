const A____ = require('axios')
const C____ = require('cheerio')

const url = 'https://scholar.google.com/citations?hl=en&user=a1jsnhUAAAAJ'

const GetData_ = async () => {
    let Data, _____$
    try {
        await A____
        .request({
            url: url,
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0"
            }
        })
        .then( ( { data } ) => {
            let _0000, __0000
            _____$ = C____.load(data)
            _____$(
                '#gsc_rsb_st'
            ).each((i, e) => {
                _0000 = {
                    "citations": _____$(e).find('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)').text() || null,
                    "h-index": _____$(e).find('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2)').text() || null,
                    "i10-index": _____$(e).find('tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2)').text()
                }
            })
            __0000 = _____$('#gsc_prf_in').text()
            Data = {
                "scholar":{
                    "nama": __0000,
                    "data": _0000
                }
            }
        })
    } catch (e) {
        Data = false
    } finally {
        if (Data) {
            return Data
        }
    }
}

module.exports = GetData_