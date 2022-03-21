const express = require('express');
const axios = require('axios');
const rssParser = require('rss-parser');

let parser = new rssParser();

const feeds = {
  anchor: 'https://anchor.fm/s/5ebc899c/podcast/rss',
  megaphone: 'https://feeds.megaphone.fm/ESP3625084333',
  content:
    'https://www.omnycontent.com/d/playlist/9b7dacdf-a925-4f95-84dc-ac46003451ff/57416917-c904-42e5-838e-acb8002fdbac/dfbff0ac-ade9-41e9-870a-acb8002fdbb5/podcast.rss',
  boom: 'https://audioboom.com/channels/2399216.rss',
  atom: 'https://feeds.megaphone.fm/HSW3375978397',
};

const app = express();

app.get('/rss/:feed', async (req, res) => {
  const feedName = req.params.feed;

  parser.parseURL(feeds[feedName]).then((data) => {
    console.log(data, feedName);
    res.send(data);
  });
});

app.listen(3000, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
