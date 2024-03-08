import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.models.Lead;

export default Lead || new mongoose.model("Lead", leadSchema);
