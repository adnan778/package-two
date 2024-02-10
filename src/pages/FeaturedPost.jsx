import React from 'react';
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const FeaturedPost = () => {
    return (
        <section className="w-full p-6 ">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-4xl font-semibold text-red-700 text-center">
            ৫০০০ এর অধিক বিক্রিত বই
          </h1>

          <div className="flex flex-wrap my-12">
            <div className="w-full md:w-1/4 p-1 lg:p-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review.png"
                alt=""
                className="border-green-500 border-4 "
              />
            </div>
            <div className="w-full md:w-1/4 p-1 lg:p-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review_03.png"
                alt=""
                className="border-green-500 border-4 "
              />
            </div>
            <div className="w-full md:w-1/4 p-1 lg:p-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review08.jpg"
                alt=""
                className="border-green-500 border-4 "
              />
            </div>
            <div className="w-full md:w-1/4 p-1 lg:p-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review11.jpg"
                alt=""
                className="border-green-500 border-4 "
              />
            </div>

            <div className="w-full md:w-1/4 p-1 lg:p-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review09.jpg"
                alt=""
                className="border-green-500 border-4 "
              />
            </div>

            <div className="w-full md:w-1/4 p-1 lg:p-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review_04.png"
                alt=""
                className="border-green-500 border-4 "
              />
            </div>
            <div className="w-full md:w-1/4 p-1 lg:p-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review07-915x1024.jpg"
                alt=""
                className="border-green-500 border-4 "
              />
            </div>
            <div className="w-full md:w-1/4 p-1 lg:p-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review_2-2.png"
                alt=""
                className="border-green-500 border-4 "
              />
            </div>
          </div>
          <div className=" item-center mx-auto">
            <h1 className="text-center text-xl sm:text-2xl text-red-500 font-semibold mb-4">
              স্টক শেষ হওয়ার আগেই অর্ডার করুন
            </h1>

            <button
              className="mx-auto block mt-10 h-16 w-80 bg-pink-600 rounded-2xl text-lg sm:text-md text-white font-semibold button2"
              onClick={() => scrollHandler(section2)}
            >
              <span className="showText2 flex w-80 px-4 py-4">
                বই গুলো অর্ডার করতে চাই{" "}
                <FaRegArrowAltCircleDown className="text-2xl font-bold mt-1 ml-2" />
              </span>
              <span className=" hiddenText2 w-80 px-1 py-5">
                কল 01317348428 অথবা ক্লিক করুন
              </span>
            </button>

           
          </div>
        </div>
      </section>
    );
};

export default FeaturedPost;