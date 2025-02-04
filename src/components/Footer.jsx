const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-96 pb-6 md:pt-12 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 pb-8 md:pb-0 border-b md:border-none border-gray-800">
            <h3 className="text-xl md:text-2xl font-bold text-blue-400">
              FinPay
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Modern financial solutions for tomorrow's businesses
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* Social Icons tetap sama */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-6 md:pt-0 pb-8 md:pb-0 border-b md:border-none border-gray-800">
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="mt-3 md:mt-4 space-y-2">
              {[
                "Payment Processing",
                "Online Banking",
                "Business Tools",
                "Developer API",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 text-xs md:text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="pt-6 md:pt-0 pb-8 md:pb-0 border-b md:border-none border-gray-800">
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="mt-3 md:mt-4 space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Compliance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 text-xs md:text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="pt-6 md:pt-0">
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
              Stay Updated
            </h4>
            <form className="mt-3 md:mt-4 flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md md:rounded-l-md focus:outline-none text-white"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md md:rounded-r-md transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
          <p>
            &copy; {new Date().getFullYear()} FinPay, Inc. All rights reserved.
          </p>
          <p className="mt-2">
            Secure financial solutions for the modern world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
