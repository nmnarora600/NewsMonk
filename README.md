# __NewsMonk__

NewsMonk is a React based web app to fetch and read news from NewsAPI and have various categories to classify news to watch .

## Installation

To install libraries you just need to clone the repo and enter npm install to install required node modules.

```bash
npm install
```

## Getting Api Key

To get news from this web app you must get an api key from __[Link](https://newsapi.org/ "NewsAPI's Homepage")__
and create a __.env.local__ file at outermost of folder where package.json exists.

Inside .env.local enter your api key in following format:

```bash
REACT_APP_NEWSAPI_KEY = "YOUR-API-KEY HERE"
```
make sure to not erase " " marks as api key must be sent as a string.


## How to Run
After following above steps just open the folder in cmd, powershell etc and run the given command
```bash
npm start
```
It will run the app on port 3000 of your localhost.

## Warning

Only development version of this NewsAPI is free to use thus, you can't run it on network or Deploy it.

To do so you'll have to buy the Business or Advanced version of key.

.env.local is a local file and contains local values thus not preferred for network usage.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

