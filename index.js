// 4.import express
const express = require('express');

// 5 instantiate express app
const server = express();

// // pull in projectRouter and actionRouter
const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');

// // 6 plug in express middleware
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

// 7 catch-all endpoint
server.get('*', handleDefault);
function handleDefault(req, res) {
  res.json('hello this is the sprint challenge');
}

// 8  listen on process.env.PORT || 8500
server.listen(process.env.PORT || 8500, () => {
  console.log('listening on jaynes server' + (process.env.PORT || 8500));
})