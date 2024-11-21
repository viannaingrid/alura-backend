import express from "express";

const posts = [
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Paisagem deslumbrante",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Cachorro fofo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Citação inspiradora",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Comida deliciosa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Viagem incrível",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.arguments(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send();
})