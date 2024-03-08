import Lead from "@/models/Lead";
import mongoose from "mongoose";

async function sendLead(formData) {
  "use server";
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    age: formData.get("age"),
  };
  const connect = await mongoose.connect(process.env.MONGODB_URL);
  const newLead = await Lead.create(data);
  console.log(newLead);
  return newLead;
}

export default function Home() {
  return (
    <div className="h-screen grid place-content-center">
      <form action={sendLead} className="flex flex-col gap-5">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="number" name="age" placeholder="Enter your age" />
        <button className="bg-green-500" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
