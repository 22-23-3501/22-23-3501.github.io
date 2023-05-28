import Image from "next/image";

interface Member {
  title: string;
  name: string;
  teamName: string;
  photo: string;
}

const teamList: Member[] = [
  {
    title: "地區主委",
    name: "邱春彬 PP Broker",
    teamName: "頭份創世紀扶輪社",
    photo: "/263d01_5edc417a137f4727a4fd44e77063884c~mv2.png",
  },
  {
    title: "中壢分區主委",
    name: "蔡仲哲PP Marco",
    teamName: "中壢鎮南網路扶輪社",
    photo: "/263d01_78435b9cae634ea499ecbcd1889c5a27~mv2.png",
  },
  {
    title: "新竹分區主委",
    name: "陳美玲PP Life",
    teamName: "新竹百合扶輪社",
    photo: "/a3c153_91dc165103f9438bbc9a0216b278a11d~mv2.jpg",
  },
  {
    title: "苗栗分區主委",
    name: "許智閔PP Leo",
    teamName: "頭份創世紀扶輪社",
    photo: "/263d01_c40a817099544f65ac1de8ccfc972acb~mv2.jpg",
  },
];

function memberEle({title, name, teamName, photo}: Member, index: number): JSX.Element {
  const photoEle = <div className="bg-no-repeat bg-center bg-cover lg:w-2/5 w-full h-[550px] lg:min-w-[380px] border" style={{backgroundImage: `url('${photo}')`}}></div>;
  const info = (
    <div className="text-center grow lg:h-auto h-full md:min-w-[380px] p-10">
      <h2 className="text-4xl text-gray-800 font-bold">{title}</h2>
      <h3 className="text-xl mt-5">{name}</h3>
      <h4 className="text-xl mt-5">所屬設:<br />{teamName}</h4>
    </div>
  );

  return (
    <div className={`flex border lg:h-[550px] justify-center ${index % 2 === 0 ? 'flex-wrap' : 'flex-wrap-reverse'}`}>
      {index % 2 === 0 ? photoEle : info}
      {index % 2 !== 0 ? photoEle : info}
    </div>
  );
}

export default function Team() {
  return (
    <div className="lg:mx-20 mx-3 mt-24">
      <div className="md:p-10 p-4 bg-white rounded-md">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-24">2022-23年度地區主委團</h2>
        {teamList.map((member, index) => memberEle(member, index))}
      </div>
    </div>
  );
}
