import express from "express";

const app = express();
app.set("view engine", "ejs");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, lab!");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// work in progress
