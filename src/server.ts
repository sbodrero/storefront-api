import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import routes from "./routes";
import logger from "./utilities/logger";
import products_routes from "./handlers/products";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(logger);
app.use('/api', routes);

app.get('/', function(req: Request, res: Response) {
  res.send('home');
});

products_routes(app);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});

