![CapWay](readme-assets/capway.png)

Create a backend API that makes a HTTP/HTTPS request to a number of different News RSS feeds (or APIs) and returns the results to the frontend as JSON.

## Requirements
- Use Node.JS/Typescript with a framework of your choice as the http server
- Find at least 5 different news RSS feeds to consume for your backend
- Each news RSS feed should correspond to an endpoint in your backend
- Endpoints should be in the following format /api/rss/<news source name> (e.g. /api/rss/cnn)
- Backend should convert the RSS feed into JSON

## Bonus
- Setup MongoDB
- Create a collection for each rss feed. Have the name of the news source be the name of the collection
- Insert each response from the request that goes out to the rss feed into a mongodb collection


## How to submit
- Fork this repository on GitHub
- Occassionally commit changes using GIT while developing
- When you are ready to submit, open a pull request with this respository
