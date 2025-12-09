import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 font-poppins">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-rose-500 mb-2">FoodExpress</h2>
          <p className="text-gray-400 max-w-xs">
            Delivering fresh food at your doorstep across India.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            {["About Us", "Careers", "Blog", "Press"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-rose-500 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white text-lg mb-3">Help</h3>
          <ul className="space-y-2">
            {["FAQs", "Customer Care", "Track Order", "Report Issue"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-rose-500 transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white text-lg mb-3">Legal</h3>
          <ul className="space-y-2">
            {["Terms & Conditions", "Privacy Policy", "Refund Policy"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-rose-500 transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Popular Cities */}
        <div>
          <h3 className="text-white text-lg mb-3">Popular Cities</h3>
          <ul className="space-y-2">
            {["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"].map(
              (city) => (
                <li
                  key={city}
                  className="cursor-pointer hover:text-rose-500 transition"
                >
                  {city}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 FoodExpress • Made with ❤️ in India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
