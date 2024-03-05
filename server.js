// MJS 3.4.24 - From Act 14-28 mini project
// Found out from Andrew that it seems to be this file that is screwed up.  
// Incredibly, I seem to have copied the screw up from ...blog repo to ...blogs repo.
// What a (## mess. 
console.log("MJS Starting server.js");
// Added this back in at night. Was missing.
const path = require('path'); // 
const express = require('express');
const session = require('express-session');
// MJS 3.4.24 - Added next line so could do app.set (viewEngine, handlebars below. )
// Trying to avoid ISR 500 - No default engine was specified and no Extension was provided ..
// for both / and /login routes.
//  at new view
// This error is in the server output, as well as somewhere in the Console output.
// The call stack indicates this is being called via homeroutes.js
// Note this is called exphbs in other server files!
const handlebars = require('express-handlebars');
const routes = require('./controllers');
// Also missing this till night!
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
// The first line below is the correct line, but missing others. Also, maybe needs to go after app.use??
// app.set('view engine', 'handlebars');  // Does not work 3.4.24
// app.set('view engine', handlebars);  // Does not work 3.4.24

const PORT = process.env.PORT || 3001;
// Set up Handlebars.js engine with custom helpers - another missing line - ARGHHH.
// Note this is exphbs in other files. 
const hbs = handlebars.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Had the 2nd line here, but missing the first till night.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Yet another missing line added at night. ARGHHH.
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`MJS Blog Post server now listening on port ${PORT} ....... \n\n`));
});
