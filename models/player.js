import mongoose from "mongoose";
const { Schema, model } = mongoose;

const playerSchema = new Schema(
  {
    idplayer: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    health: {
      type: Number,
      required: true,
    },

    hungerstate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Player", playerSchema);
