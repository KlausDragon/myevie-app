const mongoose = require('mongoose');
const { Schema } = mongoose;

const historySchema = new Schema(
    {
        user: Schema.Types.ObjectId,
        entries: Schema.Types.Map,
    },

);

module.exports = mongoose.model('History', historySchema);
