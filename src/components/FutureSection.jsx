import React from "react";

const FutureSection = () => {
  const features = [
    {
      icon: "/assets/free.png",
      title: "Free Transfer",
      content:
        "Create a financial experience and automate repeat purchase by scheduling recurring payments.",
    },
    {
      icon: "/assets/multiple.png",
      title: "Multiple Account",
      content:
        "Run your operations with cash from your account and generate yield on funds stored in your account.",
    },
    {
      icon: "/assets/secur.png",
      title: "Unmatched Security",
      content:
        "Securely manage your finance with organization-wide MFA, card-locking, and account-level controls.",
    },
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Card Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-semibold text-[#2a8e9e]">
            FUTURE PAYMENT
          </span>
          <h2 className="text-4xl mt-4 font-semibold leading-tight">
            Experience that grows
            <br />
            with your scale.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8" // Adjust the icon size as needed
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
