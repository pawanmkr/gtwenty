import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3333;

app.use(express.static('public'));

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log("running at 3333");
});