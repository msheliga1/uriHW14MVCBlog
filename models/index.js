// MJS 3.4.24 - Original Act 14-28 mp. Models index.js linking tables.
const User    = require('./User');
const Project = require('./Project');
const Post    = require('./Post');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//  foreignKey: 'user_id'
// });

User.hasMany(Post, {
   foreignKey: 'user_id',
   onDelete: 'CASCADE'  // delete post if user deleted
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Post };
// module.exports = { User };
