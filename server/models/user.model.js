import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    credits: {
      type: Number,
      default: 50,
      min: 0,
    },
    isCreditAvailable: {
      type: Boolean,
      default: true,
    },
    notes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Notes",
      default: [],
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("userModel", userSchema);

export default userModel;
