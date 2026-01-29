const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Log when file loads
console.log("🚀 Starting Express server...");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is RUNNING at http://localhost:${PORT}`);
});
