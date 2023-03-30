import express from "express";
const app = express();

app.use(express.static("public"));
app.use(express.json());
import templateEngine from "./util/templateEngine.js";

const unitsArray = [
    {id:0, name:"marine", hitpoints: 200},
    {id:1, name:"alex", hitpoints: 300},
    {id:2, name:"Zergling", hitpoints: 35}
];

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Grind Engraved Wiki | Welcome",
});

const gridpage = templateEngine.readPage("./public/pages/gridpage/gridpage.html");
const gridpagePage = templateEngine.renderUnitPage(gridpage, {
    tabTitle: "gridpage test",
    unitDescription: "this is the unit desciroption from app.js, zerglings rock!"
});

const learningPage = templateEngine.readPage("./public/pages/learning/expresslearning/expresslearning.html");
const learningpageDigest = templateEngine.renderLearningPage(learningPage, {
    tabTitle: "Things I've Learned",
})

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/gridpage", (req, res) => {
    res.send(gridpagePage);
});

app.get("/learning", (req, res) => {
    res.send(learningpageDigest);
});

//3003 2023 2038 jeg vil lave api'en 
app.get("/api/units", (req, res) => {
    res.send(unitsArray);
});

app.post("/api/units", (req, res) => {
    unitsArray.push(req.body);
    res.send({Data: req.body});
})

app.get("/api/units/:id", (req, res) => {
    const foundUnit = unitsArray.find(unit => unit.id === Number(req.params.id));
    res.send({Data: foundUnit});
});

app.patch("/api/units/:id", (req, res) => {
    let foundUnit = unitsArray.find(unit => unit.id === Number(req.params.id));
    if (foundUnit === -1) {
            console.log("error")
    } 
    res.send({Data: foundUnit});
});

app.delete("/api/units/:id", (req, res) => {
    let foundUnit = unitsArray.find(unit => unit.id === Number(req.params.id));
    if (foundUnit === -1) {
           console.log("error")
    }
    res.send({Data: foundUnit});
})

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});