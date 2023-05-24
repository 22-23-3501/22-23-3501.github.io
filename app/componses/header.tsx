import Link from "next/link";

const menu = [
  {
    title: "關於代表團",
    route: "about"
  },
  {
    title: "OB故事集",
    route: "story"
  },
  {
    title: "地區主委團",
    route: "who"
  },
  {
    title: "地區蠢事集",
    route: "stupid"
  },
]


export default function Header() {
  return (
    <div className="w-full h-20 px-4 py-5 bg-fuchsia-700 flex shadow-lg">
      <Link href="/">
        <img className="h-full" src="./logo.png" alt="logo"/>
      </Link>

      <div className="ml-10 h-full flex items-center">
        {menu.map(i => (
          <Link href={i.route} key={i.title} className="text-lg text-gray-100 mx-3">
            {i.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
