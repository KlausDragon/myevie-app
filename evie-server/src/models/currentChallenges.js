const mongoose = require('mongoose');
const { Schema } = mongoose;

const challengesSchema = new Schema(
    {
        user: Schema.Types.ObjectId,
        challenges: Schema.Types.Mixed,
        generated: Schema.Types.Date,
        weeklyCompleted: Schema.Types.Mixed,
        weekTrack: Schema.Types.Date,
    },
);

// challenges will be of form:
/**
 * [
 *      {
 *          id: <challenge ID>,
 *          isComplete: <boolean>
 *      }
 * ]
 */

module.exports = mongoose.model('currentChallenges', challengesSchema);
