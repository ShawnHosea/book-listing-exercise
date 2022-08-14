const arc = require('@architect/functions')
const fs = require('fs');
const axios = require('axios')
const xml2js = require('xml2js');
const parseString = require('xml2js').parseString;

  // When search term is input into frontend,term is sent to post-search function to pull data from api. 
  // Data is then converted from xml to json within function.
  // JSON is sent back to display on index

exports.handler = arc.http.async(search)

async function search(req) {
  // console.log(req.body.search)

  const apiUrl = `https://www.goodreads.com/search.xml?key=RDfV4oPehM6jNhxfNQzzQ&q=${req.body.search}`
  // const search = `https://goodreads-server-express--dotdash.repl.co/search/${term}`;


  await axios.get(apiUrl)
  .then(function (response) {
    // handle success 
    parseString(response.data, function (err, result) {
      let data = JSON.stringify(result)
      console.log(data)
    });
  })
   

return {
  statusCode: 200,
  headers: {
    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    'content-type': 'text/html; charset=utf8'
  },
  location: '/'
  }
}