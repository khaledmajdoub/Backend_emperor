import mongoose from "mongoose";
const { Schema, model } = mongoose;

const outfitSchema = new Schema(
  {
    outfitname: {
      type: String,
      required: true,
    },
    outfitdescription: {
      type: String,
      required: true,
    },

    outfitbonus: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Outfit", outfitSchema);
