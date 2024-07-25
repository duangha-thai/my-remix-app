import { useState } from "react";
import { sculptureList } from "./SculptureLists";

export default function EProject() {
  const [index, setIndex] = useState(0);
  const [sctList, setSctList] = useState(sculptureList);

  function handleClickNext() {
    if (index + 1 >= sculptureList.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handleClickBack() {
    if (index === 0) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function handleClickDelete() {

  }
//   let sculpture = sculptureList[index];

  return (
    <>
    <h1>รายการโครงงานของเรา</h1>
      {
        sctList.map(sculpture => (
        <div key={sculpture.id}>
            <button onClick={() => {
            setSctList(
                sctList.filter(tmp =>
                    tmp.id !== sculpture.id
                )
            );
        }}
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Delete
       </button>
          <div className="text-2xl text-center my-4">
          <h2>
                <i>{sculpture.name}</i> โดย {sculpture.author}
            </h2>
            
            <div className="flex justify-center ">
            <img
               src={sculpture.url}
               title={sculpture.name} 
            />
            </div>
            <p>
                {sculpture.description}
            </p>
            <a href={sculpture.reference} target="_blank" className="text-blue-500 hover:text-blue-700 underline">เอกสารอ้างอิงฉบับเต็ม</a>
          </div>
        </div>
      ))}
    </>
  );
}