import mongoose from 'mongoose';

const tournamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    participants: {
        type: Number,
        required: true,
        min: 1
    },
    rules: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Tournament = mongoose.model('Tournament', tournamentSchema);

export default Tournament;