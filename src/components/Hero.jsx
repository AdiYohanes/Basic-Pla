import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#F5F9FA] pt-[120px] md:pt-60 px-4 md:px-0">
      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-50">
        {/* Text Content */}
        <div className="order-2 md:order-1 md:text-left space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Get Paid early</span>
            <span className="block">save automatically</span>
            <span className="block">all your pay</span>
          </h1>

          <div className="text-lg md:text-2xl text-[#4B5767] opacity-40 space-y-2">
            <p className="hidden md:block">
              Supports small businesses with simple invoicing,
            </p>
            <p className="hidden md:block">
              powerful integrations, and cash flow management tools.
            </p>
          </div>

          {/* Email Input Mobile */}
          <div className="flex flex-col md:flex-row gap-4 md:space-x-4">
            <input
              className="w-full md:w-[300px] p-4 h-12 md:h-10 border border-gray-500 rounded-2xl focus:outline-none focus:border-[#2D9CDB] transition-all duration-300"
              placeholder="Enter Email Address"
            />

            <a className="bg-[#2D9CDB] text-white rounded-xl py-3 md:py-2 px-6 flex justify-center items-center gap-2 hover:bg-[#1F7AC7] transition-all duration-300 shadow-lg transform hover:scale-105 cursor-pointer">
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path d="M11.854 7.854a.5.5 0 0 0 0-.708L8.707 4.707a.5.5 0 0 0-.708.708L10.293 7H2.5a.5.5 0 0 0 0 1h7.793l-2.294 2.293a.5.5 0 1 0 .708.708l3.146-3.146z" />
              </svg>
            </a>
          </div>

          {/* Client Colab Mobile */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:space-x-20 pt-6 md:pt-25">
            <img
              src="/assets/client1.png"
              alt="client1"
              className="h-8 md:h-auto"
            />
            <img
              src="/assets/client2.png"
              alt="client2"
              className="h-8 md:h-auto"
            />
            <img
              src="/assets/client3.png"
              alt="client3"
              className="h-8 md:h-auto"
            />
          </div>
        </div>

        {/* Cards Container */}
        <div className="order-1 md:order-2 relative md:static">
          {/* Main Card */}
          <div className="max-w-xs md:max-w-sm mx-auto md:mx-0 rounded-lg overflow-hidden bg-white shadow-lg md:shadow-none">
            <div className="flex p-4 md:p-8 items-center gap-4 md:gap-6">
              <img
                src="/assets/Location.png"
                alt="location"
                className="w-10 h-10"
              />
              <div className="block">
                <h1 className="text-xl md:text-2xl font-bold">John House</h1>
                <p className="text-sm md:text-base text-[#4B5767]">
                  JohnHouse@gmail.com
                </p>
              </div>
            </div>

            <div className="mx-4 md:mx-8 mb-4 space-y-4">
              <div className="rounded-2xl border border-gray-400 p-4">
                <p className="text-sm text-gray-400">Invoice</p>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  $1,783,293
                </h2>
                <p className="text-sm text-gray-400">February 2,2025</p>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-400 p-3">
                  <label className="flex items-center justify-between w-full cursor-pointer">
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/credit.png"
                        alt="credit"
                        className="w-6"
                      />
                      <span className="text-sm text-gray-400">Credit Card</span>
                    </div>
                    <input
                      type="radio"
                      name="check"
                      className="cursor-pointer"
                    />
                  </label>
                </div>

                <div className="rounded-2xl border border-gray-400 p-3">
                  <label className="flex items-center justify-between w-full cursor-pointer">
                    <div className="flex items-center gap-2">
                      <img src="/assets/bank.png" alt="bank" className="w-6" />
                      <span className="text-sm text-gray-400">
                        Bank Account
                      </span>
                    </div>
                    <input
                      type="radio"
                      name="check"
                      className="cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              {/* Pay Button */}
              <div className="rounded-xl border border-gray-400 overflow-hidden">
                <div className="w-full bg-[#023347] rounded-xl p-3 text-center text-white hover:bg-[#014f5d] transition-colors duration-300 cursor-pointer">
                  Pay
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards Mobile */}
          <div className="hidden md:block">
            <div className="absolute top-40 right-100 bg-[var(--primary)] w-[200px] md:w-[250px] h-[250px] md:h-[300px] rounded-xl shadow-lg">
              <div className="p-6 md:p-10 space-y-4 text-white">
                <h2 className="text-sm">Credit Card</h2>
                <h2 className="tracking-widest text-lg md:text-xl font-semibold rounded-lg">
                  1234 **** ****
                </h2>
              </div>
            </div>

            <div className="absolute top-90 right-100 bg-[#023347] w-[200px] md:w-[250px] h-[80px] md:h-[100px] rounded-b-xl shadow-lg">
              <div className="flex justify-between items-center p-4 md:p-8 text-white">
                <h2 className="uppercase text-base md:text-lg tracking-wider">
                  Visa
                </h2>
                <img
                  src="/assets/wifi.png"
                  alt="wifi"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
