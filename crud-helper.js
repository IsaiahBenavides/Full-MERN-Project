require('dotenv').config();
require('./config/database');
const User = require('./models/users')

let user, item, category, order;
let users, items, categories, orders;