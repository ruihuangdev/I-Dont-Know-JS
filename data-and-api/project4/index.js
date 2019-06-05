const express = require("express");
const app = express();

app.listen(3000, () => console.log("Listening on port 3000"));

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.post("/api", (req, res) => {
  const data = req.body;
  res.json({
    status: "success",
    latitude: data.lat,
    longtitude: data.lng
  });
});
