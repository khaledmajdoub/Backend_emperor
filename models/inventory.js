import mongoose from "mongoose";
const { Schema, model } = mongoose;

const inventorySchema = new Schema(
  {
    idinventory: {
      type: String,
      required: true,
    },
    itemcount: {
      type: String,
      required: true,
    },
    itemcapacity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Inventory", inventorySchema);
