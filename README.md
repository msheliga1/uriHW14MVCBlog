# uriHW14MVCBlog  
uri bootcamp HW 14 Model-View-Controller Sequelize Mustache Blog Posts MJS 3.5.24  
Michael Sheliga - This repo is for the University of Richmond (URI) coding bootcamp.  
Starter Code from: No started code for this project.  

## Link to Repo, Screenshot(s) and/or Video(s)  
Link to GitHub Repo that works best: https://github.com/msheliga1/uriHW14MVCBlog   
Some routes actually work in the this repo, but none have updated links (aka still using Act 14-28 data).  
But there were many, many failures as well....    
A Try at copying entire other repo (to start with) that also failed: https://github.com/msheliga1/uriHW14MVCBlogs (note the s at the end).   
And a 3rd try: https://github.com/msheliga1/uriHW14MVCBlogPost.  I think this one wouldn't even upload correctly.     
Heroku Page: https://dry-ravine-91710-0747d4829490.herokuapp.com/   

Link to Video on Google Drive:  xxxxxxxxxx  
<!---  Link to deployed github.io site. https://msheliga1.github.io/uriHW9NodeReadmeGen --->  
<!-- Link to Video on GitHub [Link](./examples/hw10LogoGenSheliga.webm)   Note that this video may be too large to play in  GitHub, so you will need to download and play from your computer. WindowsMediaPlayer worked for me.  -->

[Link to Acceptance Criteria ](#acceptance-criteria)   

## Project Goals     
Use node, SQL and sequalize to create a back-end for an e-commerce site.  

========================================================   
## Technical Project Details    
========================================================    
## Github:   
    Create Repo (github, repositories => New)   
        - Dont Make this a shared repo.  
    Clone the entire starter repo  
        -- Create a new, totally blank repo in GitHub  
        -- Clone the starter repo (under the hwXX directory) to your local machine  
        -- Set the remote path: git remote add <ori> <HTTPS path to remove>   
            -- Be 100% sure NOT to use the SSH link. Use the HTTPS link!  
        -- Push the local repo to gitHub: git push ori main   
    OR ... Copy directories and sample files from prior project (or create from scratch).  
        -- No starter code. No need for copying one file at a time via command line.  
        -- Alternate: Go to Demo (root) folder, download zip, moving to local repo, unzip - likely fastest method.     
        -- Took a long time to figure out how to clone an entire repo!
    OR ... create HTML, Node, Develop, CSS and javascript, etc. from scratch, and copy sample files ... worked well.
        Branches (Optional for single programmer projects)  
        - Could do work in branches. (new branch inside gitHub)    
        - All branch names will begin with the initials of the main person working on the branch.  
        - Must update local repo after adding a branch  
        - Switch to branch: From cmd line git switch <branchname>   
        - Once changes committed, git push origin <branchname>  
            - for pushing to remote test branch: git push origin local_branch:remote_branch  
        - Issue a pull request in gitHub.  
        - Click "Pull Requests" in top menu bar (3rd from left).  
        - Click "review Required" in small font below pull request name.  
        - You may approve your own request.  

    Create a nice long READ.md file!!  (Modify prior projects.)   
    NPM: Do "npm init --y" BEFORE "npm install" to avoide ENOENT err.
         Do "npm install inquirer@8.2.4" (with old version) to avoid require error.
         Do "npm install mySQL2", etc. 
    Commit and push files back to gitHub/branch. (For multi-programming: Issue pull request, approve, merge).  
    Deploy code  
        - On gitHub (Settings...CodeAndAnimation->Pages on left, GitHub Pages->Branch->main, save)  
            Deployed code name always msheliga1/github.io/RepoName !!  
        - OR Deploy to Heroku. See https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql
    Test: Verify it Works
        - Jest one possibility
        - Use Insomnia (or Postman) to test all API routes.   
    Insert Screencastify (Chrome) Video and/or Screenshot X2 of deployment into readme file. 
  
## Tools and Technologies Used   
    Github - Branches not needed, but could use.  
        - GitIgnore to keep NPM libraries out of gitHub repo.  
    NPM - Node Package Manager  (package.json)
        fs - fileSystem    
        inquirer - Used for prompts (text, list, checkboxes, editor, etc.)   
        dotenv - for secure db username-password  
        bcrypt - also for secure password  
        mysql2 - dont forget the 2  
        express-session - log in "session" (cookie)
        express-session-sequelize - Connects session and express
        express - ORM  
        sequelize - avoid rewriting common SQL queries
        express-handlebars - for the front end
    mySQL - Install is from the DEVIL!  (Windows 10)
    SQL - Standard Query Language 
    Insomnia - Used for testing routes
    Agile - Try to assign a little work at a time.   

## Acceptance Criteria   
-----------------------   
SQL DB with Users, BlogPosts and Comments  

Express.js API - add my db name, username, and password to environment variables
Enter schema and seed commands
    - mysql login, source db\schema.sql
    - npm run seed OR node seeds\index.js (from Develop dir using cmd tool)
Connect to a database using Sequelize  

Invoke  Sequelize models are synced to the MySQL database
Insomnia Core API GET routes for all categories, products, or tags - data displayed in a formatted JSON
Insomnia Core API GET by ID routes for one category, product, or tag - data displayed in a formatted JSON
Insomnia Core API POST, PUT, and DELETE routes - successfully create, update, and delete db data the application => server is started and the

Visit the site: taken to homepage: includes blog posts; nav links for homepage, dashboard and log in
When I click on XXXx => taken to YYY
Homepage option => homepage
Other links in the navbar: Prompted to either sign up or sign in
Choose to sign up => prompted to create username - password
Sign-up button => user credentials are saved and I am logged into the site
Sign in => prompted to enter my username and password
WHEN I am signed in THEN I see navigation links for the homepage, the dashboard, and option to log out
Homepage nav link => homepage and with existing blog posts = include post title and date created )(name?)
Existing blog post => post title, contents, creator’s username, and date created and option to leave a comment
  Save comment => comment, creator and data saved and post updated
Dashboard (my posts) nav link => dashboard with my blog posts and option to add a new blog post
  Add new post => prompted to enter both a title and contents for my blog post
  Create new post => title and contents saved - taken back to an updated dashboard with my new blog post
  An existing dashboard posts => delete or update my post and taken back to an updated dashboard
Logout navbar option => signed out of the site
Idle for more than a set time => THEN cam view posts and comments but need to log in before add, update, or delete posts

Tables  - All have:  id Integer     NOT null    primary key    auto increment
-------------  
User  
    Username  
    Password  
BlogPost (Post)
    title       string  NOT NULL  
    contents    string  NOT NULL  
    created     date    NOT NULL  
    user        fk      NOT NULL  
Comment  
    contents String     NOT NULL  
    created     date    NOT NULL  
    user        fk      NOT NULL  
    blogPost    fk      NOT NULL  
