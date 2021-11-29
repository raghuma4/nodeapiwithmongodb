const mongoose = require('mongoose');
const express = require('express');
const moviesRoute = require('./routes/movies');
const app = express();

app.use(express.json());

app.use('/movies', moviesRoute);


console.log("Hello World!!!");

const uri = "mongodb+srv://raghuma:Raghuma123@cluster0.8uuy9.mongodb.net/EmployeesDB?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});