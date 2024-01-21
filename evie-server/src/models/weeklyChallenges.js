const mongoose = require('mongoose');
const { Schema } = mongoose;

const weeklyChallengesSchema = new Schema(
    {
        challenges: Schema.Types.Array,
        lastUpdated: Schema.Types.Date,
    },
);

module.exports = mongoose.model('Weekly', weeklyChallengesSchema);
