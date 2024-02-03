import ReactPlayer from "react-player";
import { FaCheck } from "react-icons/fa";
const TopSection = () => {
    // const buttonTextChange=()=>{
    //     document.getElementById('button1').innerText('adnan');
    //     alert("alert");
    // }

  return (
    <>
   

      {/* section 2 .............. */}

      <section className="mx-auto py-12  begroundColor1">
        <h1 className=" text-gray-600 font-bold text-center text-xl sm:text-4xl">
          কেন এই বইগুলো আপনার দরকার?
        </h1>
        <div className="w-full md:flex mt-12 mx-1 sm:mx-3 md:mx-9">
          <div className="w-full md:w-1/2 mx-1 sm:mx-3 md:mx-9">
            <ul>
              <li className="flex font-semibold text-gray-700">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                ঘনিষ্ঠ সম্পর্কে পারস্পরিক দ্বন্দ্ব নিরসনের উপায়
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                প্রফুল্ল ও আনন্দদায়ক মন-মেজাজ গঠনে সক্ষম হওয়া
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                বিপর্যয়ের পর দ্রুত ঘুরে দাঁড়ানো
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                ব্যর্থতা ও হতাশার মুখে আশাবাদী মনোভাব টিকিয়ে রাখা
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                মনোযোগ নেতিবাচক থেকে ইতিবাচকের দিকে ঘুরিয়ে দেয়া
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                সুখ না সফলতা কোনটা দরকার
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mx-1 sm:mx-3 md:mx-9 mt-2 md:mt-0">
            <ul>
              <li className="flex font-semibold text-gray-700">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                ঘনিষ্ঠ সম্পর্কে পারস্পরিক দ্বন্দ্ব নিরসনের উপায়
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                প্রফুল্ল ও আনন্দদায়ক মন-মেজাজ গঠনে সক্ষম হওয়া
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                বিপর্যয়ের পর দ্রুত ঘুরে দাঁড়ানো
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                ব্যর্থতা ও হতাশার মুখে আশাবাদী মনোভাব টিকিয়ে রাখা
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                মনোযোগ নেতিবাচক থেকে ইতিবাচকের দিকে ঘুরিয়ে দেয়া
              </li>
              <li className="flex font-semibold text-gray-700 mt-3">
                <FaCheck className="mr-2  w-5 h-5 p-1 rounded-xl bg-green-500 text-white font-bold" />
                সুখ না সফলতা কোনটা দরকার
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSection;
