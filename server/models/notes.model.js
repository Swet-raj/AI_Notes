import mongoose from "mongoose";

const notesSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    classLevel: {
      type: String,
    },
    examType: {
      type: String,
    },
    revisionMode: {
      type: Boolean,
      default: false,
    },
    includeDiagram: {
      type: Boolean,
      default: false,
    },
    includeChart: {
      type: Boolean,
      default: false,
    },
    content: {
      type: mongoose.Schema.Types.Mixed, //AI Response (String/JSON)
      required: true,
    },
  },
  { timestamps: true },
);

const Notes = mongoose.model("Notes", notesSchema);

export default Notes;
