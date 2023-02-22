import express from 'express'

export const notes = express.Router();

notes.get('/', function(req, res) {
  res.send('Birds home page');
})
