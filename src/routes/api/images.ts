import express from 'express';

const Images = express.Router();

Images.get('/', (req, res) => {
  res.send("Images route")
})

export default Images;
