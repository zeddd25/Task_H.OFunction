var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// FILTER
const isForceUsertrue = personnel.filter(a => a.isForceUser == true)
const isForceUserfalse = personnel.filter(a => a.isForceUser == false)
// MAP
const resultscoretrue = isForceUsertrue.map((score) => score.pilotingScore + score.shootingScore)
const resultscorefalse = isForceUserfalse.map((score) => score.pilotingScore + score.shootingScore) 
// REDUCE
const totalScoretrue = resultscoretrue.reduce((a, b) => a + b)
const totalScorefalse = resultscorefalse.reduce((a, b) => a + b)

let total = totalScoretrue + totalScorefalse 

personnel.forEach((p) => {

    document.write(`id : ${p.id} <br> name : ${p.name} <br> pilotingScore : ${p.pilotingScore} <br> shootingScore : ${p.shootingScore} <br> isForceUser : ${p.isForceUser} <br><br>`)
})

document.write(`Total All Score : ${total} <br> Total Score User Force False ${totalScorefalse} <br> Total Score User Force True ${totalScoretrue} `)
