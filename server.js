const express = require("express");
const fallback = require("express-history-api-fallback");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));
app.use(fallback("index.html", { root: "dist" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
