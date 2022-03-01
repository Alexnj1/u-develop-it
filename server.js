const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRoutes);

// Response for any request not supported
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
