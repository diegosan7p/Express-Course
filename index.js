const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members')


const app = express();


// Init middlewate
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));


app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
