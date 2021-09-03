import * as mongoose from 'mongoose';

// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection
export const ItemSchema = new mongoose.Schema({
    name : String,
    qty: Number,
    description: String,
});