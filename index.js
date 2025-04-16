const fs = require("fs");
fs.mkdirSync("dist");
fs.writeFileSync(
  "dist/index.html",
  `
<html>
  <body>
    <h1>Have a good day!</h1>
    <p>hello there!</p>
  </body>
</html>
`
);
