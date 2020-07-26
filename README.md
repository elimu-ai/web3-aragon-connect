# aragon-dao-webapp

Node.js webapp (REST API) for accessing information about the elimu.ai Community DAO at https://mainnet.aragon.org/#elimuai

The information about the DAO will be fetched from this web server via JSON, and displayed in the [webapp](https://github.com/elimu-ai/webapp).

[![Aragon_DAO](https://user-images.githubusercontent.com/15718174/87666388-1e463f80-c79b-11ea-995d-ba9253cab40b.gif)](
  http://hin.elimu.ai/contributions/aragon-dao
)

Examples of information that will be made available:
  - [Donations](https://mainnet.aragon.org/#/elimuai/0x25e71ca07476c2a65c289c7c6bd6910079e119e6/) made to the DAO's Finance App
  - [Holders](https://mainnet.aragon.org/#/elimuai/0xee45d21cb426420257bd4a1d9513bcb499ff443a/) of the elimu.ai Community Token (ECT)
  - [Votes](https://mainnet.aragon.org/#/elimuai/0xe3aa64c5ecf9085459326abe66c83d9472e3444a/) created by and cast by the community's contributors
  - [Payments](https://mainnet.aragon.org/#/elimuai/0x25e71ca07476c2a65c289c7c6bd6910079e119e6/) made to community contributors

## Run application locally

Install [Node.js](https://nodejs.dev):

    brew install node

Add [Aragon Connect](https://connect.aragon.org/guides/getting-started):

    yarn add @aragon/connect
    yarn add @aragon/connect-finance
    yarn add @aragon/connect-thegraph-tokens
    yarn add @aragon/connect-thegraph-voting

Run the application:

    node app.js

Access the application in your browser: [http://localhost:3000](http://localhost:3000)

    /apps
    /finance-transactions
    /token-holders
    /votes

## Run application on CentOS

Install [Node.js](https://nodejs.dev): https://github.com/nodesource/distributions#installation-instructions-1

    curl -sL https://rpm.nodesource.com/setup_14.x | bash -
    yum install nodejs

Clone GitHub repository:

    cd ~/.elimu-ai
    git clone https://github.com/elimu-ai/aragon-dao-webapp.git
    cd aragon-dao-webapp/

Install [Yarn](https://yarnpkg.com/getting-started/install):

    npm install -g yarn

Add [Aragon Connect](https://connect.aragon.org/guides/getting-started):

    yarn add @aragon/connect
    yarn add @aragon/connect-finance
    yarn add @aragon/connect-thegraph-tokens
    yarn add @aragon/connect-thegraph-voting

Run the application:

    node app.js

## TEST vs PROD

In production, export an environment variable `NODE_ENV` before running the application:

    export NODE_ENV="production"
    node app.js

## Decentralized Autonomous Organization (DAO)

The [elimu.ai Community DAO](https://mainnet.aragon.org/#/elimuai) is empowered by [Aragon](https://aragon.org). Aragon gives internet communities the power to freely organize and collaborate without borders or intermediaries.

[
  <img width="320" alt="Powered by Aragon" src="https://wiki.aragon.org/design/artwork/Powered_By/SVG/Powered_By_White.svg">
](https://mainnet.aragon.org/#/elimuai)
