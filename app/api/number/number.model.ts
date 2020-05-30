'use strict';
import mongoose, { Schema, Document } from 'mongoose';

const NumberSchema = new Schema({
    gameId: {
        type: mongoose.Types.ObjectId,
        required: [true, "Game id is required"]
    },
    number: {
        type: Number,
        required: [true, "Number is required"]
    }
});

export default mongoose.model('Number', NumberSchema);