# __NewsMonk__

NewsMonk is a React based web app to fetch and read news from NewsAPI and have various categories to classify news to watch .

## Clone the repo
* Open your terminal.

* Change the current working directory to the location where you want to clone the repository.

* Run the following command to clone the repository:
```bash
git clone https://github.com/nmnarora600/NewsMonk.git
```
* cd to the NewsMonk folder

## Installing the Required Dependencies

After cloning the repo run run following commands to install required node modules.

* check in to frontend
```bash
cd NewsMonk/frontend
```
* install node modules for frontend
```bash
npm install
```
* check in backend
```bash
cd ../backend
```
* install node modules for backend
```bash
npm install
```

## Getting Api Key

To get news from this web app you must get an api key from __[NewsAPI](https://newsapi.org/)__

After getting your development or business api from NewsAPI and paste it in the .env file of frontend folder.

```bash
REACT_APP_NEWSAPI_KEY = "YOUR-API-KEY HERE"
```
make sure to not erase " " marks as api key must be sent as a string.

## How to Run

After following above steps just open the frontend folder in cmd, powershell etc.
```bash
cd Path/to/the/repo/NewsMonk/frontend
```
* Run the following command to start app

```bash
npm run both
```
* Open your Browser and go to the following link to see your app 

```bash
http://localhost:3000/
```

## Deployed Version
* Alternatively, you can also access the deployed version of this application at __[Link](https://www.icodewithcoffee.ml)__.

* Please note that the deployed version is primarily for demonstration purposes and may not have the complete functionality or the latest updates found in the source code.

## Disclaimer

* This application is for educational purposes only and should not be used for commercial purposes. The information, code, and data provided are meant as educational examples and should not be integrated into any commercial application.

* Commercial usage of this application or its contents is strictly not recommended. To use this application commercially, please purchase the business version of the API key from NewsAPI.

## Contributing

* Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

* Please make sure to update tests as appropriate.

