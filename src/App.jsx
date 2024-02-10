"use client";
import { CiSaveDown1 } from "react-icons/ci";
import "./App.css";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

import TopSection from "./pages/TopSection";
import { useRef } from "react";
import FormPage from "./pages/FormPage";
import ReadBock from "./pages/ReadBock";
import AboutWritter from "./pages/AboutWritter";
import FeaturedPost from "./pages/FeaturedPost";
function App() {
  // const section1 = useRef();
  // const section2 = useRef();

  // const scrollHandler = (elmRef) => {
  //   window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  // };
  const section = () => {};
  return (
    <>
      <section className="py-8  mx-auto begroundColor1">
        <div className="text-center">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-500 tracking-tighter">
            আর নয় দুশ্চিন্তা !
          </h2>
          <h1 className="text-2xl sm:text-4xl font-semibold text-teal-600 tracking-tighter">
            আর নয় অস্থিরতা !
          </h1>

          <div className="w-full md:w-9/12 mx-auto my-8">
            {/* <ReactPlayer
              url="https://youtu.be/VJ4AWvijoMk"
              className="w-full h-5/6"
            /> */}
            <iframe
              className="video h-72 sm:h-96  w-full lg:min-h-screen"
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={`https://youtube.com/embed/VJ4AWvijoMk?autoplay=0`}
            ></iframe>
          </div>
          <div>
            <button
              className="px-2 sm:px-4 py-4 h-16 w-64 bg-red-500 rounded-2xl text-lg sm:text-md text-white font-semibold button1"
              onClick={() => scrollHandler(section1)}
            >
              <span className="showText flex">
                একটু পড়ে দেখতে চাই{" "}
                <FaRegArrowAltCircleDown className="text-2xl font-bold mt-1 ml-2" />
              </span>
              <span className=" hiddenText">ক্লিক করুন</span>
            </button>
          </div>
        </div>
      </section>
      <TopSection />

      <FeaturedPost />
      <AboutWritter />
      <ReadBock />
      <FormPage />
    </>
  );
}

export default App;
