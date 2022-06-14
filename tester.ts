import axios from 'axios';

for (let i = 0; i < 1000; i++) {
  axios.get('http://localhost:8080')
    .then(res => console.log(res.data))
    .catch(() => console.log('ERROR'));
}
