const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "prjtutore",
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/University", (req, res) => {
  const ville =
    req.query.ville != "all" ? "where ville = '" + req.query.ville + "'" : "";
  console.log(req);
  db.query("Select * from universite " + ville, (err, result) => {
    res.send({ res: result, msg: 0 });
  });
});

app.post("/Search", (req, res) => {
  console.log(req.body);
  const search = req.body.search;
  const Univ = req.body.univ;
  const city = req.body.city;
  const mode = req.body.mode;
  const Catg = req.body.Catg;
  const supL = req.body.supL;
  const supU = req.body.supU;
  const prL = req.body.prL;
  const prU = req.body.prU;
  console.log("/////////////// search : " + search);

  Univget =
    Univ == "all"
      ? ""
      : ', getDistance(latitude_loc,longitude_loc, "' + Univ + '") as distance';
  UnivHav = Univ == "all" ? "" : " HAVING distance < 1.5 ORDER BY distance";
  md = mode == "all" ? "" : " and mode = '" + mode + "' ";
  ct = Catg == "all" ? "" : " and type = '" + Catg + "' ";
  cit = city == "all" ? "" : " and ville = '" + city + "' ";
  sh =
    search == ""
      ? ""
      : " and ( titre like '%" +
        search +
        "%' or description like '%" +
        search +
        "%' )";

  md = mode != "all" ? " and mode = '" + mode + "' " : "";
  ct = Catg != "all" ? " and type = '" + Catg + "' " : "";

  sql2 =
    "SELECT * " +
    Univget +
    " ,getimage(id_loc) as image FROM location where 1 and ( prix >= ? and prix <= ? ) and ( superficie >= ? and superficie <= ? ) " +
    sh +
    md +
    ct +
    cit +
    UnivHav;
  console.log(sql2);
  db.query(sql2, [prL, prU, supL, supU], (err, result2) => {
    if (err) console.log(err);
    else res.send({ res: result2, msg: 0 });
  });
});

app.post("/deposer", (req, res) => {
  console.log(req.body);
  const nomE = req.body.nom;
  const prenomE = req.body.prenom;
  const telephoneE = req.body.telephone;
  const emailE = req.body.email;
  const periodeE = req.body.periode;

  db.query(
    "INSERT INTO reservation (nomE, prenomE, telephoneE, emailE, periodeE) VALUES (?,?,?,?,?)",
    [nomE, prenomE, telephoneE, emailE, periodeE],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/seemore", (req, res) => {
  console.log(req.body);
  const id_loc = req.body.logement;
  console.log(id_loc);

  db.query(
    "Select * from location where id_loc = ? ",
    [id_loc],
    (err, result) => {
      console.log(result);
      db.query(
        "Select * from loueur where id_user = ? ",
        [result[0].id_user],
        (err2, result2) => {
          db.query(
            "Select lien from images where id_loc = ? ",
            [id_loc],
            (err3, result3) => {
              res.send({
                details: result[0],
                loueur: result2[0],
                images: result3.length
                  ? result3
                  : [
                      {
                        lien: "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",
                      },
                    ],
                msg: 0,
              });
            }
          );
        }
      );
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
