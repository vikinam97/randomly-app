'use strict';
import mongoose, { Schema, Document } from 'mongoose';

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true, "user name is required"]
    },
    ticketId: {
        type: mongoose.Types.ObjectId,
        required: [true, "ticket is required"]
    },
    gameId: {
        type: mongoose.Types.ObjectId,
        required: [true, "game is required"]
    }
});

export default mongoose.model('User', UserSchema);