const main = require('./main')
const Head = require('./document/head.js')

module.exports = function Layout (props = {}) {
 
return `
<!DOCTYPE html>
<html lang="en">
    ${Head(props)}
<body class="font-sans">
    <div>
        ${main(props)}
    </div>
    <script src="_static/index.js" type="module"></script>
</body>
</html>
`;
}


       
