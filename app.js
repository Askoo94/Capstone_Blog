import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Enable body parse in the body

app.use(express.static('public')); // Enable the distribution of static file

const jsonData = () => fs.readFileSync('./db.json', 'utf8'); // Object that read the entire database (JSON file)
const data = JSON.parse(jsonData()) // Convert JSON -> JS Object

let year = new Date();

//console.log(data.blog[0]);

// To post data into the db
function postData(req, res) {

  data.blog.push({ 

    id: data.blog.length + 1,
    name: req.body["nom"],
    country: req.body["country"],
    city: req.body["city"],
    image: req.body["image"],
    story: req.body["histoire"]

  }); 

  fs.writeFile("db.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
  }); 

}

// To post data from the db
function deleteData(req, res) {

  let ok = 0;
  
  for(let i = 0; i < data.blog.length; i++) {

    if(data.blog[i].name == req.body["nom"] && data.blog[i].country == req.body["country"] && data.blog[i].city == req.body["city"]) {
      data.blog.splice(i, 1);
      ok = 1;
    }
    else if(ok == 1){
      data.blog[i].id = i-1;
    }
  }
}


// Get the main route of the website
app.get('/', (req, res) => {
  res.render("index.ejs", {
    blogData : data
  });
});


// Post data in blog
app.post("/submit", (req, res) => {

  postData(req, res);

  res.render("index.ejs", {
    blogData : data,
  });

});


// Delete data in blog
app.post("/delete", (req, res) => {

  deleteData(req, res);

  res.render("index.ejs", {
    blogData : data,
  });

});


// Listen app on port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});