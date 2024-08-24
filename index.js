const express = require('express');
const  app = express();
const router = require("./routers/api-auth");
const connectDb = require("./utiles/db");
const cors = require('cors');

const corsOptions = {
    origin: "http://localhost:5175",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credential : true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", router);


connectDb().then(()=>{
const PORT = process.env.PORT;
app.listen(PORT , () => {
    console.log("the server is running");
})
})
