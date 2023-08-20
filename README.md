### Prerequisites :

- Make sure you have the LTS version of [Node](https://nodejs.org/) installed.
- Install [git](https://git-scm.com/downloads) for version control.
- Install [MongoDB](https://www.mongodb.com/try/download/community) locally. ([Resource](https://www.mongodb.com/docs/manual/administration/install-community/))

### Installation :

- Step 1: Fork [this repo](https://github.com/SandeepKrSuman/medcare-server).
- Step 2: Clone your forked version of this repo locally. To clone, go to your command line / terminal, cd over to an appropriate directory and type in `git clone https://github.com/<your GitHub username>/medcare-server.git`.
- Step 3: `cd medcare-server`
- Step 4: While in the `medcare-server` directory, install the backend dependencies using `npm install` or `yarn`.
- Step 5: create a `.env` file in the root of the project with all your secret credentials inside it. Take a look at the `.env.example` file.
- Step 6: Run the mongodb server on port: `27017` using `mongod`.
- Step 7: While mongod is still running, open a new tab and again `cd` inside the `medcare-server` directory and run the backend server using `node app.js` or using [nodemon](https://www.npmjs.com/package/nodemon) - `nodemon app.js`. The backend server will start on `localhost:5000`.

#### Note :

- Don't forget to close all the running servers before closing the terminal/ command line.
- Close all the running servers by visiting to every tab of the terminal the server is running on.
- To close a running server use `ctrl+c`.
