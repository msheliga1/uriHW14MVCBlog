// MJS 3.4.24 - From uri act 14-28 mp - controller/homeRoutes.js
const router = require('express').Router();
// const { User } = require('../models');
const { Project, User } = require('../models');

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
        console.log("Getting / route. ");
        console.info("MJS / route found.");
        res.status(200).json('MJS / route found!');
    } catch (err) {
      res.status(502).json(err);
    }
  });

// Cant get the numbers in the stack trace to change from 79:7 
const tryYou = 'Hola';
const tryUs = "Us";

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

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
