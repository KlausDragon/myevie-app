const express = require('express');
const router = express.Router();
const CurrentChallenges = require('../models/currentChallenges');
const weekly = require('../models/weeklyChallenges');
const Challenges = require('../models/challenges');
const Profile = require('../models/profile');
const { isOverIncrement, getTopOfDay, generateChallenges, getProfileLevel, generateWeekly } = require('../utils/challengeLogic');
const { clean } = require('../utils/cleanInput');

async function makeNewChallenges(id) {
    const newChallenge = new CurrentChallenges({
        user: id,
        challenges: (await generateChallenges()).map((challenge) => {
            return {
                id: challenge,
                isComplete: false,
            }
        }),
        generated: getTopOfDay(Date.now()),
        weeklyCompleted: (await generateWeekly()).map((challenge) => {
            return {
                id: challenge,
                isComplete: false,
            }
        }),
    });
    return newChallenge;
}

async function regenerateChallenges(id) {
    await CurrentChallenges.updateOne({ user: id }, {
        challenges: (await generateChallenges()).map((id) => {
            return {
                id,
                isComplete: false,
            }
        }),
        generated: getTopOfDay(Date.now())
    });
    return await CurrentChallenges.findOne({ user: id });
}

function filterChallenges(challenges) {
    return challenges.map((challenge) => {
        // TODO: filtering logic
        return challenge;
    });
}

function buildChallengeRet(challengeId, isComplete) {
    return Challenges.findOne({ _id: challengeId })
    .then((res) => {
        return {
            challenge: res,
            isComplete
        }
    });
}

async function getChallengeInfo(challengeArr) {
    const promiseArr = [];
    challengeArr.forEach(({ id, isComplete }) => {
        promiseArr.push(buildChallengeRet(id, isComplete));
    });

    return await Promise.all(promiseArr)
}


// Routes


// Get Challenges
router.get('/:id', async(req, res) => {
    let userChallenges = await CurrentChallenges.findOne({ user: req.params.id });

    // challenges doesn't exist
    if (!userChallenges) {
        const targetUser = await Profile.findOne({ _id: req.params.id });
        if (!targetUser) {
            res.status(400).send("User doesn't exist.");
        }

        const regenRes = await makeNewChallenges(req.params.id);
        if (!regenRes) {
            res.status(500).send("No regen result for new user");
            return;
        }
        await regenRes.save();
        res.status(200).send({
            daily: await getChallengeInfo(regenRes['challenges']),
            weekly: await getChallengeInfo(regenRes['weeklyCompleted']),
        });
        return;
    }

    // Challenges is too old -> regen
    if (isOverIncrement(Date.now(), userChallenges['generated'], 1)) {
        const regenRes = await regenerateChallenges(req.params.id);
        if (!regenRes) {
            res.status(500).send("No Daily regen");
            return;
        }
        res.status(200).send({
            daily: await getChallengeInfo(regenRes['challenges']),
            weekly: await getChallengeInfo(regenRes['weeklyCompleted']),
        });
        return;
    }

    // Weekly Challenges are mismatched -> clear track for weekly
    const weeklyChallenges = await weekly.findOne({});
    if (userChallenges['weekTrack'] !== weeklyChallenges['lastUpdated']) {
        const weekCompleted = await weeklyChallenges['challenges'].map((id) => {
            return {
                id,
                isComplete: false,
            }
        });

        const updateWeekRes = await CurrentChallenges.findOneAndUpdate({ 
                user: req.params.id
            }, {
                weeklyCompleted: weekCompleted,
                weekTrack: weeklyChallenges['lastUpdated']
            }
        );

        if (!updateWeekRes) {
            res.status(500).send("Failed to clear weekly track for users");
        }
    }

    userChallenges = await CurrentChallenges.findOne({ user: req.params.id });

    res.status(200).send({
        daily: await getChallengeInfo(userChallenges['challenges']),
        weekly: await getChallengeInfo(userChallenges['weeklyCompleted']),
    });
});

