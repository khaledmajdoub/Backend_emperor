import mongoose from "mongoose";
const { Schema, model } = mongoose;

const weaponSchema = new Schema(
  {
    idweapon: {
      type: String,
      required: true,
    },
    nameweapon: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    typeweapon: {
      type: String,
      required: true,
    },
    bonusweapon: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Weapon", weaponSchema);
