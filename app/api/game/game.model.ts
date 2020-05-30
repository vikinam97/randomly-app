'use strict';
import mongoose, { Schema, Document } from 'mongoose';

const GameSchema = new Schema({
});

export default mongoose.model('Game', GameSchema);