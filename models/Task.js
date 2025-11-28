import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
});

export default mongoose.model("Task", taskSchema);

