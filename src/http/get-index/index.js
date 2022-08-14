const arc = require('@architect/functions')


exports.handler = arc.http.async(index)


async function index(req) {

  // When search term is input into frontend,term is sent to post-search function to pull data from api. 
  // Data is then converted from xml to json within function.
  // JSON is sent back to display on index

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
        <form action="/search" method="POST">
          <label for="search"><b>search: </b></label>
          <input type="text" placeholder="search">
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