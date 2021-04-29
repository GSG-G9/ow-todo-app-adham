const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose')
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

const dbURI = 'mongodb+srv://adham:test123@cluster0.ejsx4.mongodb.net/Todo?retryWrites=true&w=majority';

const port = '9080';

app.use(cors());


app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true } )
  .then(_ => console.log('Connected toDB'))
  .then(app.listen(port, () => console.log(`Server is live in http://localhost:${port}`)))
  .catch(error => console.log(error));

