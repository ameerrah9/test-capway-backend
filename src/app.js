const feedDisplay = document.querySelector('#feed');
const linkDisplay = document.querySelector('#links');

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
      data.items.forEach((item) => {
        var list = document.createElement('ul');
        var li = document.createElement('li');
        li.textContent = item.title;
        list.appendChild(li);
        feedDisplay.appendChild(list);
      })
    );
}

feedsEndpoint.forEach(function (item) {
  let newButton = document.createElement('button');
  newButton.setAttribute('id', item);
  newButton.className += item;
  newButton.innerText += item;

  newButton.addEventListener('click', buttonClick);

  function buttonClick(e) {
    feedDisplay.innerHTML = '';
    getFeeds(e.target.className);
  }

  linkDisplay.appendChild(newButton);
});
