import axios from "axios";

// create an axios instance
const api = axios.create({
  baseURL: 'https://discord.com/api',
});

// get discord user data with axios
export const getDiscordUser = async (token: string) => {
  const response = await api.get('/users/@me', {headers: {'Authorization': `Bearer ${token}`}});
  return response.data;
}