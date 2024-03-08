import mongoose from "mongoose";
import React from "react";
import Lead from "@/models/Lead";

async function Users() {
  const connect = await mongoose.connect(process.env.MONGODB_URL);
  const users = await Lead.find({});

  return (
    <div>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
