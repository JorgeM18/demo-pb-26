const express = require('express');
const env = require('./env.config');
const MongoContainer = require('./models/containers/Mongodb.container');
const appRoutes = require('./routers/app.routers');

const PORT = env.PORT || 8080;

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// Routes
app.use(appRoutes);

app.listen(PORT, async () => {
  MongoContainer.connect()
  .then(() => {
    console.log('Connected to DB!');
    console.log('Server is up and running on port: ', +PORT);
  });
});