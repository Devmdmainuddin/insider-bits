import mongoose, { connect, Schema } from 'mongoose';

const MONGO_URI =
    process.env.TEST_MONGODB_URI || process.env.DB_CONNECTION_STRING;
const cached: {
    connection?: typeof mongoose;
    promise?: Promise<typeof mongoose>;
} = {};

export const dbConnect = async () => {
    if (!MONGO_URI) {
        throw new Error(
            'Please define the MONGO_URI environment variable inside .env.local'
        );
    }
    if (cached.connection) {
        return cached.connection;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = connect(MONGO_URI, opts);
    }
    try {
        cached.connection = await cached.promise;
    } catch (e) {
        cached.promise = undefined;
        throw e;
    }
    return cached.connection;
};

export function autoIncrementPlugin(
    schema: Schema,
    options: { field: string }
) {
    schema.pre('save', async function (next) {
        if (this.isNew) {
            const model = mongoose.model(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
                (this.constructor as any).modelName as string
            );
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const doc = await model.findOne({}).sort({ [options.field]: -1 });
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            this[options.field] = doc ? doc[options.field] + 1 : 1;
        }
        next();
    });
}
