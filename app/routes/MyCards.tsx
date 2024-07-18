import { cards } from "./Data";
import { useState } from "react";
function IsMember ({id,act}: {id:number,act: boolean }) {
    if (act)
        return <span key={id}> ✅ Hi, VIP Member.</span>
    else
        return <span key={id}>  ❌ Member Only! </span>
}

function Profiles ({id,nam,bio,bgp,imgu,usrn,cdat,act}:{id:number,nam:string,bio:any,bgp:string,imgu:string,usrn:string,cdat:string,act:boolean}) {
    
    return (
    <div key={id} className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('${bgp}')`, color: "green"}} title={nam}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              </svg>
              <IsMember id = {id} act = {act}/>
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
            <p key={id} className="text-gray-700 text-base">{bio}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={imgu} title={nam} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{usrn}</p>
              <p className="text-gray-600">{cdat}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default function MyCards () {
  const [active,setActive] = useState(true);

    const name = "Duanghathai Yarangpai";
    const note = "#webprogramming";
    const note2 = "#softwareengineering";
    const chk = true;

    const items = cards.filter(cardItems => cardItems.active === active);


    const cardItems = items.map(cardItem => 
        <Profiles  
        id={cardItem.id}
        nam={cardItem.name}
        bio={cardItem.biog}
        bgp={cardItem.bgProf}
        imgu={cardItem.userIcon}
        usrn={cardItem.userName}
        cdat={cardItem.createdAt}
        act={cardItem.active}
        />
    );

    function handleClickActive(){
      //alert("Before, handleClickActive -->"+active);
      setActive(true);
      // alert("After, handleClickActive -->"+ active);
    }

    function handleClickNonAct(){
      //alert("Before, handleClickNonAct -->"+active);
      setActive(false);
      // alert("After, handleClickNonAct -->"+ active);
      
    }

    return (
      <div className="m-3 bg-amber-100 p-40">
        <h1 className="text-3xl font-bold">My Cards:{name}</h1>
        <div className="flex flex-row">
          <div className="basis-1/2 m-2 p-3 bg-purple-400 rounded-3xl text-black"> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
        </svg> {note} </div>
          <div className="basis-1/2 m-2 p-3 bg-purple-300 rounded-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
        </svg>{note2}</div>
      </div>
      {/* <Profiles /> */}
      {cardItems}
      <hr />
        <div className="flex flex-row">
          <button className=" m-3 h-10 w-1/2 bg-green-200 text-black rounded-3xl" onClick={handleClickActive}>Active</button> 
          <button className=" m-3 h-10 w-1/2 bg-red-300 text-black rounded-3xl" onClick={handleClickNonAct}>Non-Active</button>
        </div>
      </div>  
    );
}