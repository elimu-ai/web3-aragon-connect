# aragon-dao-webapp

Node.js webapp for displaying information about the elimu.ai Community DAO at https://mainnet.aragon.org/#elimuai

The information about the DAO will be fetched from this web server, and displayed in the [webapp](https://github.com/elimu-ai/webapp).

Examples of information that will be made available:
  - [Holders](https://mainnet.aragon.org/#/elimuai/0xee45d21cb426420257bd4a1d9513bcb499ff443a/) of the elimu.ai Community Token (ECT)
  - [Votes](https://mainnet.aragon.org/#/elimuai/0xe3aa64c5ecf9085459326abe66c83d9472e3444a/) created by and cast by the community's contributors
  - [Payments](https://mainnet.aragon.org/#/elimuai/0x25e71ca07476c2a65c289c7c6bd6910079e119e6/) made to active contributors

## Run application locally

Install [Node.js](https://nodejs.dev):

    brew install node

Add [Aragon Connect](https://connect.aragon.org/guides/getting-started):

    yarn add @aragon/connect

Run the application:
    
    node app.js

Access the application in your browser: [http://localhost:3000](http://localhost:3000)
