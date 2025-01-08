const express = require('express')
const app = express()
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const port = 8080

app.use(cors());
app.use(express.json());

let data = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/data", (req, res) => {
  if (data.length > 0) {
    res.status(200).send({
      data: data,
    });
  } else {
    res.status(204).send({
      data: [],
    });
  }
});
app.get("/data/:id", (req,res) =>{
  const {id} = req.params;

  const datas = data.findIndex((p)=> p.id === +id)

  if (datas !== undefined) {
    res.status(200).send({
     data: datas,
     message: "this is data!!!"
    })
  }else{
    res.status(404).send({
      message: "no have this data"
    })
  }
})
app.delete("/data/:id", (req,res) =>{
  const {id} = req.params;

  const index = data.findIndex((p)=> p.id === +id)

  if (index === -1) {
    res.status(404).send({
      message: "no have this data"
    })
  }else{
  const del = data.splice(index, 1);
  res.status(200).send({
    DelData: del,
    data: data,
    message: "deleted!!!"
  })
  }
})

app.post("/data", (req,res)=>{
 const {description, name} = req.body;

 const NewData = {
  id: uuidv4(),
  description,
  name,
 }

 data.push(NewData)

})

app.put("/data/:id", (req,res)=>{
  const { id } = req.params;
  const {description, name} = req.body;
 
  const index = data.findIndex((p) => p.id === +id);

  if (index !== -1) {
    const updatedData = {
      id: +id,
      name,
      description,    
    };
    data[index] = updatedData;

    res.status(200).send({
      message: "updated!",
      updatedData,
    });
  } else {
    res.status(404).send({ message: "not found" });
  }
 
 })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})