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
      data.items.forEach((item, i) => {
        var list = document.createElement('ul');
        var li = document.createElement('li');
        var h3 = document.createElement('h3');
        var p = document.createElement('p');
        var newDate = new Date(item.pubDate);

        console.log(item);
        li.textContent = item.title;
        h3.textContent = item.contentSnippet;
        p.textContent = `${newDate.getFullYear()}`;
        if (i % 2 === 0) {
          list.classList = ['even'];
        } else if (i % 2 === 1) {
          list.classList = ['odd'];
        }
        list.appendChild(li);
        list.appendChild(h3);
        list.appendChild(p);
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
