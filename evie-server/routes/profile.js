const express = require('express');
const router = express.Router();
const { Profile } = require('../models/profile');
const { clean } = require('../cleanInput');

router.put('/create', async(req, res) => {
    const { first_name, last_name, email, user, pass } = req.body;
    if (
        !(
            clean(first_name) 
            && clean(last_name)
            && clean(email)
            && clean(user)
            && clean(pass)
        )
    ) {
        res.status(400).send('All of name, user, and pass must be provided');
        return;
    }
    const userProfile = new Profile({
        user,
        pass,
        first_name,
        last_name,
        email,
        experience: 0,
        level: 0,
        friends: {},
    });

    try {
        await userProfile.save();
        res.status(200).send();
    } catch(Error) {
        res.status(500).send('Failed to create user account.');
    }
});

router.post('/login', async (req, res) => {
    const { user, pass } = req.body;
    const userProfile = await Profile.findOne({ user: user, pass: pass });
    
    if (!userProfile) {
        res.status(400).send("User does not exist.");
        return;
    }

    const { first_name, last_name, experience, level } = userProfile.toJSON();
    res.status(200).send({
        first_name,
        last_name,
        experience,
        level
    });
});


module.exports = router;