const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
var title = "About Us";

app.get("/login", function (req, res) {
    res.render("login", { title: "Login" });
});

app.get("/about-us", function (req, res) {
    res.render("about-us", { title: "About Us", menuId: "aboutUs" });
});

app.get("/nurse-list", function (req, res) {
    res.render("nurse-list", { title: "Nurse List", menuId: "nurseList" });
});

app.get("/health-tips", function (req, res) {
    res.render("health-tips", { title: "Health Tips", menuId: "healthTips" });
});

app.get("/hospital-list", function (req, res) {
    res.render("hospital-list", {
        title: "Hospital List",
        menuId: "hospitaList",
    });
});

app.get("/terms", function (req, res) {
    res.render("terms", { title: "Terms", menuId: "terms" });
});

app.get("/ambulance-list", function (req, res) {
    res.render("ambulance-list", {
        title: "Ambulance List",
        menuId: "ambulanceList",
    });
});

app.get("/medical-equipment", function (req, res) {
    res.render("medical-equipment", {
        title: "Mediacal Equipment",
        menuId: "medicalEquipment",
    });
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
