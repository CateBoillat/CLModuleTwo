let express = require('express');
let app = express();

let dogs = {
    "data": [
        {
            name: "mango",
            breed: "corgi",
            features: "squishy"
        },
        {
            name: "macaroni",
            breed: "pomeranian",
            features: "tiny"
        },
        {
            name: "mochi",
            breed: "shiba inu",
            features: "untouchable"
        }
    ]
}

//define the route
app.get('/', (request, response) => {
    response.send("Hello, my name is Cate!");
})

//another route
app.get('/about', (request, response) => {
    response.send("I'm happy, free, confused, and lonely at the same time.");
})

app.get('/pets', (request, response) => {
    response.send("I shouldn't have a favourite but Mango is my favourite.");
})

//routing a website (HTML)
app.use('/mango', express.static("public"));

//j.son
app.get('/dogs', (req, res) => {
    res.json(dogs);
})

//request parameter
app.get('/dogs/:dog', (req, res) => {
    console.log(req.params.dog);
    let user_dog = req.params.dog;
    let user_obj;
    for (let i = 0; i < dogs.data.length; i++) {
        if (user_dog == dogs.data[i].name) {
            user_obj = dogs.data[i];
        }
    }
    console.log(user_obj);
    if (user_obj) {
        res.json(user_obj);
    } else {
        res.json({ status: "info not available" });
    }
})

//tell the server to run at port 3000
app.listen(3000, () => {
    console.log("app is listening at localhost:3000");
})