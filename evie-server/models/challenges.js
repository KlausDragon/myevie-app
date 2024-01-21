const mongoose = require('mongoose');
const { Schema } = mongoose;

const challengesSchema = new Schema(
    {
        name: Schema.Types.String,
        description: Schema.Types.String,
        objective: Schema.Types.String,
        frequency: Schema.Types.String,
        influence: Schema.Types.String,
    },
);

module.exports = {
    Profile: mongoose.model('Challenges', challengesSchema),
};
