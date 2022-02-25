const express = require("express");
const app = express();

const PORT = 5500;

app.use(express.json());

app.get("/", (req, res) =>{
    res.status(200).send({message:"Tudo certo por aqui"});
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`));