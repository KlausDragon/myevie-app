const mongoose = require('mongoose');
const { Schema } = mongoose;

const friendRequestSchema = new Schema(
    {
        user1: Schema.Types.ObjectId,
        user2: Schema.Types.ObjectId,
        response1: Schema.Types.Boolean,
        response2: Schema.Types.Boolean,
    },
);

module.exports = mongoose.model('friendRequest', friendRequestSchema);
