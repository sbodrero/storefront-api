import express from 'express';
import routes from "./routes";
import logger from "./utilities/logger";

const app = express();
const port = 3000;

app.use(logger);
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
})
