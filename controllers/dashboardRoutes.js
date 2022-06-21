const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require("../utils/auth")

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('allposts', { 
      layout:"dashboard",
      posts, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', withAuth, (req, res) => {


  res.render('newpost', {
    layout: "dashboard"
  }); 
});


router.post('')

module.exports = router