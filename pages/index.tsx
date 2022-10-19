import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { discordPublicApi } from '../api'

interface User {
  id: string;
  username: string;
  avatar: string;
  avatar_decoration?: any;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner?: any;
  banner_color?: any;
  accent_color?: any;
  locale: string;
  mfa_enabled: boolean;
  premium_type: number;
  email: string;
  verified: boolean;
}

const Home: NextPage = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    // validate if discordData exists on local storage
    if (localStorage.getItem('discord_token_data')) {
      setIsLogged(true);
      getUserData();
    }
    setIsLoading(false);
  }, [])

  const getUserData = async () => {
    const data = JSON.parse(localStorage.getItem('discord_token_data') || '{access_token: ""}');
    const res = await discordPublicApi.getDiscordUser(data.access_token);
    setIsLoading(false)
    setUser(res);
  }

  const logout = () => {
    localStorage.removeItem('discord_token_data');
    setIsLogged(false);
    setUser(null);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Discord oAuth demo</title>
        <meta name="description" content="This is a simple add to have a proof of concept about how to create an authentication method with Discord account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is a simple demo about how to create an authentication method with Discord account
        </h1>
        {!isLogged && !isLoading && (
          <div className={styles.discordButtonBox}>
            <p>Use this button to test</p>
            <a href={process.env.NEXT_PUBLIC_DISCORD_AUTH_URL}>
              <button className={styles.discordButton}>
                <span className={styles.imageIcon} >
                  <Image src="/assets/img/discord-icon.png" alt="Discord logo" width={20} height={20} />
                </span>
                Auth with Discord
              </button>
            </a>
          </div>
        )}
        {isLogged && !isLoading && user && (
          <div className={styles.discordResults}>
            <div className={styles.avatar}>
              <div>
                <Image src={`${process.env.NEXT_PUBLIC_AVATAR_DISCORD_URL}/${user.id}/${user.avatar}.png`}
                  alt="Discord avatar"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" />
              </div>
            </div>
            <div className={styles.info}>
              <p><span>Username:</span> {user.username}</p>
              <p><span>Email:</span> {user.email}</p>
              <p><span>Verified:</span> {user.verified}</p>
              <p><span>Discriminator:</span> {user.discriminator}</p>
              <p><span>Locale:</span> {user.locale}</p>
              <p><span>Public flags:</span> {user.public_flags}</p>
              <p><span>Flags:</span> {user.flags}</p>
              <p><span>MFA enabled:</span> {user.mfa_enabled}</p>
              <p><span>Premium type:</span> {user.premium_type}</p>
            </div>

            <div className={styles.discordButtonBox}>
              <a onClick={logout}>
                <button className={styles.discordButton}>
                  <span className={styles.imageIcon} >
                    <Image src="/assets/img/discord-icon.png" alt="Discord logo" width={20} height={20} />
                  </span>
                  Logout
                </button>
              </a>
            </div>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
