"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphqlHTTP = require("express-graphql");
var express = require("express");
var cors = require("cors");
var schema_1 = require("./schema");
var app = express();
app.use(cors());
app.use('/', graphqlHTTP({ schema: schema_1.schema, graphiql: true }));
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server started on port " + PORT); });
//# sourceMappingURL=app.js.map