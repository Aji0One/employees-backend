require('dotenv').config();
const express= require("express");
const db= require("./db/connect");

//import employee router
const employeeRouter= require("./Routes/employees.route");

const app= express();

//db connection call
db();

app.get('/',(req,res) => {
    res.send("Welcome To Backend");
})

//middleware
app.use(express.json())

// CORS must be added
app.use('/api', employeeRouter);

const PORT= process.env.PORT || 3002;

app.listen(PORT,() => {
    console.log(`The App is running on ${PORT} port`);
})