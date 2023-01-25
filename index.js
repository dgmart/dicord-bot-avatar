const express = require("express");
const { readFileSync, readdirSync } = require("fs");

const app = express();
app.use(express.static("public"))

app.get("/", (rq, rs) => {
    let html = readFileSync("index.tpl.html", "utf-8");
    let filesList = '';
    readdirSync("./public").forEach(file => {

    });
    html = html.replace("{{ lista }}", "aqui entra um monte de TD, ou algo similar");
    rs.end(html);
});

app.listen(8080, () => console.log("iniciado"));

