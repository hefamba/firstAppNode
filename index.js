const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('New Request');
//   //   res.send('yo! we got your request!!');
//   res.send({ color: 'green', fruit: 'apple' });
// });
app.get('/', (req, res) => {
  res.send('WELCOME TO HOMEPAGE!!!!!!!!!');
});

app.get('/r/:subreddit', (req, res) => {
  console.log(req.params);
  res.send('this is a subreddit');
});

app.post('/cats', (req, res) => {
  res.send('this is different than get request!!!');
});

app.get('/cats', (req, res) => {
  res.send('CATS');
});

app.get('/dogs', (req, res) => {
  res.send('DOGS ARE HERE!');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`get req from: ${q}`);
});

app.get('*', (req, res) => {
  res.send('do not know of this path.');
});

app.listen(3000, () => {
  console.log('listening for request');
});
