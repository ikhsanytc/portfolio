import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_PROJECT_URL,
  process.env.NEXT_PUBLIC_ANON_KEY
);

export async function sendMessage(name, email, message) {
  try {
    const { data, error } = await supabase.from("contact").insert({
      email,
      name,
      message,
    });
    if (error) {
      console.log(error);
      alert("error");
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    alert("error");
  }
}
