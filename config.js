import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  testVar: process.env.TEST_VAR,
};
