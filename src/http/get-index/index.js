const arc = require('@architect/functions')
const axios = require('axios')

exports.handler = arc.http.async(index)


async function index(req) {

  const apiUrl = `https://www.goodreads.com/search.xml?key=RDfV4oPehM6jNhxfNQzzQ&q=Ender%27s+Game`
  
  let good = await axios.get(apiUrl)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })



  let body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Architect</title>
      <style>
    
      </style>
    </head>
    <body>
    <div>
      <!-- You may use this form for your search box -->
      <form action="${apiUrl}" method="post">
        <input />
        <button type="submit">Search</button>
      </form>
      
      <!-- You may use this container for your listing -->
      <div>
        
      </div>
    </div>
    </body>
    </html>
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