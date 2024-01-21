const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const requests = require('../models/friendRequest');
const { ObjectId } = require('mongodb');

const STATUS_PENDING = 'pending';
const STATUS_ACCEPT = 'accepted';

async function makeFriend(res, user1Id, user2Id) {
    const user1 = await Profile.findOne({ _id: user1Id });
    const user2 = await Profile.findOne({ _id: user2Id });

    user1.friends.push(user2Id);
    const saveU1 = await user1.save();
    user2.friends.push(user1Id);
    const saveU2 = await user2.save();
    if (!saveU1 || !saveU2) {
        res.status(500).send("failed to create friend link");
        return false;
    }

    res.status(200).send("friend made");
    return true;
}

router.get("/request/:id", async (req, res) => {
    const user1Requests = await requests.find({ user2: req.params.id });
    const user2Requests = await requests.find({ user1: req.params.id });

    if (!user1Requests && !user2Requests) {
        res.status(200).send([]);
    } else if (!user1Requests) {
        res.status(200).send(user2Requests);
    } else if (!user2Requests) {
        res.status(200).send(user1Requests);
    } else {
        res.status(200).send(user1Requests.concat(user2Requests));
    }
});

router.post("/request/:id", async (req, res) => {
    const { user } = req.body;

    const user1Requests = await requests.findOne({ user1: user, user2: req.params.id });
    const user2Requests = await requests.findOne({ user2: user, user1: req.params.id });

    if (!user1Requests && !user2Requests) {
        try {
            const newRequest = new requests({
                user1: req.params.id,
                user2: user,
                response1: STATUS_ACCEPT,
                response2: STATUS_PENDING,
            });
            const saveRes = await newRequest.save();
            if (!saveRes) {
                res.status(500).send("Failed to save request creation.");
                return;
            }
        } catch(Error) {
            res.status(400).send("Invalid object Ids issued.");
            return;
        }
        res.status(200).send("Request established");

    } else if (!user1Requests) {
        if (user2Requests['response2'] === STATUS_PENDING) {
            res.status(200).send("Request already exists");
            return;
        }

        if (user2Requests['response2'] === STATUS_ACCEPT) {
            const friendRes = await makeFriend(res, req.params.id, user);
            if (friendRes) {
                await requests.deleteOne({ user2: user, user1: req.params.id })
                
            }
        }
        
    } else {
        if (user1Requests['response1'] === STATUS_PENDING) {
            res.status(200).send("Request already exists");
            return;
        }

        if (user1Requests['response1'] === STATUS_ACCEPT) {
            const friendRes = await makeFriend(res, req.params.id, user);
            if (friendRes) {
                await requests.deleteOne({ user1: user, user2: req.params.id })
            }
        }
    }
});

router.post("/search", async (req, res) => {
    const { email } = req.body;
    const searchRes = await Profile.findOne({ email });
    if (!searchRes) {
        res.status(404).send("email not found.");
        return;
    }
    res.status(200).send(searchRes['_id']);
});

router.post("/respond/:id", async (req, res) => {
    const { user, doAccept } = req.body;

    const user1Requests = await requests.findOne({ user1: user, user2: req.params.id });
    const user2Requests = await requests.findOne({ user2: user, user1: req.params.id });

    if (!user1Requests && !user2Requests) {
        res.status(404).send("No request exists.");
    } else if (!user1Requests) {
        if (user2Requests['response2'] === STATUS_ACCEPT && doAccept) {
            await makeFriend(res, req.params.id, user);
            const removeRes = await requests.deleteOne({ user2: user, user1: req.params.id })
            if (!removeRes) {
                res.status(500).send("failed to delete request");
                return;
            }
        } else if (doAccept) {
            user2Requests['response1'] = STATUS_ACCEPT;
            await user2Requests.save();
            res.status(200).send("request accepted");
        } else {
            const removeRes = await requests.deleteOne({ user2: user, user1: req.params.id })
            if (!removeRes) {
                res.status(500).send("failed to delete request");
                return;
            }
            res.status(200).send("request declined");
        }
    } else if (!user2Requests) {
        if (user1Requests['response1'] === STATUS_ACCEPT && doAccept) {
            await makeFriend(res, req.params.id, user);
            const removeRes = await requests.deleteOne({ user1: user, user2: req.params.id })
            if (!removeRes) {
                res.status(500).send("failed to delete request");
                return;
            }
        } else if (doAccept) {
            user1Requests['response2'] = STATUS_ACCEPT;
            await user2Requests.save();
            res.status(200).send("request accepted");
        } else {
            const removeRes = await requests.deleteOne({ user1: user, user2: req.params.id })
            if (!removeRes) {
                res.status(500).send("failed to delete request");
                return;
            }
            res.status(200).send("request declined");
        }
    }
});

module.exports = router;
