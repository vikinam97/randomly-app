'use strict';
import mongoose, { Schema, Document } from 'mongoose';

const TicketSchema = new Schema({
    gameId: {
        type: mongoose.Types.ObjectId,
        required: [true, "Game id is required"]
    }
});

export default mongoose.model('Ticket', TicketSchema);