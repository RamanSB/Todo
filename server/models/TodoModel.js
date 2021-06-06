import mongoose from 'mongoose';

const TodoModel = mongoose.Schema({
    "title": {
        type: String,
        required: true,
    },
    "description": String,
    "date": {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('TodoModel', TodoModel);