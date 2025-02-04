import React from "react";

const WhySection = () => {
  const features = [
    {
      title: "Fast & Efficient",
      description:
        "Optimal work processes provide the best results in the shortest time.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "blue-600",
    },
    {
      title: "Under Warranty",
      description:
        "Guaranteed satisfaction and quality of work results with an official guarantee",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "green-600",
    },
    {
      title: "Professional Team",
      description:
        "Done by a team of experts experienced in their respective fields",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      color: "purple-600",
    },
  ];

  const features2 = [
    {
      title: "Secure Transactions",
      description:
        "Bank-grade security protocols to protect your financial data",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      color: "red-600",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer service ready to assist you anytime",
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
      color: "yellow-600",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase text-gray-900 mb-4">
            Why choose FinPay?
          </h2>
          <p className="text-lg text-gray-600">
            The advantages that set us apart from the rest
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F5F9FA] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className={`mb-4 text-${feature.color}`}>
                  <svg
                    className="w-12 h-12 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 justify-center items-center">
          {features2.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F5F9FA] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <div className={`mb-4 text-${feature.color}`}>
                  <svg
                    className="w-12 h-12 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
