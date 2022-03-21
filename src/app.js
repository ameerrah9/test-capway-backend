const feedDisplay = document.querySelector('#feed');

const feedsEndpoint = ['anchor', 'megaphone', 'content', 'boom', 'atom'];

function getFeeds(feed) {
  const url = `http://localhost:8080/api/rss/${feed}`;
  var headers = {};

  fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: headers,
  })
    .then((res) => res.json())
    .then((data) =>
      console.log(
        data.items.forEach((item) => {
          var list = document.createElement('ul');
          var li = document.createElement('li');
          li.textContent = item.title;
          list.appendChild(li);
          feedDisplay.appendChild(list);
        })
      )
    );
}

getFeeds('megaphone');
