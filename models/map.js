import mongoose from "mongoose";
const { Schema, model } = mongoose;

const mapSchema = new Schema(
  {
    idmap: {
      type: String,
      required: true,
    },
    namemap: {
      type: String,
      required: true,
    },
    objects: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Map ", mapSchema);
