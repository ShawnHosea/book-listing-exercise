const arc = require('@architect/functions')

module.exports = function Head (props = {}) {
  
    return `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
    <title>Booklist</title>
    
    <!-- Styles -->
  
    <link rel="stylesheet" type="text/css" href="${arc.static('/styles/custom.css')}">
    <link rel="stylesheet" type="text/css" href="${arc.static('/styles/styles.css')}">
    </head>
  `
  }
  