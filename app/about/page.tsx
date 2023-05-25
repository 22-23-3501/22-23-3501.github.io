import Image from "next/image";
import Link from "next/link";

const localUser = [
  {
    title: "22-23 地區代表團",
    users: [
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
    ]
  },
  {
    title: "21-22 地區代表團",
    users: [
      {
        title: "地區代表",
        name: "張博堯  Bob",
        ig: "bob_chang5",
        photo: "/bob.jpg"
      },
      {
        title: "中壢分區代表",
        name: "林俊賢  Benson",
        ig: "Junxian_1009",
        photo: "/啊嫌.jpg"
      },
      {
        title: "新竹分區代表",
        name: "李允芝  Julia",
        ig: "leezin1110",
        photo: "/允之學姊6.jpg"
      },
      {
        title: "苗栗分區代表",
        name: "蕭翊安 Adam",
        ig: "hsiaoyikan_aa",
        photo: "/adam.jpg"
      }
    ]
  },
  {
    title: "20-21 地區代表團",
    users: [
      {
        title: "地區代表",
        name: "趙禹安 Andy",
        ig: "j.u.a_0624",
        photo: "/andy.jpg"
      },
      {
        title: "中壢分區代表",
        name: "鄧宜華 Angel",
        ig: "_tyh127_",
        photo: "/TPC_067f995677f8462d94cee362d20e9f54116842120013919945712tffffffff.jpg"
      },
      {
        title: "新竹分區代表",
        name: "idk"
      },
      {
        title: "苗栗分區代表",
        name: "黃蔓蓁  Katie",
        ig: "mzz.91_",
        photo: "/蔓.jpg"
      }
    ]
  },
  {
    title: "19-20 地區代表團",
    users: [
      {
        title: "地區代表",
        name: "趙怡亭 Jennifer",
        ig: "eating1003",
        photo: "/TPC_526cbb309dd7438081b2d815b7851b80116842120013919945712tffffffff.jpg"
      },
      {
        title: "中壢分區代表",
        name: "鄧宜華 Angel",
        ig: "_tyh127_"
      },
      {
        title: "新竹分區代表",
        name: "idk"
      },
      {
        title: "苗栗分區代表",
        name: "王珮瑄 Minnine",
        ig: "minnine_1122_",
        photo: "/S__25387119.jpg"
      }
    ]
  },
  {
    title: "18-19 地區代表團",
    users: [
      {
        title: "地區代表",
        name: "idk"
      },
      {
        title: "中壢分區代表",
        name: "idk"
      },
      {
        title: "新竹分區代表",
        name: "林彥廷Vessi",
        ig: "daniel.v.lin",
        photo: "/timeline_20230516_141214.jpg"
      },
      {
        title: "苗栗分區代表",
        name: "idk"
      }
    ]
  }
];

export default function About() {
  return (
    <div className="h-full mx-24">
      <div className="mt-24 bg-white p-16 rounded-lg">
        <div className="mx-auto max-w-[500px]">
          <h2 className="text-5xl font-bold text-center text-gray-800">關於我們的團隊</h2>
          <p className="whitespace-pre-line mt-10 text-center text-gray-700">
            地區代表團在2017~2023年度下來共經過六屆代表團，真是一個大家庭~
            而非常榮幸的可以將這份精神及歷屆學長姐的熱情傳承下去!
            讓我們一起來認識這些學長姊把~
          </p>
        </div>
      </div>

     {localUser.map(users => (
      <div className="mt-24 p-10 bg-white rounded-md" key={users.title}>
        <h2 className="text-5xl font-bold text-center text-gray-800">{users.title}</h2>
        <div className="flex flex-wrap flex-row justify-center mt-10">
          {users.users.map(user => (
            <div key={user.name} className="mx-10 flex flex-col items-end">
              <Image src={user.photo ?? "/04-ROTARY_LOGO連接IMAGINE_LOGO用-removebg-preview.png"} className="rounded-xl" width={257} height={290} alt="photo"/>
              <div className="bg-gray-100 rounded-lg p-4 w-3/4 -translate-y-10 translate-x-7">
                <h2 className="text-xl font-bold text-gray-800">{user.title}</h2>
                <p className="text-gray-700 font-['DidoteTextW01-Italic'] italic">
                  {user.name}
                </p>
                {user.ig ? (
                  <p className="text-gray-700 font-['DidoteTextW01-Italic'] italic">
                    IG : <Link href={`https://www.instagram.com/${user.ig}`}>{user.ig}</Link>
                  </p>
                ) : null}
              </div>
            </div>
          ))}       
        </div>
      </div>
     ))} 
    </div>
  );
}
