import mongoose from "mongoose";
const { Schema, model } = mongoose;

const lobbySchema = new Schema(
  {
    idlobby: {
      type: String,
      required: true,
    },
    idplayer: {
      type: String,
      required: true,
    },
    playercount: {
      type: Number,
      required: true,
    },

    maxplayer: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Lobby ", lobbySchema);
