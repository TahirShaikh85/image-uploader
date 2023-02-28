const express = require('express');
const path = require("path");
const app = express();
const hbs = require('express-handlebars');
const PORT = 8000;

app.use(express.json());

// connect MongoDB
require('./server/database/database')();

// serving static files
app.use(express.static(path.join(__dirname,"public")));

// setup view engine
app.set('view engine','hbs');
app.engine('hbs',hbs.engine({
    extname:'hbs',
    defaultview:'default',
    layoutsDir:path.join(__dirname,'views'),
    partialsDir:path.join(__dirname,'views/partials')
}))


app.use('/',require('./server/routes/router'));

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})