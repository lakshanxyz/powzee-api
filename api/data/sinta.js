const _5________0_ = require('axios')
const __________________________________________________ = require('cheerio')

async function GetData() {
    return new Promise(async (res, rej) => {
        let Name, Data;
        await _5________0_.request(
        {
            url: "https://sinta.kemdikbud.go.id/authors/profile/5975782",
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0"
            }
        }
        )
                    .then(
                     (
                     {
                         data
                    }
                    ) => {
                        let ________________________0__________________________ = __________________________________________________.load(data)
                        // #card-body > table
                        ________________________0__________________________(".card-body > table")
                                    .each(
                                     (
                                         i,
                                      e
                                    ) => {
                                        let _A = {
                                            scopus: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)').text() || null,
                                            gscholar: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3)').text() || null,
                                            wos: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4)').text() || null
                                        }
                                        let _B = {
                                            scopus: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2)').text() || null,
                                            gscholar: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3)').text() || null,
                                            wos: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(4)').text() || null
                                        }
                                        let _C = {
                                            scopus: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2)').text() || null,
                                            gscholar: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(3)').text() || null,
                                            wos: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(4)').text() || null
                                        }
                                        let _D = {
                                            scopus: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2)').text() || null,
                                            gscholar: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(3)').text() || null,
                                            wos: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(4)').text() || null
                                        }
                                        let _E = {
                                            scopus: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2)').text() || null,
                                            gscholar: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(3)').text() || null,
                                            wos: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(4)').text() || null
                                        }
                                        let _F = {
                                            scopus: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2)').text(),
                                            gscholar: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(3)').text() || null,
                                            wos: ________________________0__________________________(e).find('tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(4)').text() || null
                                        }
                                        Data = {
                                            "article": _A,
                                            "citation": _B,
                                            "cited_document": _C,
                                            "h-Index": _D,
                                            "i10-index": _E,
                                            "g-Index": _F,
                                        }
                                    }
                                    )

                        Name = ________________________0__________________________('h3 > a').text()
                    }
                    ).catch(rej)
                    res({
                        "sinta": {
                            "name": Name,
                            "data": Data
                        }
                    })
    })
}

module.exports = GetData