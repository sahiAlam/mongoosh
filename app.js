const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Creating Schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be filled"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// Creating model(collection)
const Fruit = mongoose.model("Fruit", fruitSchema);

// Document
const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Preety solid as a fruit.",
});

const orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "Very testy..",
});
const mango = new Fruit({
  name: "Mango",
  rating: 9,
  review: "Very testy..",
});

// create 
Fruit.insertMany([fruit, orange, mango], (err) => {
  err ? console.log(err) : console.log("Data save successfully");
});

// read 
Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

// update
// Fruit.updateOne({_id: "63f0709a5e8c7ddbe4aef894"}, {name: "My fruit"}, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated data");
//     }
// });

// delete
// Fruit.deleteOne({rating: 8}, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Delete successfully..")
//     }
// })


// relationship
