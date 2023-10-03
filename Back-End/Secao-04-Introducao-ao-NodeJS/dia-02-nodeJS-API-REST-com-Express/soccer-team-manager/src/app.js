const express = require('express');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');
const teamsRouter = require('./routes/teamsRouter');
const validateTeam = require('./middlewares/validateTeam');

app.use(express.json());
app.use(apiCredentials);
app.use('/teams', teamsRouter);

let nextId = 3;
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// listando todos os times da API
app.get('/teams', (req, res) => res.status(200).json({ teams }));

// listando apenas um time da API pelo seu respectivo ID
app.get('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

// adicionando novo time na API
app.post('/teams', (req, res) => {
  const newTeam = { id: nextId, ...req.body };
  teams.push(newTeam);
  nextId += 1;

  res.status(201).json({ team: newTeam });
});

// atualizando dados de um respectivo time da API
app.put('/teams/:id', validateTeam, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

// deletando um respectivo time da API
app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

module.exports = app;