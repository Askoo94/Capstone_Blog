import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

let year = new Date();

app.get('/', (req, res) => {
  res.render("index.ejs", {
    date : year.getFullYear()
  });
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    Prénom : req.body["nom"], 
    Pays : req.body["country"],
    Ville : req.body["city"],
    Image : req.body["image"],
    Histoire : req.body["histoire"],
    date : year.getFullYear()
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});