router.post('/complete', async(req, res) => {
    const { user, challenge } = req.body;

    const targetChallenge = await Challenges.findOne({ _id: challenge });
    if (!targetChallenge) {
        res.status(400).send("Challenge provided does not exst.");
        return;
    }

    // Find user track
    const userChallenges = await CurrentChallenges.findOne({ user });
    if (!userChallenges) {
        res.status(400).send('No challenge information for the specified user.');
        return;
    }

    // Check if Daily Expired
    if (isOverIncrement(Date.now(), userChallenges['generated'], 1)) {
        const regenRes = await regenerateChallenges(user);
        if (!regenRes) {
            res.status(500).send('Failed to regenerate challenges after expired daily challenges.');
            return;
        }
    }

    // Check if Weekly Expired
    const weeklyChallenges = await weekly.findOne({});
    if (userChallenges['weekTrack'] !== weeklyChallenges['lastUpdated']) {
        const weekCompleted = await weeklyChallenges['challenges'].map((id) => {
            return {
                id,
                isComplete: false,
            }
        });

        const updateWeekRes = await CurrentChallenges.findOneAndUpdate({ 
                user
            }, {
                weeklyCompleted: weekCompleted,
                weekTrack: weeklyChallenges['lastUpdated']
            }
        );

        if (!updateWeekRes) {
            res.status(500).send("Failed to clear weekly track for users.");
            return;
        }
    }

    // Check if Daily
    let isDailyChallenge = false;
    let didChange = false;
    const updatedChallenges = await CurrentChallenges.findOne({ user });
    const newChallengeState = updatedChallenges['challenges'].map((iter) => {
        const { id, isComplete } = iter;
        if (id.toString() === challenge) {
            isDailyChallenge = true;
            if (!isComplete) didChange = true;
            return {
                id,
                isComplete: true
            }
        }
        return iter;
    });

    // Check if Weekly
    let isWeeklyChallenge = false;
    let newWeekState = null;
    if (!isDailyChallenge) {
        newWeekState = updatedChallenges['weeklyCompleted'].map((iter) => {
            const { id, isComplete } = iter;
            if (id.toString() === challenge) {
                isWeeklyChallenge = true;
                if (!isComplete) didChange = true;
                return {
                    id,
                    isComplete: true
                }
            }
            return iter;
        });
    }

    if ((!isDailyChallenge && !isWeeklyChallenge)) {
        res.status(400).send("Challenge inputted doesn't exist or has expired");
        return;
    }

    if (!didChange) {
        res.status(400).send("Challenge inputted is already completed");
        return;
    }

    // Mark challenge complete
    if (isWeeklyChallenge) {
        if (!newWeekState) {
            res.status(500).send("Failed to parse new weekly challenges to update.");
            return;
        }
        const updateRes = await CurrentChallenges.findOneAndUpdate({ user }, {
            weeklyCompleted: newWeekState,
            weekTrack: weeklyChallenges['lastUpdated']
        });
        if (!updateRes) {
            res.status(500).send("Failed to update weekly challenges.");
            return;
        }
    } else {
        const updateRes = await CurrentChallenges.findOneAndUpdate({ user }, {
            challenges: newChallengeState,
        });
        if (!updateRes) {
            res.status(500).send("Failed to update daily challenges");
            return;
        }
    }

    // Give Exp
    const userProfile = await Profile.findOne({ _id: user });
    if (!userProfile) {
        res.status(400).send("User profile does not exist.");
        return;
    }

    const { level, exp } = getProfileLevel(userProfile, targetChallenge['worth']);
    const profileUpdateRes = await Profile.findOneAndUpdate({ _id: user }, {
        level: userProfile['level'] + level,
        experience: exp
    });

    if (!profileUpdateRes) {
        res.status(500).send("Failed to update profile experience.");
        return;
    }

    res.status(200).send("challenge logged.");
});


module.exports = router;
