import express from 'express';
import router from "./src/routes/index.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(process.env.PORT || 8080, (err) => {
    if (err) console.log(`Error in server setup: ${err} - ${err.message}`)
    console.log(`Server listening on Port ${process.env.PORT || 8080}`);
});