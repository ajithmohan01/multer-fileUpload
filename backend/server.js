const express = require("express");

const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/upload_files", upload.array("files"), function (req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
});



app.listen(5000, () => {
    console.log(`Server started...`);
});