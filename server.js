// required packages
const express = require('express');
const path = require('path');
const fs = require('fs');
// generates unique ids
const uuid = require('./helpers/uuid');
// access files from routes
const route = require('./routes/index')
const PORT = process.env.PORT || 3001;

const app = express();