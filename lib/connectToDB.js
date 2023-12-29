import mongoose from 'mongoose';

const Schema = mongoose.Schema;

await (mongoose.connect(process.env.MONGO_URI));
mongoose.Promise = global.Promise;

export const db = {
    Project: projectModel()
};

// mongoose models with schema definitions

function projectModel() {
    const schema = new Schema({
        name: { type: String, required: true },
        author: { type: String, required: true },
        description: { type: String, required: true },
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.Project || mongoose.model('Project', schema);
}