console.log("Chargement du serveur...");
require("dotenv").config();
const express = require("express");
const db = require("./config/db1");
const app = express();
app.get("/", (req, res) => {
  res.send("Application Express déployée avec succès");
});
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error("Erreur SQL :", err);
      return res.status(500).json({ error: "Erreur lors de la récupération des produits" });
    }
    res.json(results);
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
