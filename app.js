import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); //Enable body parse in the body

app.use(express.static('public')); // Enable the distribution of static file

const readDB = () => JSON.parse(fs.readFileSync('./db.json', 'utf8')); // Object that read the entire database (JSON file)

// Get the Name in Database (JSON file)
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
};

//console.log(getUserStoryById(1));

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