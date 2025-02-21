"use server";

import axios from "axios";

export default async function getCollaborators() {
  try {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    return res.data.data;
  } catch (error: any) {
    return error.message;
  }
}
