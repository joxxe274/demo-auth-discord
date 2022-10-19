import axios from "axios";
// create an axios instance

const api = axios.create({
  baseURL: 'https://discord.com/api/v10/oauth2',
  // headers: {
  //   Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
  // },
});

// get discord token with axios
export const getDiscordToken = async (code: string) => {
  const data = {
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET,
    'grant_type': 'authorization_code',
    'code': code,
    redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URI}/discord-catch`,
    scope: 'identify',
  }
  const response = await api.post('/token', data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  return response.data;
}