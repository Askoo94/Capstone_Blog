import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Enable body parse in the body

app.use(express.static('public')); // Enable the distribution of static file

const jsonData = () => fs.readFileSync('./db.json', 'utf8'); // Object that read the entire database (JSON file)
const data = JSON.parse(jsonData()) // Convert JSON -> JS Object

let year = new Date();

//console.log(data.blog.length)

//console.log(data.blog)

// Get the Name in Database (JSON file)
/*
const getUserNameById = (id) => {
  const db = readDB(); // db est un objet contenant { users: [...] }
  const blog = db.blog.find(blog => blog.id === id);
  return blog ? blog.name : "Utilisateur non trouvé";
};

// Get the Countryin Database (JSON file)
const getUserCountryById = (id) => {
  const db = readDB(); // db est un objet contenant { users: [...] }
  const blog = db.blog.find(blog => blog.id === id);
  return blog ? blog.country : "Utilisateur non trouvé";
};

// Get the City in Database (JSON file)
const getUserCityById = (id) => {
  const db = readDB(); // db est un objet contenant { users: [...] }
  const blog = db.blog.find(blog => blog.id === id);
  return blog ? blog.city : "Utilisateur non trouvé";
};

// Get the Image in Database (JSON file)
const getUserImageById = (id) => {
  const db = readDB(); // db est un objet contenant { users: [...] }
  const blog = db.blog.find(blog => blog.id === id);
  return blog ? blog.image: "Utilisateur non trouvé";
};

// Get the Story in Database (JSON file)
const getUserStoryById = (id) => {
  const db = readDB(); // db est un objet contenant { users: [...] }
  const blog = db.blog.find(blog => blog.id === id);
  return blog ? blog.story : "Utilisateur non trouvé";
}; */

//console.log(getUserStoryById(1));


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
function deleteData() {
  
}

app.get('/', (req, res) => {
  res.render("index.ejs", {
    blogData : data
  });
});

app.post("/submit", (req, res) => {

  postData(req, res);

  res.render("index.ejs", {
    blogData : data,
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});