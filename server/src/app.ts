import graphqlHTTP = require('express-graphql');
import express = require('express');
import cors = require('cors');

import { schema } from './schema';

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
