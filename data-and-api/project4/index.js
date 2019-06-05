const express = require("express");

const app = express();
app.listen(3000, () => console.log("Listening on port 3000"));

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api", (req, res) => {
  console.log(req.body);
  const data = req.body;
  res.json({
    status: "success",
    latitude: data.lat,
    longtitude: data.lng
  });
});
