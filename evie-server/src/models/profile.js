const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema(
    {
        user: Schema.Types.String,
        pass: Schema.Types.String,
        first_name: Schema.Types.String,
        last_name: Schema.Types.String,
        email: Schema.Types.String,
        experience: Schema.Types.Number,
        level: Schema.Types.Number,
        friends: Schema.Types.Map,
    },

);

module.exports = mongoose.model('Profile', profileSchema);
