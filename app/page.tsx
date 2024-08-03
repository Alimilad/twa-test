'use client'

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

export interface ITelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {

  const [telegramUser,setTelegramUser] = useState<ITelegramUser | null>(null)
  
  useEffect(()=> {
    if(WebApp.initDataUnsafe.user){
      setTelegramUser(WebApp.initDataUnsafe.user as ITelegramUser)
    }
  },[])

  return (
   <main className="p-4">
    {
      telegramUser?(
        <>
        <h1 className="text-2xl font-bold mb-4">User Data</h1>
        <ul>
          <li>ID: {telegramUser.id}</li>
          <li>First Name: {telegramUser.first_name}</li>
          <li>Last Name: {telegramUser.last_name}</li>
          <li>Username: {telegramUser.username}</li>
          <li>Language Code: {telegramUser.language_code}</li>
          <li>Is Premium: {telegramUser.is_premium}</li>
        </ul>
        </>
      ):(
        <div>
          Loading...
        </div>
      )
    }
   </main>
  );
}
