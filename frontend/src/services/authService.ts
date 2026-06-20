import axios from "axios";

const API = "http://localhost:8000";

export const loginUser = async (
  email: string,
  password: string
) => {
  const response = await axios.post(
    `${API}/auth/login`,
    {
      email,
      password,
    }
  );

  return response.data;
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await axios.post(
    `${API}/auth/register`,
    {
      name,
      email,
      password,
    }
  );

  return response.data;
};