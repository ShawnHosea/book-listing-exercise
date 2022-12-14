const arc = require('@architect/functions')
const Layout = require('@architect/views/layout.js')
const axios = require('axios')
const { parseStringPromise } = require('xml2js')

exports.handler = arc.http.async(search)

async function search(req) {
// console.log(req)
  const apiUrl = `https://www.goodreads.com/search.xml?key=RDfV4oPehM6jNhxfNQzzQ&q=${req.query.search}`

  let xmlInput = await axios.get(apiUrl)
  .then(function (response) {
    return response.data
  })

  let convert = await parseStringPromise(xmlInput);
        convert = (JSON.parse(JSON.stringify(convert)));

  let bookData = convert.GoodreadsResponse.search[0].results[0].work

let body = Layout({  
  content:`
<div class="bookCase m3">
  <div class="grid-lg col-3 gap3">
    ${bookData.map(book =>` 
    <div class="mb0-lg
    mb4
    bg-p1
    p2
    radius1
    shadow-card
    object-contain
    transform-scale-hover
    transform-scale-active
    transition-transform
    relative">
      <img src="${book.best_book[0].image_url}"/>
      <h3 class="text0">${`${book.best_book[0].title}`.slice(0, 50) + `<small class="text-2"> [...]</small>`}</h3>
      <p>${book.best_book[0].author[0].name}</p>
    </div>
    ` ).join('')}
  </div>
</div>
`})

return {
  statusCode: 200,
  headers: {
    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    'content-type': 'text/html; charset=utf8'
    },
    body
  }
}