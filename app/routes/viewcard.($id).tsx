import { useLocation } from "react-router-dom";
import { cards } from "./Data"; 
import { useParams } from "@remix-run/react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function IsMember({ id, act }: { id: number, act: boolean }) {
    if (act)
      return <span key={id}> ✅ Hi, VIP Member.</span>
    else
      return <span key={id}>  ❌ Member Only! </span>
  }

function Profiles({
  id,
  nam,
  bio,
  bgp,
  imgu,
  usrn,
  cdat,
  act,
}: {
  id: number;
  nam: string;
  bio: string;
  bgp: string;
  imgu: string;
  usrn: string;
  cdat: string;
  act: boolean;
}) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="m-6 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${bgp})`, color: "blue" }}
        title={nam}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <IsMember id={id} act={act} />
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {nam}
          </div>
          <p className="text-gray-700 text-lg">{bio}</p>
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={imgu}
            title={nam}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{usrn}</p>
            <p className="text-gray-600">{cdat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function View() {
  const myParams = useParams();
  const query = useQuery();
  const id = Number(myParams.id);
  const card = cards.find((card) => card.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="m-10 bg-sky-300 p-10 rounded-3xl">
      <Profiles
        id={card.id}
        nam={card.name}
        bio={card.biog}
        bgp={card.bgProf}
        imgu={card.userIcon}
        usrn={card.userName}
        cdat={card.createdAt}
        act={card.active}
      />
    </div>
  );
}