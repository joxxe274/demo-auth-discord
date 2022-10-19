import React from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { discordApi } from "../../api";

interface Props{
  access_token: string,
  expires_in: number,
  refresh_token: string,
  scope: string,
  token_type: string
}

const DiscordCatch: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  // get url params
  React.useEffect(() => {
    // validate if is client side
    if (typeof window !== "undefined") {
      // save data in local storage
      if (props.access_token) {
        localStorage.setItem("discord_token_data", JSON.stringify(props));
        router.push('/');
      }
    }
  }, []);
  return (
    <div>
      <h1>Discord catch</h1>
      <p>Code: {props.access_token}</p>
    </div>
  )
}

export default DiscordCatch;

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
  let code = query?.code;
  // validate if code is array and take first
  if (Array.isArray(code)) {
    code = code[0];
  }
  const res = await discordApi.getDiscordToken(code || '');

  return {
    props: { ...res },
  };
}