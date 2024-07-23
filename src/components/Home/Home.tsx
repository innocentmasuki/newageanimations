'use client'

import ReactPlayer from "react-player";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import localFont from "next/font/local";
import dynamic from "next/dynamic";

const runy = localFont({ src: '../../fonts/RunyTunesRevisitedNF.otf' })
const RenderCharacter = dynamic(() => import('@/components/Character/RenderCharacter'))
const Home = () => {
  return (<div>
    <RenderCharacter />
    <div className="pt-64 flex justify-center w-full">
      <div className={`text-center ${runy.className} tracking-widest text-shadow font-runy md:text-9xl text-6xl  font-bold`}>
        <h1>NEW AGE</h1>
        <h1>ANIMATIONS</h1>
      </div>
    </div>

    {/* <div className="absolute pt-40 z-20 flex justify-center w-full">
        <input
          type="text"
          className="rounded-3xl my-4 mr-2 outline-none focus:border-2 text-green-900 focus:border-green-900 px-4 py-2"
          placeholder="yourname@example.com"
        />
        <button className="rounded-3xl font-bold hover:border-green-900 duration-150 border-green-200 border-2 capitalize my-4 px-4 py-2 bg-green-200 text-green-900">
          subscribe
        </button>
      </div> */}
    <div className="pt-72 ">
      <div className="w-full pb-4 pt-20 flex justify-end  ">
        <div className="w-1/2 lg:w-1/4 mr-4 md:mr-40   lg:mr-72 overflow-hidden rounded-3xl">
          <ReactPlayer
            url={"/assets/videos/cars.webm"}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className="w-full py-20 flex justify-start  ">
        <div className="w-1/2 absolute z-20  lg:w-1/4 ml-4 md:ml-40 lg:ml-72 overflow-hidden rounded-3xl">
          <ReactPlayer
            url={'/assets/videos/dino.webm'}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <div className="w-full py-48 flex justify-end  ">
        <div className="w-1/2 lg:w-1/4 mr-4 md:mr-40   lg:mr-50 overflow-hidden rounded-3xl">
          <ReactPlayer
            url={"/assets/videos/pushUp.webm"}
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="w-full  pt-10 pb-28">
        <div className="w-full absolute z-20 flex justify-center ">
          <a
            href="https://www.instagram.com/newageanimations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-4  hover:text-green-600">
              <AiFillInstagram className="text-2xl " />
            </div>
          </a>

          <a
            href="https://x.com/na_animations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-4  hover:text-green-600">
              <RiTwitterXFill className="text-2xl "/>
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCxaY6gjwWqA-XGKA5NZkZQg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-4 hover:text-green-600">
              <AiFillYoutube className="text-2xl" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>);
};
export default Home;
