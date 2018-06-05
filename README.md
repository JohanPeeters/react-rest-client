This project supports the I T.A.K.E. 2018 workshop on REST Identity and Access Management. It illustrates 3 different API access control strategies on a React client:
* API keys
* OAuth 2.0 Resource Owner Password Credentials grant
* OpenID Connect Implicit Flow

The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and can be extended as such.

The client has only been tested with an Auth0 authorization server. Given that it uses an Auth0 proprietary library for the OpenID Connect Implicit Flow, it is unlikely to work as intended with other authorization servers.

## Installing

Prerequisites:
* Node.js
* git

```
git clone git@github.com:JohanPeeters/react-rest-client.git
cd react-rest-client
npm install
```

## Running the application

In order to run the project, you must point it to a valid authorization server and backend. Change the `.env` file to do so. Values supplied should work for now, but you are encouraged to experiment with an authorization server under your own control and supply your own API.

In the project directory, you can run:

```sh
npm start
```

This runs the app in development mode.
It can be viewed in the browser at [http://localhost:3000](http://localhost:3000).

## Folder Structure

The project has the following structure:

```
react-rest-client/
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    Friends.js
    index.css
    index.js
    News.js
    registerServiceWorker.js
    ResourceUse.js
  .env
  .gitignore
  README.md
  package.json
  README.md
```

## To do

The project focuses on understanding authentication and authorization from the client's perspective. In the interest of simplicity, some essential feature and best practices are omitted.

### Error handling

Remote calls may fail, yet this project does not provide any error handling.

### SSO

The app requires an interaction with the authorization server for each call to the backend. End users expect to only have to sign in once.

### Separate URL for callback

The usual practice for parsing authentication and authorization results returned by the authorization server is to route to a dedicated React component for parsing the results on a separate URL. However, this project avoids the complexity of a React router by attempting to parse authN/Z results regardless of whether a redirect took place. This is somewhat inelegant and probably consumes resources unnecessarily.
