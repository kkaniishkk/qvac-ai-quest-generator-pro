
const express=require('express');
const path=require('path');
const app=express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

const quests={
Fantasy:["Recover the Dragon Crown","Defeat the Shadow Mage","Explore the Lost Temple"],
Cyberpunk:["Hack Neon Tower","Steal Quantum Data","Escape MegaCorp Agents"],
Space:["Rescue a stranded crew","Map a new galaxy","Investigate alien ruins"]
};

app.post('/quest',(req,res)=>{
 const world=req.body.world||'Fantasy';
 const q=quests[world]||quests.Fantasy;
 const quest=q[Math.floor(Math.random()*q.length)];
 res.json({
  quest,
  xp:Math.floor(Math.random()*500)+100,
  gold:Math.floor(Math.random()*1000)+200,
  npc:"Elder Arin",
  choices:["Fight","Negotiate","Sneak"]
 });
});

app.listen(3000,()=>console.log("Quest Generator Pro running at http://localhost:3000"));
