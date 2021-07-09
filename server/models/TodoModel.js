import mongoose from 'mongoose';

const TodoModel = mongoose.Schema({
    "text": {
        type: String,
        required: true,
    },
    "date": {
        type: Date,
        default: Date.now
    },
    "id": {
        type: String,
        required: true
    }
});

export default mongoose.model('TodoModel', TodoModel);