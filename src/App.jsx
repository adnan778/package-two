"use client";
import { CiSaveDown1 } from "react-icons/ci";
import "./App.css";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

import TopSection from "./pages/TopSection";
import { useRef } from "react";
function App() {
  const section1 = useRef();
  const section2 = useRef();

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };
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
                            
                <span className="showText flex">একটু পড়ে দেখতে চাই <FaRegArrowAltCircleDown  className="text-2xl font-bold mt-1 ml-2"/></span>
                <span className=" hiddenText">ক্লিক করুন</span>
            </button>
          </div>
        </div>
      </section>
      <TopSection />
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
                            
                <span className="showText2 flex w-80 px-4 py-4">বই গুলো অর্ডার করতে চাই <FaRegArrowAltCircleDown  className="text-2xl font-bold mt-1 ml-2"/></span>
                <span className=" hiddenText2 w-80 px-1 py-5">কল 01317348428 অথবা ক্লিক করুন</span>
            </button>

            {/* <button
              className="px-6 py-4 bg-pink-600 text-white rounded-2xl text-md md:text-xl  font-bold mt-5 mx-auto block flex"
              onClick={() => scrollHandler(section2)}
            >
              বই গুলো অর্ডার করতে চাই{" "}
              <CiSaveDown1 className="mx-2 font-bold text-white text-2xl  md:text-3xl" />
            </button> */}
          </div>
        </div>
      </section>

      <section className="">
        <div className=" my-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 text-center">
            লেখক পরিচিতি
          </h1>
          <div className="w-full lg:w-10/12 md:flex lg:mx-auto mt-8">
            <div className="w-full md:w-1/2 mx-1 md:mx-3">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/70407734_1627577940711843_1215443657067331584_n-1024x768.jpg"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 mx-1 md:mx-3 ">
              <p className="text-md sm:text-md 2xl:text-2xl mt-2 md:mt-0">
                অধ্যাপক ডা. মোঃ তাজুল ইসলাম (কাজল) একজন সাইকিয়াট্রিস্ট (মনোরোগ
                বিশেষজ্ঞ)। জন্ম চাঁদপুর জেলার মতলব থানাধীন পশ্চিম
                বাইশপুর(বালুচর) গ্রামে। তিনি মতলবগঞ্জ হাইস্কুল থেকে এসএসসি এবং
                চট্টগ্রাম মেডিকেল কলেজ থেকে এমবিবিএস পাশ করেন। ১৯৯২ সালে
                সাইকিয়াট্রিতে উচ্চতর এফসিপিএস ডিগ্রি অর্জন করেন। এরপর বিশেষজ্ঞ
                চিকিৎসক হিসেবে ঢাকা মেডিকেল কলেজ হাসপাতাল, মিটফোর্ড হাসপাতালে
                কর্মরত ছিলেন। মানসিক রোগের ও চিকিৎসা বিষয়ে উচ্চতর প্রশিক্ষনের
                জন্য হু-এর ফেলোশিপ অর্জন করেন ব্যাংকক, থাইল্যান্ড থেকে। পরবর্তী
                সময় জাইকা ফেলোশিপ পান জাপান থেকে। প্রথম আলোসহ জাতীয় দৈনিক
                পত্রিকাগুলোতে তিনি সম-সাময়িক সামাজিক ইস্যু ও মানসিক স্বাস্থ্য
                বিষয়ক কলাম লিখে থাকেন। তিনি নিয়মিত টিভি-টকশোতে অংশ নিয়ে থাকেন।
                বর্তমানে তিনি জাতীয় মানসিক স্বাস্থ্য ইন্সটিটিউটে অধ্যাপক হিসেবে
                কর্মরত আছেন।
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-red-100 text-center py-5">
          <h1 className="text-2xl sm:text-3xl text-blue-500 font-bold ">
            ! ! ! ৮০০ টাকার বই
          </h1>
          <h1 className="text-2xl sm:text-3xl text-blue-500 font-bold ">
            মাত্র ৬২০ টাকায় ! ! !
          </h1>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 text-center my-5">
            *অফার সীমিত সময়ের জন্য*
          </h1>
        </div>
      </section>

      {/* books reading section  */}

      <section className="mt-12" ref={section1}>
        <h1 className="text-2xl md:text-4xl text-center font-semibold text-gray-600">
          একটু পড়ে দেখুন
        </h1>

        <div className=" border-4 border-green-500 text-center py-3 px-12 mt-8">
          <h2 className="text-2xl md:text-3xl text-blue-500  font-semibold mt-4">
            পজেটিভ সাইকোলজি
          </h2>
          <h2 className="text-2xl md:text-3xl text-blue-500  font-semibold mt-4">
            (মোট ১৭৫ পৃষ্ঠা)
          </h2>
          <div className=" w-full flex mx-auto flex-wrap mt-5">
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-scaled.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">পজেটিভ সাইকোলজি – ১</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">পজেটিভ সাইকোলজি – ২</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">পজেটিভ সাইকোলজি – ৩</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">পজেটিভ সাইকোলজি – ৪</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">পজেটিভ সাইকোলজি – ৫</h3>
            </div>
          </div>
        </div>
        <div className=" border-4 border-purple-700 text-center py-3 px-12">
          <h2 className="text-2xl md:text-3xl text-blue-500  font-semibold mt-4">
          ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ
          </h2>
          <h2 className="text-2xl md:text-3xl text-blue-500  font-semibold mt-4">
          (মোট ১৫৮ পৃষ্ঠা)
          </h2>
          <div className=" w-full flex mx-auto flex-wrap mt-5">
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-scaled.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ১</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ২</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ৩</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ৪</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ৫</h3>
            </div>
          </div>
        </div>

        <div className=" border-4 border-emerald-600 text-center py-3 px-12 ">
          <h2 className="text-2xl md:text-3xl text-blue-500  font-semibold mt-4">
            মনের সুখ মনের অসুখ
          </h2>
          <h2 className="text-2xl md:text-3xl text-blue-500  font-semibold mt-4">
            (মোট ১২৮ পৃষ্ঠা)
          </h2>
          <div className=" w-full flex mx-auto flex-wrap  mt-5">
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5 ">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-scaled.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">মনের সুখ মনের অসুখ – ১</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">মনের সুখ মনের অসুখ – ২</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">মনের সুখ মনের অসুখ – ৩</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">মনের সুখ মনের অসুখ – ৪</h3>
            </div>
            <div className="text-center w-1/2 md:w-1/4 lg:w-1/5">
              <img
                src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-scaled-450x450.jpg"
                alt="img"
                className="w-full h-60"
              />
              <h3 className="">মনের সুখ মনের অসুখ – ৫</h3>
            </div>
          </div>
        </div>
        <div className="bg-pink-100 py-10">
        <button
              className="mx-auto block h-16 w-80 bg-pink-600 rounded-2xl text-lg sm:text-md text-white font-semibold button2"
              onClick={() => scrollHandler(section2)}
            >
                            
                <span className="showText2 flex w-80 px-4 py-4">বই গুলো অর্ডার করতে চাই <FaRegArrowAltCircleDown  className="text-2xl font-bold mt-1 ml-2"/></span>
                <span className=" hiddenText2 w-80 px-1 py-5">কল 01317348428 অথবা ক্লিক করুন</span>
            </button>
        </div>
       
      </section>
      {/* form section */}
      <section className="w-full bg-gray-100 py-6">
        <div className="w-11/12 xl:w-2/3 mx-auto">
          <h1 className="text-center text-3xl font-samibold text-red-700 border-4 border-orange-400 py-2 ">
            বিঃ দ্রঃ সম্পূর্ণ নিশ্চিত হয়ে অর্ডার করুন
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-5">
            সমগ্র বাংলাদেশে হোম ডেলিভারী দেয়া হয়
          </h1>
          <div className="bg-gray-500 p-4 text-center ">
            <p className="text-xl md:text-2xl text-white font-semibold">
              ডেলিভারী চার্জ <br />
              ঢাকার সিটির ভেতর ৭০ টাকা
              <br />
              ঢাকার বাইরে ১২০ টাকা
            </p>
          </div>
          <form className="text-lg pt-6 pb-8 mb-4" ref={section2}>
            <div className="w-full md:flex">
              {/* left side from */}
              <div className="w-full md:w-1/2">
                <h3>Billing details</h3>
                <div className="mb-2 mt-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-1"
                    for="name"
                  >
                    নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="text-sm appearance-none border border-gray-400 rounded w-full py-2 px-3 placeholder:text-gray-600 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="name"
                    required
                    placeholder="সম্পূর্ণ নাম লিখুন"
                  />
                </div>
                <div className="mb-2 ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-1"
                    for="number"
                  >
                    ফোন <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="text-sm appearance-none border border-gray-400 rounded w-full py-2 px-3 placeholder:text-gray-600 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="number"
                    type="number"
                    required
                    placeholder="সঠিক ফোন নাম্বার লিখুন"
                  />
                </div>
                <div className="mb-2 ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 ml-1"
                    for="address"
                  >
                    ঠিকানা <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="text-sm appearance-none border border-gray-400 rounded w-full py-2 px-3 text-black placeholder:text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    required
                    placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                  />
                </div>
                <div className="mb-2 ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 "
                    for="address"
                  >
                    country <span className="text-red-500">*</span>
                  </label>
                  <p className="text-lg font-bold">Bangladesh</p>
                </div>
              </div>

              {/* right side from */}
              <div className="w-full md:w-1/2  md:ml-12">
                <h1>Your order</h1>

                <div className="w-full flex mt-5">
                  <p className="w-1/2 text-sm">Product</p>
                  <p className="w-1/2 text-sm"> Subtotal</p>
                </div>
                <div className="w-full flex mt-5">
                  <p className="w-1/2 text-sm">সাইকোলজি প্যাকেজ</p>
                  <p className="w-1/2 text-sm">× 1 ৳ 620</p>
                </div>
                <div className="w-full flex mt-5">
                  <p className="w-1/2 text-sm">Subtotal</p>
                  <p className="w-1/2 text-sm">৳ 620</p>
                </div>
                <div className="w-full flex mt-5">
                  <p className="w-1/2 text-sm mt-3">Shipping</p>
                  <div className="w-1/2 text-sm">
                    <div className="w-full flex">
                      <input
                        type="radio"
                        id="scales"
                        name="scales"
                        checked
                        className="peer/draft"
                      />
                      <label for="scales" className="ml-2">
                        ঢাকার বাইরে: ৳ 120
                      </label>
                    </div>
                    <div className="w-full flex">
                      <input
                        type="radio"
                        id="scales"
                        name="scales"
                        className="peer/draft"
                      />
                      <label for="scales" className="ml-2">
                        ঢাকার ভেতরে: ৳ 70
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-5">
                  <p className="w-1/2 text-sm">Total</p>
                  <p className="w-1/2 text-md font-bold">৳ 740</p>
                </div>
                <div className="mt-5">
                  <h3 className=" text-lg">ক্যাশ অন ডেলিভারি</h3>
                  <p className=" text-md font-bold bg-gray-200 text-sm text-gray-500 py-4 px-4 mt-4">
                    পন্য হাতে পেয়ে টাকা পরিশোধ করুন
                  </p>
                </div>
                <div className="mt-5">
                  <span className=" text-xs">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <span className="text-red-600 ">privacy policy</span>.
                  </span>
                  <button className=" text-md font-bold bg-gray-200 text-sm text-gray-500 py-4 px-4 mt-4 w-full text-center rounded bg-orange-600 text-white">
                    পন্য হাতে পেয়ে টাকা পরিশোধ করুন
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
