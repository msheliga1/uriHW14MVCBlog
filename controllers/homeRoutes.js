// MJS 3.4.24 - From uri act 14-28 mp - controller/homeRoutes.js
// Routes - all GETS: Sample for testing: Get /xx, get /blank 
// get /,  /post/:id, /project/:id, /profile, /login

const router = require('express').Router();
// const { User } = require('../models');
const { Project, Post, User } = require('../models');

const withAuth = require('../utils/auth');
const tryMe = 'Hola';

router.get('/xx', async (req, res) => {
    try {
        console.log("Getting /xx route. ");
        console.info("MJS /xx route found.");
        res.status(200).json('MJS /xx route found!');
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Cant even get this to print out ... seems like we're not even getting here.
// Even tried getting rid of asynch since no await inside.
// Problem was in server.js (missing many lines including handlebars), 
// along with homeroutes not being inclueded in controllers/index.js
router.get('/blank', (req, res) => {
    console.info("MJS /blank route before try found.");
    try {
        console.log("Getting /blank route. ");
        console.info("MJS /blank route found.");
        res.status(200).json('MJS /blank route found!');
    } catch (err) {
      res.status(502).json(err);
    }
  });

// Cant get the numbers in the stack trace to change from 79:7 
const tryYou = 'Hola';

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    console.log("Getting / route.")
    // This seems to lead to an sequelizeEagerLoadingError. MJS 3.4
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],  // exclude users password!! for sure. 
        },
      ],
    }); 

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // const projects = [];  // see if this gets rid of error.

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});  // end get /post/:id

// Legacy get /project/:id route.
router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});  // end get /project/:id

// MJS 3.4.24 - profile (dashboard) should get only posts by logged in user.
// Use withAuth middleware to prevent access to route if not logged in
router.get('/profile', withAuth, async (req, res) => {
  try {
    console.log("Getting /profile (dashboard) "); 
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],   // get all posts for now. 
    });
    console.log("Got userData by findByPk ", req.session.user_id, " ", userData.name);

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profileOrig', withAuth, async (req, res) => {
  try {
    console.log("Getting /profile (dashboard) "); 
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });
    console.log("Got userData by findByPk ", req.session.user_id, " ", userData.name);

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Can't get this to console log either (same as / route). MJS 3.4.24
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  console.log("Get /login route found!");
  console.info("Get /login route found!");
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
