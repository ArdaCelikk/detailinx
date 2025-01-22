const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// React uygulamasının build dizinini statik dosya olarak sun
app.use(express.static(path.join(__dirname, "build")));

// Herhangi bir istek geldiğinde React uygulamasını döndür
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Hataları dosyaya yaz
process.on("uncaughtException", (err) => {
  const errorMessage = `[${new Date().toISOString()}] Uncaught Exception: ${err.stack}\n`;
  fs.appendFileSync(path.join(__dirname, "error.log"), errorMessage);
  console.error("Uncaught Exception:", err);
  process.exit(1); // İsteğe bağlı
});

process.on("unhandledRejection", (reason, promise) => {
  const errorMessage = `[${new Date().toISOString()}] Unhandled Rejection at ${promise}: ${reason}\n`;
  fs.appendFileSync(path.join(__dirname, "error.log"), errorMessage);
  console.error("Unhandled Rejection:", reason);
});

// Hata yakalama middleware'i
app.use((err, req, res, next) => {
  const errorMessage = `[${new Date().toISOString()}] Error in ${req.method} ${req.url}: ${err.stack}\n`;
  fs.appendFileSync(path.join(__dirname, "error.log"), errorMessage);
  console.error("Error:", err);
  res.status(500).send("Something went wrong!");
});

// Sunucuyu çalıştır
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

