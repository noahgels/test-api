import * as express from 'express';

const app = express();
let count = 0;

app.get('/', (req, res) => {
  res.end('Hello from test API. You are Number ' + (++count));
})

app.listen(50000, () => {
  console.log('Server now running on port 51000... ');
});
