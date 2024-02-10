import React from 'react';

const AboutWritter = () => {
    return (
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
    );
};

export default AboutWritter;