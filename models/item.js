import mongoose from "mongoose";
const { Schema, model } = mongoose;

const itemSchema = new Schema(
  {
    iditem: {
      type: String,
      required: true,
    },
    itemtype: {
      type: String,
      required: true,
    },
    itemname: {
      type: Number,
      required: true,
    },

    craftable: {
      type: Boolean,
      required: true,
    },
    usable: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Item", itemSchema);
