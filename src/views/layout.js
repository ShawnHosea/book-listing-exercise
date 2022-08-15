const main = require('./main')
const Head = require('./document/head.js')
const header = require('./header')

module.exports = function Layout (props = {}) {
 
return `
<!DOCTYPE html>
<html lang="en">
    ${Head(props)}
<body class="font-sans">
    <div>
        ${header(props)}
        ${main(props)}
    </div>
    <script src="_static/index.js" type="module"></script>
</body>
</html>
`;
}


       
