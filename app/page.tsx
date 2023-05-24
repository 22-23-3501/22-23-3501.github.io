"use client";

import {useState} from "react";

const users = [
  {
    photo: "liyan.jpg",
    message: "目標、努力、支持與堅持,都是我現在需要的"
  },
  {
    photo: "Leo.jpg",
    message: "未來的扶輪在少年!很開心能為扶輪及各位優秀的團員們服務～"
  }
]

export default function Home() {
  const [switchUser, setSwitchUseer] = useState(0);

  return (
    <div className="h-full">
      <div className="mx-10 flex mt-10">
        <div className="mx-auto w-[700px] flex relative">
          <img src={users[switchUser].photo} alt="photo" className="rounded-t-full h-[400px]"/>
          <h2 className="font-bold text-xl w-30 bg-gray-300 h-20 absolute right-2 bottom-2">『{users[switchUser].message}』</h2>
        </div>
      </div> 
    </div>
  );
}
