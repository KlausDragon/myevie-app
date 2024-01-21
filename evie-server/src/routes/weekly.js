const express = require('express');
const router = express.Router();
const weekly = require('../models/weeklyChallenges');
const challenges = require('../models/challenges');
const { generateWeekly } = require('../utils/challengeLogic');
const { clean } = require('../utils/cleanInput');

async function regenerateWeek(res) {
    const new_weekly = await generateWeekly();
    await weekly.deleteMany({});
    const new_week = new weekly({
        challenges: new_weekly,
        lastUpdated: Date.now()
    });
    try {
        await new_week.save();
        res.status(200).send();
    } catch(Error) {
        res.status(500).send("Regeneration of weekly challenges failed.");
    }
}

router.get('/regenerate-weekly', async (req, res) => {
    await regenerateWeek(res);
});

router.get('/check', async (req, res) => {
    const current = await weekly.find({}, {lastUpdated: 1});
    if (!current) {
        await regenerateWeek(res);
        return;
    }

    const weekAfter = new Date(current[0]['lastUpdated'])
    weekAfter.setDate(weekAfter.getDate() - 7);
    if (weekAfter < Date.now()) {
        await regenerateWeek(res);
        return;
    }
    res.status(304).send();
});

router.get('/', async (req, res) => {
    console.log(await weekly.find({}));
    res.status(200).send();
});

module.exports = router;