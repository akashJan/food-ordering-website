import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-100 to-rose-50 flex justify-center items-center px-6 py-10">
      <div className="bg-white w-full max-w-5xl p-10 rounded-2xl shadow-2xl animate-fadeInUp">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-rose-500 tracking-wide drop-shadow-md">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-10">
          We’d love to hear from you! Feel free to reach out for queries,
          support, or feedback.
        </p>

        {/* Main Content */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 justify-between items-start">
          {/* Left Section */}
          <div className="flex-1 min-w-[260px] text-gray-700 text-lg leading-8 animate-slideLeft">
            <h2 className="text-2xl font-semibold text-rose-500 mb-4">
              Get in Touch
            </h2>

            <p>📩 Email: support@foodexpress.in</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📍 Address: Mumbai, Maharashtra, India</p>
            <p>🕒 Working Hours: Mon–Sun (10 AM – 10 PM)</p>
          </div>

          {/* Right Section */}
          <form className="flex-1 min-w-[280px] flex flex-col gap-5 animate-slideRight">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border-2 border-rose-200 rounded-xl bg-rose-50 outline-none focus:border-rose-500 focus:shadow-lg transition"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border-2 border-rose-200 rounded-xl bg-rose-50 outline-none focus:border-rose-500 focus:shadow-lg transition"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border-2 border-rose-200 rounded-xl bg-rose-50 outline-none focus:border-rose-500 focus:shadow-lg transition"
              required
            />

            <textarea
              placeholder="Your Message"
              className="w-full p-4 border-2 border-rose-200 rounded-xl bg-rose-50 h-32 outline-none focus:border-rose-500 focus:shadow-lg transition"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full p-4 bg-rose-500 text-white font-bold text-lg rounded-xl shadow-md hover:bg-rose-600 hover:-translate-y-1 hover:shadow-xl transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
