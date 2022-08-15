const arc = require('@architect/functions')
const fs = require('fs');
const axios = require('axios')
const { parseStringPromise } = require('xml2js')

// use promise to get data out of parse function
// create layout book cards from json.
// ?? figure out how to fix location redirect so that it goes back to index

exports.handler = arc.http.async(search)

async function search(req) {
  // console.log(req)

  const apiUrl = `https://www.goodreads.com/search.xml?key=RDfV4oPehM6jNhxfNQzzQ&q=${req.body.search}`

  let xmlInput = await axios.get(apiUrl)
  .then(function (response) {
    return response.data
  })

  let convert = await parseStringPromise(xmlInput);
        convert = (JSON.parse(JSON.stringify(convert)));

  // let convert = await parseStringPromise(xmlInput);
  //       convert = ((JSON.stringify(convert)));

  let bookData = convert.GoodreadsResponse.search[0].results[0].work

  let books = bookData.map(book => ({
    book:book, id:book.id[0]
  }))

  console.log(books)
  // console.log(convert.GoodreadsResponse.search[0].results[0].work)

  let averageRating = convert.GoodreadsResponse.search[0].results[0].work[0].average_rating

let body = `
<div>
  <p>${books}</p>
</div>
`

return {
  statusCode: 200,
  headers: {
    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    'content-type': 'text/html; charset=utf8'
    },
    body
  }
}