"use client";

import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const users = [
  {
    photo: "/liyan.jpg",
    message: "目標、努力、支持與堅持,都是我現在需要的",
    name: `2023-24年度 3501地區代表 郭立言 

IG:liyan4375`
  },
  {
    photo: "/Leo.jpg",
    message: "未來的扶輪在少年!很開心能為扶輪及各位優秀的團員們服務～",
    name: "2023-24年度 3501地區主委閔 Leo"
  }
];

const localUser = [
  {
    title: "地區代表",
    name: "DIR Chloe  吳佳軒",
    photo: "/地區代表照片.jpg",
    ig: "xy._1112",
  },
  {
    title: "中壢分區代表",
    name: "楊依芩 yy",
    photo: "/中壢分區代表_edited_edited.jpg",
    ig: "yy_1372",
  },
  {
    title: "新竹分區代表",
    name: "張莅奇 Charlie",
    photo: "/水電啊其.jpg",
    ig: "liqi838",
  },
  {
    title: "苗栗分區代表",
    name: "劉佳宜 Nina",
    photo: "/苗栗代表照片_edited.jpg",
    ig: "yi._.155"
  },
];

const localCadreUsers = [
  {
    title: "地區秘書",
    name: "巫琦 David",
    ig: "w.c1126",
    photo: "/王景.jpg",
  },
  {
    title: "地區財務",
    name: "吳沛涵 Eeina",
    ig: "erinawu2004",
    photo: "/地區財務.jpg",
  },
  {
    title: "中壢分區副代表",
    name: "徐利泙 Sharon",
    ig: "lipeng_798",
    photo: "/徐立泙_edited.jpg",
  },
  {
    title: "中壢分區秘書",
    name: "孫婉禎 Celeste",
    ig: "zhen02_94",
    photo: "/婉公.jpg",
  },
  {
    title: "新竹分區秘書",
    name: "黃寬 Henry",
    ig: "kuan_nm43",
    photo: "/黃寬.jpg",
  },
  {
    title: "苗栗分區秘書",
    name: "林致均 Diego",
    ig: "zhijun0726",
    photo: "/治軍.jpg",
  },
];

export default function Home() {
  return (
    <div className="h-full md:mx-14 mx-5">
      <Slide>
        {users.map(user => (
          <div key={user.photo} className="lg:mx-32 mx-14 flex flex-col lg:flex-row mt-10 lg:items-end items-center justify-center">
            <Image src={user.photo} alt="photo" className="rounded-t-full" width={394} height={552}/>
            <div className="p-8 lg:-translate-x-9 lg:-translate-y-9 bg-gray-300 rounded-sm text-gray-700 translate-x-0 translate-y-0">
              <h2 className="font-bold text-xl w-30">『{user.message}』</h2>
              <p className="mt-5 whitespace-pre-line">{user.name}</p>
            </div>
          </div>
        ))}
      </Slide>
      <div className="mt-24 p-10 bg-gray-100 rounded-md">
        <div className="mx-auto max-w-[500px]">
          <h2 className="text-5xl font-bold text-center text-gray-800">22-23地區代表團</h2>
          <p className="whitespace-pre-line mt-10 text-center text-gray-700">
            在這個疫情肆虐的環境下，各扶少團對於當初創團初衷越發模糊

            縱使如此!!

            我們還是毅然決然繼續尋找一切突破口舉辦活動，企圖讓各團凝聚向心力、找回榮譽感以及對自己團的歸屬感

            俗話說每個團的背後都有一個帥氣美麗大方能幹脾氣超好超敬業的代表團

            接下來就來認識一下我們絕對沒有爆肝的代表團大帥哥大正咩把

            喔耶~~~~~~
          </p>

        </div>
        <div className="flex flex-wrap flex-row justify-center mt-10">
          {localUser.map(user => (
            <div key={user.name} className="mx-10 flex flex-col items-end">
              <Image src={user.photo} className="rounded-xl" width={257} height={290} alt="photo"/>
              <div className="bg-gray-300 rounded-lg p-4 w-3/4 -translate-y-10 translate-x-7">
                <h2 className="text-xl font-bold text-gray-800">{user.title}</h2>
                <p className="text-gray-700">
                  {user.name}
                </p>
                <p className="text-gray-700">
                  IG : <Link href={`https://www.instagram.com/${user.ig}`}>{user.ig}</Link>
                </p>
              </div>
            </div>
          ))}       
        </div>
      </div>
      <div className="mt-24 p-10 bg-gray-100 rounded-md">
        <div className="mx-auto max-w-[500px]">
          <h2 className="text-5xl font-bold text-center text-gray-800">22-23地區代表團幹部</h2>
          <p className="whitespace-pre-line mt-10 text-center text-gray-700">
            以下皆為我們各代表的幹部，在22-23年度盡責的輔佐著我們各代表及親愛的Uncle,Auntie 們~

            這麼如此優秀的團隊陣容是不是也應該看一下勒~~

            呵呵呵是時候IG 加起來了把(ゝ∀･)⌒☆
          </p>

        </div>
        <div className="grid 2xl:grid-cols-2 grid-cols-1 mt-10">
          {localCadreUsers.map(user => (
            <div key={user.name} className="md:flex rounded-xl p-1 md:max-w-[688px] mx-auto">
              <Image src={user.photo} alt="photo" width={344} height={344} className="md:h-[344px] md:w-[344px] h-[250px] w-[250px]"/>
              <div className="bg-gray-300 md:w-[344px] w-[250px] p-5">
                <h2 className="font-bold text-gray-800 text-xl text-center">{user.title}</h2>
                <p className="text-gray-700">{user.name}</p>
                <p className="text-gray-700">
                  IG : <Link href={`https://www.instagram.com/${user.ig}`}>{user.ig}</Link> 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <iframe className="mx-auto w-[50%]" height="315" src="https://www.youtube.com/embed/A_kgMzJCSOs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

    </div>
  );
}
