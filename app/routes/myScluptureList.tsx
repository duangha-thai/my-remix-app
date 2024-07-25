import {useState} from "react";
import { sculptureList } from "./SculptureLists";

export default function EProject(){
    const [index, setIndex] = useState(0);
    const [sctList,setSctList] = useState( sculptureList);

    function handleClickNext() {
        setIndex((index) => (index + 1) % sculptureList.length);
    }
    function handleClickBack(){
        setIndex((index) => (index - 1 + sculptureList.length) % sculptureList.length)
    }
let sculpture = sculptureList[index];

    return (
        <> 
              <div className="flex justify-center space-x-4">
        <button onClick={handleClickNext}
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
        <button onClick={handleClickBack}
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
      </div>
            <h2>
                <i>{sculpture.name}</i> โดย {sculpture.author}
            </h2>
            <h3>
                ({index + 1} จาก {sculptureList.length})
            </h3>
            <div className="flex justify-center space-x-4">
            <img
               src={sculpture.url}
               title={sculpture.name} 
            />
            </div>
            <p>
                {sculpture.description}
            </p>
            <a href={sculpture.reference} target="_blank">เอกสารอ้างอิงฉบับเต็ม</a>
            </> 
    );
}