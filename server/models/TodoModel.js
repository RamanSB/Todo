import mongoose from 'mongoose';

const TodoModel = mongoose.Schema({
    "text": {
        type: String,
        required: true,
    },
    "created": {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('TodoModel', TodoModel);