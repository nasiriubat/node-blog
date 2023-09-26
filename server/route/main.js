const express = require('express');

const router = express.Router();


//routes
router.get('',(req,res)=>{
    const data = {
        title: "First Article",
        description: "This is my first article."
    };
    res.render('index',{data});
});

router.get('/about',(req,res)=>{
    const data = {
        title: "First Article",
        description: "This is my first article."
    };
    res.render('about',{data});
});

module.exports = router;