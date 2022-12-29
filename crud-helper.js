require('dotenv').config();
require('./config/database');
const User = require('./models/users')

let user, post;
let users, posts;