import { loginInputs } from "./types";

export const login = async (data: loginInputs) => {
  const res = await fetch(`${import.meta.env.VITE_RAILS_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  return result
}