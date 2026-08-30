import mongoose from "mongoose";

const supportRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      trim: true
    },

    phone: {
      type: String,
      required: true
    },

    supportType: {
      type: String,
      required: true
    },

    message: {
      type: String,
      required: true
    },

    aiSummary: {
      type: String,
      default: ""
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium"
    },

    suggestedAction: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

const SupportRequest = mongoose.model(
  "SupportRequest",
  supportRequestSchema
);

export default SupportRequest;