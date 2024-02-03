import React from "react";

const FormPage = () => {
  return (
    <section className="w-full bg-gray-100 py-6 my-8">
      <div className="w-2/3 mx-auto">
        <h1 className="text-center text-3xl font-samibold text-red-700 border-4 border-orange-400 py-2 ">
          বিঃ দ্রঃ সম্পূর্ণ নিশ্চিত হয়ে অর্ডার করুন
        </h1>
        <h1 className="text-4xl font-bold text-center my-5">
          সমগ্র বাংলাদেশে হোম ডেলিভারী দেয়া হয়
        </h1>
        <div className="bg-gray-500 p-4 text-center ">
          <p className="text-2xl text-white font-semibold">
            ডেলিভারী চার্জ <br />
            ঢাকার সিটির ভেতর ৭০ টাকা
            <br />
            ঢাকার বাইরে ১২০ টাকা
          </p>
        </div>
        <form className="text-lg pt-6 pb-8 mb-4">
          <div className="w-full flex">
            {/* left side from */}
            <div className="w-6/12">
              <h3>Billing details</h3>
              <div className="mb-2 mt-3">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-1"
                  for="name"
                >
                  নাম <span className="text-red-500">*</span>
                </label>
                <input
                  className=" appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="name"
                  placeholder="******************"
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
                  className=" appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="number"
                  placeholder="******************"
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
                  className=" appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="******************"
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
            <div className="w-6/12 ml-12">
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
                      type="checkbox"
                      id="scales"
                      name="scales"
                      checked
                      className="rounded-full"
                    />
                    <label for="scales" className="ml-2">
                      ঢাকার বাইরে: ৳ 120
                    </label>
                  </div>
                  <div className="w-full flex">
                    <input
                      type="checkbox"
                      id="scales"
                      name="scales"
                      className="rounded-full"
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
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our <span className="text-red-600 ">privacy policy</span>.
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
  );
};

export default FormPage;
