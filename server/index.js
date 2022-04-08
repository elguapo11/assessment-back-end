const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = 
          ["Money will come your way",
					 "You will meet someone who will change your life... Soon",
					 "Look in the past for inspiration",
           "A faithful friend is a strong defense",
           "A friend is a present you give yourself", ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

  

  
});


app.get("/api/chess", (req, res) => {
  const chess = 
          ["Develop your pieces",
					 "Watch for checks, captures, and attack",
					 "Look for pawn breaks",
           "Castling is important. Be wise when you do it",
           "Bishops love diagonals", ];

  // choose random chess Advice
  let randomIndex = Math.floor(Math.random() * chess.length);
  let randomChess = chess[randomIndex];

  res.status(200).send(randomChess);

})

app.get("/api/type", (req, res) => {
  const thanks = 
          ["Thank you",];

  res.status(200).send(thanks);

})

app.put("/api/submit", (req, res) => {
  const thanks = 
          ["Thank you for submitting",];

  res.status(200).send(thanks);

})



app.listen(4000, () => console.log("Server running on 4000"));


//was not able to get the put request to work? Kept getting 404 error, but don't see what's wrong with my code? 