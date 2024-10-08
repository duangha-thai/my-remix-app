import type { MetaFunction } from "@remix-run/node";
import MyCards from "./cards.MyCards";
import AppMenu from "./template/menu";


export const meta: MetaFunction = () => {
  return [
    { title: "Duanghathai Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
    <AppMenu />
    {/* <MyCards /> */}
    
      <div className="font-sans p-4"></div>
    <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <hr className="m-4"/>
      <h1 className="text-3xl">My Profile</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2"> 
        
        <li>Name : Duanghathai Yarangpai</li>
        <li>Class : Informmation Technology </li>
        <li>E-mail : <a href="mailto:Duanghathai_yar@rmutto.ac.th">Contact me.</a></li>
        <li> <img src="img/01.jpg" alt="duang" /></li>
      </ul>
</div>
  );
}
