const arc = require('@architect/functions')
const Layout = require('@architect/views/layout.js')


exports.handler = arc.http.async(index)

async function index(req) {

  // When search term is input into frontend,term is sent to post-search function to pull data from api. 
  // Data is then converted from xml to json within function.
  // JSON is sent back to display on index

  let body = Layout({  
    content: `
    <div class="">
      <div class="wrapper">
        <form action="/search" method="get">
          <input class="input" type="text" name="search" required>
          <button class="btn" type="submit">Search</button>
        </form>
      </div>
    </div>
  `})

return {
  statusCode: 200,
  headers: {
    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    'content-type': 'text/html; charset=utf8'
  },
  body,
  }
}