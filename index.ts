import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.end('Hello from test API');
})

app.listen(51000, () => {
  console.log('Server now running on port 51000... ');
});
